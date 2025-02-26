
import Image from 'next/image'
import { TbWorld } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="astro-header flex items-center justify-center ">
            <div className="astro-in-head">
                <div className="flex items-center justify-between w-full ">
                    <div className="flex items-center">
                        <Image 
                            src="/logo.png" 
                            alt="loading..." 
                            width="120"
                            height="50"
                            className="" 
                        />
                    </div>
                <div className="astro-nav-links flex items-center justify-center ">
                    <div className="flex items-center">
                        <button id="hamburger" className="astro-head-links text-white   ">
                            <i className="text-white "style={{ fontSize: '25px' }} ><TbWorld /></i>
                        </button>
                    </div>
                    <Link href="#home" className=" astro-head-links">
                        <i className="text-white"style={{ fontSize: '25px' }}><IoIosNotificationsOutline /></i>
                    </Link>
                    <Link href="#about" className="astro-head-links">
                        <Image 
                            src="/dash.png" 
                            alt="dash" 
                            width={25} 
                            height={25}
                        />
                     </Link>
                    {/* <a href="#services" className="text-white hover:text-gray-300">
                        <i className="fa-regular fa-bell"></i> */}
                     {/* </a>  */}
                    <Link href="#contact" className="text-white astro-profile">
                        <Image 
                            src="/user2.png" 
                            alt="profile" 
                            width={35}  // Width in pixels
                             height={35}
                        />
                    </Link>
                </div>
                </div>
                
            </div>
        </header>
  )
}
