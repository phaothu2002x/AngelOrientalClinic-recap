"use client";

import { Headset, Printer, Speech, Video } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import AppointmentCreateModal from "@/components/appointmentCreateModal";
import AppointmentEditModal from "@/components/appointmentEditModal";

import { Pagination } from "antd";
//fake data
const fakeTableData = [
  {
    package: "Free",
    name: "John Doe",
    date: "2024-03-27",
    time: "10:00 AM",
    diagnose: "Common cold",
    sex: "Male",
    age: 35,
    DOB: "1989-05-15",
    ID_number: "ABC12345",
    icon: Headset,
  },
  {
    package: "Pro max",
    name: "Jane Smith",
    date: "2024-03-28",
    time: "02:30 PM",
    diagnose: "Allergic rhinitis",
    sex: "Female",
    age: 45,
    DOB: "1979-12-10",
    ID_number: "DEF67890",
    icon: Speech,
  },
  {
    package: "Advance",
    name: "Michael Johnson",
    date: "2024-03-29",
    time: "11:15 AM",
    diagnose: "Sprained ankle",
    sex: "Male",
    age: 28,
    DOB: "1996-08-20",
    ID_number: "GHI24680",
    icon: Video,
  },
  {
    package: "Basic",
    name: "Emily Brown",
    date: "2024-03-30",
    time: "09:45 AM",
    diagnose: "Migraine",
    sex: "Female",
    age: 52,
    DOB: "1972-03-05",
    ID_number: "JKL13579",
    icon: Speech,
  },
  {
    package: "Basic",
    name: "David Wilson",
    date: "2024-03-31",
    time: "03:00 PM",
    diagnose: "Hypertension",
    sex: "Male",
    age: 60,
    DOB: "1964-11-25",
    ID_number: "MNO24680",
    icon: Headset,
  },
];

const typeSelectOptions = [
  {
    value: "online",
    label: "Online",
  },
  {
    value: "offline",
    label: "Offline",
  },
];

const packageOptions = [
  {
    value: "basic",
    label: "Basic",
  },
  {
    value: "advance",
    label: "Advance",
  },
  {
    value: "pro",
    label: "Pro",
  },
  {
    value: "proMax",
    label: "Pro Max",
  },
];

const AppointmentPage = () => {
  // const handleEditClick = (e) => {
  //   alert("edit");
  //   e.stopPropagation();
  // };
  const handleCancelClick = (e) => {
    alert("cancel");
    e.stopPropagation();
  };

  const handlePrintCLick = (e) => {
    alert("print");
    e.stopPropagation();
  };

  return (
    <div className="flex h-full w-full flex-col ">
      <Navbar title="Appointment page" />

      <section className="h-[90%] w-full space-y-4 bg-slate-400 p-12">
        <div className="flex items-center justify-between">
          <p className="font-medium italic text-slate-100">
            Upcoming Appointment
          </p>
          <div className="flex items-center gap-4">
            <Printer />
            <AppointmentCreateModal
              packageOptions={packageOptions}
              typeSelectOptions={typeSelectOptions}
            />
          </div>
        </div>

        <div className=" h-[90%] w-full overflow-y-auto rounded-lg bg-[#f9f5f6]">
          <header className="sticky top-0 flex bg-sky-300 p-4">
            <div className="w-[20%] ">Patients</div>
            <div className="w-[20%]">Reason</div>
            <div className="w-[20%]">Appointment</div>
            <div className="w-[20%]">Examination package</div>
            <div className="w-[20%] text-center">Actions</div>
          </header>

          <div className="space-y-3">
            <Accordion type="single" collapsible className="space-y-4">
              {fakeTableData.map((item, index) => (
                <AccordionItem
                  key={`item-${index}`}
                  value={`item-${index + 1}`}
                  className=" p-4 shadow-lg shadow-blue-500/50"
                >
                  <AccordionTrigger className="flex justify-start gap-4 border-b-2 border-dashed border-blue-400 ">
                    <div className="w-[20%]  text-start">{item.name}</div>
                    <div className="w-[20%]  text-start">{item.diagnose}</div>
                    <div className=" flex w-[20%] items-center space-x-2 text-start">
                      <div>
                        <item.icon color="#2addea" />
                        {/* <Video color="#2addea" /> */}
                      </div>
                      <div className="flex flex-col ">
                        <span>{item.date}</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <div className="w-[20%]  text-start">{item.package}</div>
                    <div className="flex w-[19%] items-center justify-center gap-4 text-start">
                      <div>
                        <Button
                          variant="outline"
                          className="rounded-full"
                          onClick={(e) => handleCancelClick(e)}
                        >
                          Cancel
                        </Button>
                      </div>
                      <div>
                        <AppointmentEditModal />
                      </div>
                      <div className=" p-2">
                        <Printer onClick={handlePrintCLick} />
                      </div>
                    </div>
                    {/* arrow icon => last element take 19% */}
                  </AccordionTrigger>
                  <AccordionContent className="mt-3 bg-[linear-gradient(to_top,#f3e7e9_0%,#e3eeff_99%,#e3eeff_100%)]">
                    <div className="">
                      <div>Sex...</div>
                      <div>Age:...</div>
                      <div>DOB:...</div>
                      <div>ID number:...</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <Pagination
              defaultCurrent={1}
              total={fakeTableData?.length}
              pageSize={2}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
