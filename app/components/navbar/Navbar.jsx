import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import Link from "next/link";
import styles from "@/app/components/navbar/navbar.module.css";

export default function Navbar() {
  return (
    <header className={`${styles.container}  flex items-center justify-center `}>
      <div className={styles.astrohead}>
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
          <div
            className={`${styles.astronavlinks} flex items-center justify-center`}
          >
            <div className="flex items-center">
            <Link href="#world" className={styles.astroheadlinks}>
              <i className="text-white" style={{ fontSize: "25px" }}>
                <TbWorld />
              </i>
            </Link>
            </div>
            <Link href="#home" className={styles.astroheadlinks}>
              <i className="text-white" style={{ fontSize: "25px" }}>
                <IoIosNotificationsOutline />
              </i>
            </Link>
            <Link href="#about" className={styles.astroheadlinks}>
              <Image src="/dash.png" alt="dash" width={25} height={25} />
            </Link>
           
            <Link
              href="#contact"
              className={`text-white ${styles.astroprofile}`}
            >
              <Image
                src="/user2.png"
                alt="profile"
                width={35} 
                height={35}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
 
  );
}


  
