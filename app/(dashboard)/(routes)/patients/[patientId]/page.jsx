"use client";

import DeleteModal from "@/components/deleteModal";
import Navbar from "@/components/navbar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dot, PencilLine, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PatientDetail = (props) => {
  const handleDeletePatient = () => {
    alert("delete modal");
  };

  const [avatar, setAvatar] = useState("");
  //add new img from file
  const inputRef = useRef();
  const handleUpdateAvatar = () => {
    inputRef.current.click();
  };
  //preview avatar
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    console.log("check file", file);
    if (file) {
      file.preview = URL.createObjectURL(file);
      setAvatar(file);
    }
  };

  useEffect(() => {
    //clean up func
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const router = useRouter();
  return (
    <>
      <div className="flex flex-col">
        <Navbar title=" Patient Details" />

        {/* content */}
        <div className="flex h-full gap-6 p-8">
          <div className="flex-1 ">
            <div className="relative h-[180px] w-full rounded-lg bg-[url('https://images.unsplash.com/photo-1561212044-bac5ef688a07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] object-cover"></div>
            <div className="mt-6 space-y-6">
              <div className="flex justify-between gap-4">
                <div className="w-6/12">
                  <label htmlFor="firstName" className="mb-3 font-semibold">
                    First name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    placeholder="Babarra"
                    className="bg-sky-100 p-6"
                  />
                </div>
                <div className="w-6/12">
                  <label htmlFor="lastName" className="mb-3 font-semibold">
                    Last name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    placeholder="Anderson"
                    className="bg-sky-100 p-6"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="w-6/12">
                  <label htmlFor="email" className="mb-3 font-semibold">
                    Email
                  </label>
                  <Input
                    type="text"
                    id="email"
                    placeholder="Babarra"
                    className="bg-sky-100 p-6"
                  />
                </div>
                <div className="w-6/12">
                  <label htmlFor="phone" className="mb-3 font-semibold">
                    Phone number
                  </label>
                  <Input
                    type="text"
                    id="phone"
                    placeholder="09314422211"
                    className="bg-sky-100 p-6"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-5/12">
                    <label htmlFor="email" className="mb-3 font-semibold">
                      Email
                    </label>
                    <Input
                      className="bg-sky-100 p-6"
                      type="text"
                      id="idCard"
                      placeholder="0932132131"
                    />
                  </div>
                  <div className="w-5/12">
                    <label htmlFor="dob" className="mb-3 font-semibold">
                      DoB
                    </label>
                    <Input className="bg-sky-100 p-6" type="date" id="dob" />
                  </div>
                  <div className="w-2/12">
                    <label htmlFor="nationality" className="mb-3 font-semibold">
                      Nationality
                    </label>
                    <Input
                      className="bg-sky-100 p-6"
                      type="text"
                      id="nationality"
                      placeholder="Vietnam"
                    />
                  </div>
                </div>
                <div className="w-full space-y-4">
                  <label htmlFor="address" className=" font-semibold">
                    Address
                  </label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="123 Main street"
                    className="bg-sky-100 p-6"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse justify-between">
                {/* <UpdatePatientModal /> */}
                <div className="flex flex-row-reverse justify-between gap-5">
                  <Button variant="addNew">Update</Button>
                  <Button
                    variant="outline"
                    className="rounded-full"
                    onClick={() => {
                      router.back();
                    }}
                  >
                    Cancel
                  </Button>
                </div>
                <div>
                  <DeleteModal />
                </div>
              </div>
            </div>
          </div>
          <aside className="w-4/12 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">Patients Recently</h2>
              <Button
                variant="outline"
                size="icon"
                className="primary-bg flex items-center justify-center  rounded-full hover:bg-[#7743db]/90"
              >
                <Plus size={28} color="#fff" strokeWidth={1.25} />
              </Button>
            </div>
            <div className="space-y-5">
              {/* mapping data */}
              <div>
                <Link href="#">
                  <div className="flex items-center  gap-4 rounded-md">
                    {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                    <Avatar>
                      <AvatarImage src="https://mighty.tools/mockmind-api/content/cartoon/7.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* </div> */}
                    <div className="space-y-1">
                      <h4 className="font-semibold">
                        123 Main Street, Anytown, USA
                      </h4>
                      <p className="flex items-center gap-[1px]">
                        <span className="font-extralight text-neutral-500">
                          Nov 14, 9:00
                        </span>
                        <span>
                          <Dot size={24} color="#7e7c7c" strokeWidth={1} />
                        </span>
                        <span className="font-extralight text-neutral-500">
                          $6000
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="flex items-center gap-4 rounded-md">
                    {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                    <Avatar>
                      <AvatarImage src="https://mighty.tools/mockmind-api/content/human/43.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* </div> */}
                    <div className="space-y-1">
                      <h4 className="font-semibold">
                        456 Elm Avenue, Somewhereville, Canada
                      </h4>
                      <p className="flex items-center gap-[1px]">
                        <span className="font-extralight text-neutral-500">
                          Nov 14, 9:00
                        </span>
                        <span>
                          <Dot size={24} color="#7e7c7c" strokeWidth={1} />
                        </span>
                        <span className="font-extralight text-neutral-500">
                          $6000
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div>
                <Link href="#">
                  <div className="flex  items-center gap-4 rounded-md">
                    {/* <div className="w-2 h-2 rounded-full flex items-center "> */}
                    <Avatar>
                      <AvatarImage src="https://mighty.tools/mockmind-api/content/human/65.jpg" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* </div> */}
                    <div className="space-y-1">
                      <h4 className="font-semibold">
                        789 Oak Lane, Nowhere City, Australia
                      </h4>
                      <p className="flex items-center gap-[1px]">
                        <span className="font-extralight text-neutral-500">
                          Nov 14, 9:00
                        </span>
                        <span>
                          <Dot size={24} color="#7e7c7c" strokeWidth={1} />
                        </span>
                        <span className="font-extralight text-neutral-500">
                          $6000
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Button variant="link" className="font-extralight text-sky-500">
                Show more
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default PatientDetail;
