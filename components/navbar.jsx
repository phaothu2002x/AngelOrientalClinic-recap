import { CirclePlus, Search } from "lucide-react";
import { Button } from "./ui/button";
import addNewBtn from "./addNewBtn";

const Navbar = (props) => {
  return (
    // <header className="flex h-full w-full items-center justify-between px-8">
    //   <h1 className="flex-1 text-lg font-semibold tracking-wider">Patients</h1>
    //   <div className="flex-4 flex items-center space-x-5">
    //     <addNewBtn />
    //     <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 bg-stone-50">
    //       <Search />
    //     </div>
    //     <div className="-border-gray-200 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2">
    //       <img
    //         className="h-full w-full object-cover"
    //         src="https://th.bing.com/th/id/OIP.fmLeWCb8UTJHF2DMEyY8lAHaEL?rs=1&pid=ImgDetMain"
    //         alt="avatar"
    //       />
    //     </div>
    //   </div>
    // </header>
    <header className="flex w-full items-center justify-between border-b border-slate-200  px-[5%] py-7">
      <div className="flex-1 text-2xl font-semibold tracking-wider">
        {props.title}
      </div>
      <div className="flex-4 flex items-center space-x-5">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 bg-stone-50">
          <Search />
        </div>
        <div className="-border-gray-200 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2">
          <img
            className="h-full w-full object-cover"
            src="https://th.bing.com/th/id/OIP.fmLeWCb8UTJHF2DMEyY8lAHaEL?rs=1&pid=ImgDetMain"
            alt="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
