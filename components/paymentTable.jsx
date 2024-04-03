"use client";

import { Table } from "antd";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const handleChange = () => {
  alert("me");
};

const columns = [
  {
    title: <div className="text-lg font-semibold">Client</div>,
    dataIndex: "name",
    key: "name",
  },
  {
    title: <div className="text-lg font-semibold">Date examination</div>,
    dataIndex: "date",
    key: "date",
  },
  {
    title: <div className="text-lg font-semibold">Service</div>,
    dataIndex: "service",
    key: "service",
  },
  {
    title: <div className="text-lg font-semibold">Total cost</div>,
    dataIndex: "cost",
    key: "cost",
  },
  {
    title: <div className="text-lg font-semibold">Status payment</div>,
    dataIndex: "status",
    key: "status",
    render: (text) => (
      <Button
        className={cn(
          "min-w-[100px] rounded-full ",
          text === "complete" ? "bg-sky-400" : "bg-slate-400 ",
        )}
        onClick={handleChange}
      >
        {text}
      </Button>
    ),
  },
];
//data
const data = [
  {
    key: "1",
    name: "John Smith",
    cost: 140000,
    status: "pending",
    service: "MRI Scan",
    date: "2024-03-27",
  },
  {
    key: "2",
    name: "Emma Johnson",
    cost: 200000,
    status: "complete",
    service: "Blood Test",
    date: "2024-03-28",
  },
  {
    key: "3",
    name: "Michael Brown",
    cost: 150000,
    status: "pending",
    service: "X-ray",
    date: "2024-03-29",
  },
  {
    key: "4",
    name: "Jennifer Davis",
    cost: 1200000,
    status: "complete",
    service: "Ultrasound",
    date: "2024-03-30",
  },
  {
    key: "5",
    name: "Christopher Wilson",
    cost: 180000,
    status: "pending",
    service: "ECG",
    date: "2024-03-31",
  },
  {
    key: "6",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
  {
    key: "7",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
  {
    key: "8",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
  {
    key: "9",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
  {
    key: "10",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
  {
    key: "11",
    name: "Amanda Martinez",
    cost: 2500000,
    status: "complete",
    service: "CT Scan",
    date: "2024-04-01",
  },
];

const PaymentTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomCenter"], pageSize: ["8"] }}
    />
  );
};

export default PaymentTable;
