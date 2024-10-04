import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import hnk from "public/hnk.png";
import Link from "next/link";
import Button from "./Button";
import ThemeSwitcher from "./ThemeSwitcher";
import { BsDownload } from "react-icons/bs";
import { RiDownload2Line, RiFileDownloadFill } from "react-icons/ri";
const Sidebar = () => {
  return (
    <div>
      <Image
        src={hnk}
        alt="henok pic"
        width="128"
        height="128"
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-normal tracking-wider font-kaushan">
        <span className="text-blue-500">Henok</span> Gebresenbet
      </h3>
      <p
        className="px-2 py-1 my-3  bg-gray-200 dark:bg-dark-200
       rounded-full"
      >
        Fullstack Developer
      </p>
      <Link
        href="/cv/HENOK-GEBRESENBET.pdf"
        className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full flex items-center justify-center"
        download="Hnk-resume.pdf"
      >
        <RiDownload2Line className="w-6 h-6" />
        Download Resume
      </Link>
      {/* social icons */}
      <div className="flex items-center justify-around my-5 w-9/12 mx-auto text-blue-500 md:w-full">
        <Link href="https://github.com/Henok-Al" target="_blank">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/henok-alemu-baaa30237/"
          target="_blank"
        >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://x.com/HenokGebre70114" target="_blank">
          <FaXTwitter className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>A.A, Ethiopia</span>
        </div>
        <p className="my-2 text-xs">henok.gebresenbet@gmail.com</p>
        <p className="my-2">+251900060965</p>
      </div>
      {/* email button */}
      <Button />
      <ThemeSwitcher />
    </div>
  );
};

export default Sidebar;
