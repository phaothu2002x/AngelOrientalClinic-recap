import LogoComponent from "@/components/logo";
import SideBar from "@/components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="relative flex h-full ">
      <div className=" flex w-1/12 flex-col items-center bg-[#B5C0D0]">
        <LogoComponent />
        <div className=" mt-10 w-28 flex-1">
          <SideBar />
        </div>
      </div>
      <main className=" flex-1 bg-[#F9F5F6]">{children}</main>
    </div>
  );
};

export default DashboardLayout;
