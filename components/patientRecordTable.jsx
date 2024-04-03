"use client";

import { Table } from "antd";
import EditRecordModal from "./editRecordModal";
import DeleteRecordModal from "./deleteRecordModal";

const columns = [
  {
    title: "Patient",
    dataIndex: "patient",
    key: "patient",
  },
  {
    title: "Diagnose",
    dataIndex: "diagnose",
    key: "diagnose",
  },
  {
    title: "Therapy",
    dataIndex: "therapy",
    key: "therapy",
  },
  {
    title: "Result",
    dataIndex: "result",
    key: "result",
  },
  {
    title: "Doctor",
    dataIndex: "doctor",
    key: "doctor",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Actions",
    dataIndex: "",
    key: "actions",
    render: () => (
      <div className="flex items-center gap-3">
        <EditRecordModal />
        <DeleteRecordModal />
      </div>
    ),
  },
];

const fakeTableData = [
  {
    key: 1,
    patient: "John Smiths",
    diagnose: "Hypertension",
    therapy: "Medication",
    result: "Stable",
    doctor: "Dr. Johnson",
    price: "2000000",
  },
  {
    key: 2,
    patient: "Sarah Jones",
    diagnose: "Migraine",
    therapy: "Acupuncture",
    result: "Improved",
    doctor: "Dr. Lee",
    price: "1500000",
  },
  {
    key: 3,
    patient: "Michael Brown",
    diagnose: "Diabetes",
    therapy: "Diet Plan",
    result: "Controlled",
    doctor: "Dr. Martinez",
    price: "18000000",
  },
  {
    key: 4,
    patient: "Emily Davis",
    diagnose: "Anxiety",
    therapy: "therapy",
    result: "Recovered",
    doctor: "Dr. White",
    price: "220000",
  },
  {
    key: 5,
    patient: "David Miller",
    diagnose: "Allergy",
    therapy: "Medication",
    result: "Relieved",
    doctor: "Dr. Garcia",
    price: "1900000",
  },
  {
    key: 6,
    patient: "Lisa Wilson",
    diagnose: "Depression",
    therapy: "Counseling",
    result: "Improved",
    doctor: "Dr. Taylor",
    price: "2500000",
  },
  {
    key: 7,
    patient: "Lisa Wilson",
    diagnose: "Depression",
    therapy: "Counseling",
    result: "Improved",
    doctor: "Dr. Taylor",
    price: "2500000",
  },
  {
    key: 8,
    patient: "Lisa Wilson",
    diagnose: "Depression",
    therapy: "Counseling",
    result: "Improved",
    doctor: "Dr. Taylor",
    price: "2500000",
  },
];

const number = 4;
const PatientRecordTable = () => {
  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => <p>description of patient</p>,
        }}
        pagination={{
          position: ["bottomCenter"],
          pageSize: number,
        }}
        dataSource={fakeTableData}
      />
    </>
  );
};

export default PatientRecordTable;
