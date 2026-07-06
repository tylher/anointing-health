<?php
// contact-handler.php
// Handles POST from the Next.js ContactForm and emails the submission.

// ── CORS ─────────────────────────────────────────────────────────────
// Replace with your actual deployed frontend origin (not "*") once you
// know it, so random sites can't POST through your mailer.
header("Access-Control-Allow-Origin: https://anointinghealthcare.co.uk/");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Read JSON body ───────────────────────────────────────────────────
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request body']);
    exit;
}

// ── Validate + sanitize ──────────────────────────────────────────────
$name    = trim($data['name']    ?? '');
$email   = trim($data['email']   ?? '');
$phone   = trim($data['phone']   ?? '');
$role    = trim($data['role']    ?? '');
$message = trim($data['message'] ?? '');

$errors = [];
if ($name === '')                                     $errors[] = 'Name is required.';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';
if ($message === '')                                   $errors[] = 'Message is required.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// Strip anything that could be used for header injection in the fields
// going into the mail headers (name/email), since we interpolate them.
$name  = preg_replace('/[\r\n]+/', '', $name);
$email = preg_replace('/[\r\n]+/', '', $email);

// ── Compose email ────────────────────────────────────────────────────
$to      = "you@anointinghealthcare.co.uk"; // <-- where you want to receive submissions
$subject = "New Contact Form Submission from $name";

$body  = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Role: $role\n\n";
$body .= "Message:\n$message\n";

$headers   = [];
$headers[] = "From: no-reply@anointinghealthcare.co.uk"; // use a domain address you control
$headers[] = "Reply-To: $email";
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Could not send message. Please try again later.']);
}