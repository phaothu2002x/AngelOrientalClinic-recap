import { FilePenLine, Search, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import DeleteRecordModal from "@/components/deleteRecordModal";
import { Button } from "@/components/ui/button";
import EditRecordModal from "@/components/editRecordModal";
import AddNewRecordModal from "@/components/addNewRecordModal";
import Navbar from "@/components/navbar";

const fakeTableData = [
  {
    Patients: "John Smith",
    Diagnose: "Hypertension",
    Therapy: "Medication",
    Result: "Stable",
    Doctor: "Dr. Johnson",
    Price: "2000000",
  },
  {
    Patients: "Sarah Jones",
    Diagnose: "Migraine",
    Therapy: "Acupuncture",
    Result: "Improved",
    Doctor: "Dr. Lee",
    Price: "1500000",
  },
  {
    Patients: "Michael Brown",
    Diagnose: "Diabetes",
    Therapy: "Diet Plan",
    Result: "Controlled",
    Doctor: "Dr. Martinez",
    Price: "18000000",
  },
  {
    Patients: "Emily Davis",
    Diagnose: "Anxiety",
    Therapy: "Therapy",
    Result: "Recovered",
    Doctor: "Dr. White",
    Price: "220000",
  },
  {
    Patients: "David Miller",
    Diagnose: "Allergy",
    Therapy: "Medication",
    Result: "Relieved",
    Doctor: "Dr. Garcia",
    Price: "1900000",
  },
  {
    Patients: "Lisa Wilson",
    Diagnose: "Depression",
    Therapy: "Counseling",
    Result: "Improved",
    Doctor: "Dr. Taylor",
    Price: "2500000",
  },
  {
    Patients: "Lisa Wilson",
    Diagnose: "Depression",
    Therapy: "Counseling",
    Result: "Improved",
    Doctor: "Dr. Taylor",
    Price: "2500000",
  },
  {
    Patients: "Lisa Wilson",
    Diagnose: "Depression",
    Therapy: "Counseling",
    Result: "Improved",
    Doctor: "Dr. Taylor",
    Price: "2500000",
  },
];

const MedicalRecords = () => {
  return (
    <div className="flex w-full flex-col">
      <Navbar title="Medical Record" />

      {/* content */}
      <section className=" w-full space-y-4 bg-slate-400 p-12">
        <div className="flex items-center gap-4">
          <Button variant="print">Print</Button>
          <AddNewRecordModal />
        </div>

        <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-[90%] w-full overflow-y-auto rounded-2xl bg-[#f9f5f6] scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-sky-300/70  ">
          <Table>
            <TableHeader className="sticky top-0">
              <TableRow className="  bg-sky-300 hover:bg-sky-300">
                <TableHead className="w-[16%]">Patients</TableHead>
                <TableHead className="w-[14%]">Diagnose</TableHead>
                <TableHead className="w-[14%]">Therapy</TableHead>
                <TableHead className="w-full]">Result</TableHead>
                <TableHead className="w-[12%]">Doctor</TableHead>
                <TableHead className="w-[14%]">Price</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="space-y-6">
              <TableRow className="cursor-pointer">
                <TableCell className="font-light">Nguyen Huu Da</TableCell>
                <TableCell className="font-light">Dau Vai Gay</TableCell>
                <TableCell className="font-light">
                  Dam nhau cho het dau
                </TableCell>
                <TableCell className="font-light">
                  Toi nam nay 70 tuoi ma chua bao gio khoe nhu lay gio khoe nhu
                  lay gio khoe nhu lay
                </TableCell>
                <TableCell className="font-light">Dr.Thanh</TableCell>
                <TableCell className="font-light">7000000 VND</TableCell>
                <TableCell>
                  <div className=" flex items-center gap-3">
                    <EditRecordModal />
                    <DeleteRecordModal />
                  </div>
                </TableCell>
              </TableRow>

              {fakeTableData.map((item, index) => (
                <TableRow className="cursor-pointer" key={`row-${index}`}>
                  <TableCell className="font-light">{item.Patients}</TableCell>
                  <TableCell className="font-light">{item.Diagnose}</TableCell>
                  <TableCell className="font-light">{item.Therapy}</TableCell>
                  <TableCell className="font-light">{item.Result}</TableCell>
                  <TableCell className="font-light">{item.Doctor}</TableCell>
                  <TableCell className="font-light">{item.Price} VND</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <EditRecordModal />
                      <DeleteRecordModal />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
};

export default MedicalRecords;
