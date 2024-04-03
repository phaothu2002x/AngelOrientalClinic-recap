import Image from "next/image";
import Logo from "@/public/Logo.svg";
import Link from "next/link";

const LogoComponent = () => {
  return (
    <>
      <Link
        href="/"
        className="flex min-h-28 w-full items-center justify-center border border-slate-200"
      >
        <Image src={Logo} width={60} height={60} alt="Picture of the author" />
      </Link>
    </>
  );
};

export default LogoComponent;
