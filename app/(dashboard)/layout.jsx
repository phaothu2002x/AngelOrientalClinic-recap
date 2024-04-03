import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Link from "next/link";
const DashboardLayout = ({ children }) => {
  return (
    <div className="relative flex h-full ">
      <div className=" flex w-1/12 flex-col items-center bg-[#B5C0D0]">
        <Link
          href="/"
          className="flex min-h-28 w-full items-center justify-center border border-slate-200"
        >
          <Image
            src={Logo}
            width={60}
            height={60}
            alt="Picture of the author"
          />
        </Link>

        <div className=" mt-10 w-28 flex-1">
          <SideBar />
        </div>
      </div>
      <main className=" flex-1 bg-[#F9F5F6]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
