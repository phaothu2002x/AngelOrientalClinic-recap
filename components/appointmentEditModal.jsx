"use client";

// import { Button } from "@/components/ui/button";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Modal, Input, DatePicker, TimePicker, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Button } from "./ui/button";

const AppointmentEditModal = (props) => {
  const { packageOptions, typeSelectOptions } = props;

  const [modalOpen, setModalOpen] = useState(false);

  const handleEditClick = (e) => {
    setModalOpen(true);
  };
  const handleSave = (e) => {
    setModalOpen(false);
  };
  const handleCancel = (e) => {
    setModalOpen(false);
  };

  //date pick
  const onDatePickerChange = (date, dateString) => {
    console.log(dateString);
  };
  // type examination
  const handleTypeSelectChange = (value) => {
    console.log(`selected ${value}`);
  };
  //packages examination
  const onPackageChange = (value) => {
    console.log(`selected ${value}`);
  };
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div onClick={(e) => e.stopPropagation()}>
      {/* <Button
        type="primary"
        size="large"
        className="flex items-center border-transparent bg-sky-500  font-semibold outline-none hover:bg-sky-500/80"
        onClick={() => setModalOpen(true)}
      >
        Edit

      </Button> */}
      <Button
        variant="outline"
        className="rounded-full border-sky-400 text-sky-400"
        onClick={(e) => handleEditClick(e)}
      >
        Edit
      </Button>
      <Modal
        title="Edit Appointment"
        centered
        open={modalOpen}
        onOk={handleSave}
        onCancel={handleCancel}
        width={1000}
        okText={"Save Change"}
      >
        <div className="grid grid-cols-3 gap-8">
          <div>
            <label htmlFor="name" className="text-lg italic">
              Client name:
            </label>
            <Input size="large" id="name" placeholder="Client name" />
          </div>
          <div>
            <label htmlFor="idNumber" className="text-lg italic">
              Id Number:
            </label>
            <Input size="large" id="idNumbers" placeholder="Id number" />
          </div>
          <div>
            <label htmlFor="phone" className="text-lg italic">
              Phone
            </label>
            <Input size="large" id="phone" placeholder="Phone" />
          </div>
          <div>
            <label htmlFor="address" className="text-lg italic">
              Address
            </label>
            <Input size="large" id="address" placeholder="address" />
          </div>
          <div>
            <label htmlFor="reason" className="text-lg italic">
              Reason Booking:
            </label>
            <TextArea
              size="large"
              placeholder="Controlled autosize"
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </div>
          <div className="space-y-3">
            <div>
              <label
                htmlFor="date"
                className="inline-block min-w-[120px] text-lg italic"
              >
                Booking Date:
              </label>
              <div className=" ml-2 inline-block">
                <DatePicker onChange={onDatePickerChange} />
              </div>
            </div>
            <div>
              <label
                htmlFor="time"
                className="inline-block min-w-[120px] text-lg italic"
              >
                Time Picker
              </label>
              <div className=" ml-2 inline-block">
                <TimePicker size="large" format="HH:mm" />
              </div>
            </div>
            <div>
              <label
                htmlFor="type"
                className="inline-block min-w-[120px]  text-lg italic"
              >
                Type
              </label>
              <div className=" ml-2 inline-block">
                <Select
                  defaultValue="offline"
                  style={{ width: 120 }}
                  onChange={handleTypeSelectChange}
                  options={typeSelectOptions}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="package"
                className=" inline-block min-w-[120px] text-lg italic"
              >
                Package
              </label>
              <div className=" ml-2 inline-block">
                <Select
                  showSearch
                  style={{ width: 120 }}
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onPackageChange}
                  filterOption={filterOption}
                  options={packageOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AppointmentEditModal;
