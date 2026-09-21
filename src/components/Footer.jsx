import { quickLinks, services } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#898d92] text-white py-5 px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
      <div className="max-w-container-max mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* BRAND */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src={"/images/logo.webp"} width={65} height={65} alt="Anointing health logo" priority/>
            </Link>
            <p className="text-[14px] opacity-90 leading-relaxed font-sans">
              Providing person-centred care that empowers individuals to live
              with dignity, independence, and joy within the comfort of their
              own homes and communities.
            </p>

            {/* SOCIALS
            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href={item.href}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-colors hover:bg-primary"
                  >
                    <Icon className="text-white" />
                  </Link>
                );
              })}
            </div> */}
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold font-serif text-lg uppercase tracking-wider mb-6">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, i) => (
                <li
                  key={i}
                  className="text-[14px] opacity-90 hover:opacity-100 hover:text-white transition-all font-ui"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 font-serif text-lg">
              Services
            </h4>

            <ul className="flex flex-col gap-3">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="text-[14px] opacity-90 hover:opacity-100 hover:text-white transition-all"
                >
                  <Link href={service.href} scroll={false}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 font-serif text-lg">
              Contact Us
            </h4>

            <div className="flex flex-col gap-4">
              <Link
                href="mailto:info@anointinghealthcare.co.uk"
                className="text-[14px] opacity-80"
              >
                Email: info@anointinghealthcare.co.uk
              </Link>
              <Link href="tel:+447307373405" className="text-[14px] opacity-80">
                Phone: +44 7307 373405
              </Link>
              <Link
                href="https://maps.app.goo.gl/6dzKeHawegvLepb37"
                target="_blank"
                className="text-[14px] opacity-80"
              >
                Address: First Floor, Swan Buildings 20 Swan Street Manchester
                M4 5JW GB
              </Link>

              {/* <div className="mt-4 p-4 border border-white/20 rounded-lg inline-flex items-center gap-3">
                <span className="material-symbols-outlined text-white">
                  <MdVerified />
                </span>
                <span className="text-xs uppercase tracking-widest font-ui">
                  CQC Regulated
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-[#3f4941] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] text-surface-variant font-sans">
            © {new Date().getFullYear()} Anointing Health Care. All rights
            reserved.
          </p>

          {/* <div className="flex flex-wrap gap-4 font-ui">
            {legalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-[12px] opacity-90 hover:opacity-100 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
