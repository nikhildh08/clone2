"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from '@/app/login/login.module.css';
import {
  FaAndroid,
  FaFacebookF,
  FaInstagram,
  FaQuora,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { AiFillAndroid } from "react-icons/ai";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Login - Dhwani Astro</title>
        <meta name="description" content="Login to Dhwani Astro and access personalized insights. Secure and easy sign-in process." />
        <meta name="keywords" content="astrology, login, Dhwani Astro, horoscope, sign-in" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Login - Dhwani Astro" />
        <meta property="og:description" content="Login to Dhwani Astro for personalized astrology insights." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yourwebsite.com/login" />
        <link rel="canonical" href="https://yourwebsite.com/login" />
      </Head>
      <body>
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.headerInner}>
              <div className={styles.mobileHeader}>
                <div className={styles.logo}>
                  <Image
                    src="/logo.png"
                    alt="Dhwani Astro Logo"
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
                    alt="User Profile"
                    className={styles.profileImage}
                  />
                  <h5 className={styles.signInText}>Sign In</h5>
                </Link>
              </nav>
            </div>
          </header>

          {/* Login Form */}
          <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
              <h1>Login</h1>
              <p>Enter your credentials to access your account.</p>
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
      </body>
    </>
  );
}
