import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex justify-between w-[100%] mt-5 mx-0 my-0 items-start p-6 bg-[#2f1254] text-white">
      {/* Left side (Copyright) */}
      <div className="flex flex-col">
        <p className="text-sm">
          Copyright © 2023. Made with ❤️ by Dhwani Astro.
        </p>
      </div>

      {/* Right side (Footer links) */}
      <div className="flex items-start space-x-6">
        <ul className="flex space-x-6">
          <li>
            <Link href="#"
               className="text-sm text-white hover:text-gray-400">
                Cookies
              
            </Link>
          </li>
          <li>
            <Link href="#"
               className="text-sm text-white hover:text-gray-400">
                Terms & Conditions
              
            </Link>
          </li>
          <li>
            <Link href="#"
               className="text-sm text-white hover:text-gray-400">
                Privacy Policy
              
            </Link>
          </li>
          <li>
            <Link href="#"
               className="text-sm text-white hover:text-gray-400">
                Support
              
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
