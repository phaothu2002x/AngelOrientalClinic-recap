"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUserRound, Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";

import { Pagination } from "antd";

const PatientTable = () => {
  const router = useRouter();
  const handleEdit = (patientId) => {
    router.push(`/patients/${patientId}`);
  };

  const data = [
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
    "1",
    "2",
    "1",
    "2",
    "1",
    "2",
    "1",
  ];

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[12%]">Client</TableHead>
            <TableHead className="w-[7%]">Sex</TableHead>
            <TableHead className="w-[7%]">DoB</TableHead>
            <TableHead className="w-[7%]">Nationality</TableHead>
            <TableHead className="w-[12%]">ID card Number</TableHead>
            <TableHead className="">Address</TableHead>
            <TableHead className="w-[8%]">Phone</TableHead>
            <TableHead className="w-[20%]">Email</TableHead>
            <TableHead className="w-[50px]">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* mapping data */}
          <TableRow className="hover:bg-zinc-200/40">
            <TableCell className="text-wrap break-words">
              Truong Vu Thuan
            </TableCell>
            <TableCell className="text-wrap break-words">Nam</TableCell>
            <TableCell className="text-wrap">13/02/2002</TableCell>
            <TableCell className="text-wrap break-words">VietNam</TableCell>
            <TableCell className="text-wrap break-words">
              079202328871
            </TableCell>
            <TableCell className="text-wrap break-words">
              123 Nguyen Hue Dictrict 1 HCM city
            </TableCell>
            <TableCell className="text-wrap break-words">093144221</TableCell>
            <TableCell className="text-wrap break-all">
              Truongthuan21342@fgmail.com
            </TableCell>
            <TableCell>
              <div className="cursor-pointer" onClick={() => handleEdit(1)}>
                <Pencil />
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-zinc-200/40">
            <TableCell className="text-wrap break-words">
              Truong Vu Thuan
            </TableCell>
            <TableCell className="text-wrap break-words">Nam</TableCell>
            <TableCell className="text-wrap">13/02/2002</TableCell>
            <TableCell className="text-wrap break-words">VietNam</TableCell>
            <TableCell className="text-wrap break-words">
              079202328871
            </TableCell>
            <TableCell className="text-wrap break-words">
              123 Nguyen Hue Dictrict 1 HCM city
            </TableCell>
            <TableCell className="text-wrap break-words">093144221</TableCell>
            <TableCell className="text-wrap break-all">
              Truongthuan21342@fgmail.com
            </TableCell>
            <TableCell>
              <div className="cursor-pointer" onClick={() => handleEdit(1)}>
                <Pencil />
              </div>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-zinc-200/40">
            <TableCell className="text-wrap break-words">
              Truong Vu Thuan
            </TableCell>
            <TableCell className="text-wrap break-words">Nam</TableCell>
            <TableCell className="text-wrap">13/02/2002</TableCell>
            <TableCell className="text-wrap break-words">VietNam</TableCell>
            <TableCell className="text-wrap break-words">
              079202328871
            </TableCell>
            <TableCell className="text-wrap break-words">
              123 Nguyen Hue Dictrict 1 HCM city
            </TableCell>
            <TableCell className="text-wrap break-words">093144221</TableCell>
            <TableCell className="text-wrap break-all">
              Truongthuan21342@fgmail.com
            </TableCell>
            <TableCell>
              <div className="cursor-pointer" onClick={() => handleEdit(1)}>
                <Pencil />
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="mt-5 flex items-center justify-center ">
        <Pagination defaultCurrent={1} total={data.length} pageSize={7} />
      </div>
    </>
  );
};

export default PatientTable;
