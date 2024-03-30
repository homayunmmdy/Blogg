import React from "react";
import Link from "next/link";
import SiteConfig from "../config/site";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-base-content rounded">
      <ul className="grid grid-flow-col gap-4">
        {SiteConfig.nav.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.href} className="link link-hover">
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/">
            <FaFacebookF size={22} />
          </Link>
          <Link href="/">
            <FaInstagram size={22} />
          </Link>
          <Link href="/">
            <FaXTwitter size={22} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>کپی رایت © {new Date().getFullYear()} -تمامی حقوق برای {SiteConfig.name} محفوظ است</p>
      </aside>
    </footer>
  );
};

export default Footer;
