import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

const TopBanner = () => {
  return (
    <div className="bg-[#09243F] flex items-center justify-between text-white p-4">
      <div>University of Nevada, Las Vegas | 4505 S Maryland Pkwy, 89154</div>
      <div className="flex items-center gap-8 text-2xl">
        <Link
          href="https://www.facebook.com/apsi.unlv/
"
          target="_blank"
        >
          <FaFacebookF />
        </Link>
        <Link
          href="https://twitter.com/unlvapsirho
"
          target="_blank"
        >
          <FaTwitter />
        </Link>
        <Link
          href="https://www.instagram.com/unlvapsirho/
"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.tiktok.com/@apsirho.unlv
"
          target="_blank"
        >
          <FaTiktok />
        </Link>
      </div>
    </div>
  );
};
export default TopBanner;
