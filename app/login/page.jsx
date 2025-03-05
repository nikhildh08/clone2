"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/app/login/login.module.css";
import {
  FaAndroid,
  FaFacebookF,
  FaInstagram,
  FaQuora,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
// import { SiAndroid } from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";

export default function LoginPage() {
  return (
    <div className={styles.nboby}>
      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.mobileHeader}>
              <div className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="loading..."
                  width={130}
                  height={50}
                  className={styles.logoImage}
                />
              </div>
            </div>
            <nav className={styles.navLinks}>
              <Link href="#contact" className={styles.profile}>
                <Image
                  src="/user2.png"
                  width={35}
                  height={35}
                  alt=""
                  className={styles.profileImage}
                />
                <h5 className={styles.signInText}>SignIN</h5>
              </Link>
            </nav>
          </div>
        </header>

        {/* Login Form */}
        <div className={styles.loginContainer}>
          <div className={styles.loginBox}>
            <h2>Login</h2>
            <span>Enter the credentials.</span>
          </div>
          <form action="/dashboard/firstpage/" method="POST">
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Email or Phone number.."
              required
            />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Login</button>
          </form>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.socialIcons}>
            <AiFillAndroid size={25} className="text-white" />

            <FaFacebookF size={25} className="text-white" />
            <FaInstagram size={25} className="text-white" />
            <FaQuora size={25} className="text-white" />
            <FaYoutube size={25} className="text-white" />
            <FaXTwitter size={25} className="text-white" />
          </div>

          <div className={styles.footerLinks}>
            <ul className={styles.footerList}>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className={styles.footerLink}>
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className={styles.footerBox}>
            <p className={styles.footerText}>
              Copyright &copy; 2023. Made with ❤️ by Dhwani Astro.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
