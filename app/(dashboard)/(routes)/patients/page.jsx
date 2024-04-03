"use client";

import { Filter, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import PatientTable from "@/components/patientTable";

import AddnewModal from "../../../../components/addNewModal";
import Navbar from "@/components/navbar";

const PatientsPage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar title="Patients List" />

      <section className="h-full border-2 hover:border-sky-400">
        <header className="container flex w-full items-center justify-between px-8 py-8  ">
          <div className="flex items-center gap-4  font-semibold">
            <p>total: 10 patients</p>
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 bg-stone-50">
              <Search />
            </div>
          </div>
          <div className="filter-section flex space-x-10">
            <Select>
              <SelectTrigger className="w-[160px] rounded-full">
                <SelectValue placeholder="Sort By:" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Date Created</SelectItem>
                <SelectItem value="dark">Name</SelectItem>
                <SelectItem value="system">Email</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="rounded-full">
              Filter
              <span className="ml-2">
                <Filter />
              </span>
            </Button>

            <AddnewModal />
          </div>
        </header>
        <div className="mx-auto max-h-[80%] min-h-[80%] w-[90%] rounded-2xl ">
          <PatientTable />
        </div>
      </section>
    </div>
  );
};

export default PatientsPage;
