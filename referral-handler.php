<?php
// referral-handler.php

header("Access-Control-Allow-Origin: https://anointinghealth.co.uk");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid request body']);
    exit;
}

// ── Field map: keep this in sync with FORM_STEPS in referral.js ──────
$fields = [
    'referrerName'         => 'Referrer Name',
    'referrerRelationship' => 'Relationship to Patient',
    'referrerEmail'        => 'Referrer Email',
    'referrerPhone'        => 'Referrer Phone',
    'patientName'          => 'Patient Name',
    'patientDob'           => 'Patient DOB',
    'patientAddress'       => 'Patient Address',
    'patientNeeds'         => 'Care Needs',
];

$clean = [];
$errors = [];

foreach ($fields as $key => $label) {
    $value = trim($data[$key] ?? '');
    if ($value === '') {
        $errors[] = "$label is required.";
    }
    $clean[$key] = $value;
}

$clean['notes'] = trim($data['notes'] ?? '');

if (!empty($clean['referrerEmail']) &&
    !filter_var($clean['referrerEmail'], FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Referrer email is invalid.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => implode(' ', $errors)]);
    exit;
}

// Strip header-injection risk from anything used in mail headers
$clean['referrerEmail'] = preg_replace('/[\r\n]+/', '', $clean['referrerEmail']);
$clean['referrerName']  = preg_replace('/[\r\n]+/', '', $clean['referrerName']);

$to      = "referrals@anointinghealth.co.uk";
$subject = "New Referral: " . $clean['patientName'];

$body  = "REFERRER\n";
$body .= "Name: {$clean['referrerName']}\n";
$body .= "Relationship: {$clean['referrerRelationship']}\n";
$body .= "Email: {$clean['referrerEmail']}\n";
$body .= "Phone: {$clean['referrerPhone']}\n\n";
$body .= "PATIENT\n";
$body .= "Name: {$clean['patientName']}\n";
$body .= "DOB: {$clean['patientDob']}\n";
$body .= "Address: {$clean['patientAddress']}\n";
$body .= "Care Needs: {$clean['patientNeeds']}\n\n";
$body .= "Notes:\n{$clean['notes']}\n";

$headers   = [];
$headers[] = "From: no-reply@anointinghealth.co.uk";
$headers[] = "Reply-To: " . $clean['referrerEmail'];
$headers[] = "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Could not send referral. Please try again later.']);
}