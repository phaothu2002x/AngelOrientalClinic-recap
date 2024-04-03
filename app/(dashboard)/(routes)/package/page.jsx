"use client";

import Navbar from "@/components/navbar";
import { Input, Col, Row, Checkbox, Card, Divider } from "antd";
import { Button } from "@/components/ui/button";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useState } from "react";

// fake data services
const CheckboxGroup = Checkbox.Group;
const checkOptions = ["Eyes", "Blood", "Heart", "Mental", "bla bla", "Shogun"];
const defaultCheckedList = [];

//fake data list

const ListGoiKham = [
  {
    title: "Free",
    description: "only choose 1 ",
  },
  {
    title: "Basic",
    description: "for fundemental tasks",
  },
  {
    title: "Advance",
    description: "high-end services",
  },
  {
    title: "Pro",
    description: "Full options",
  },
  {
    title: "Pro max",
    description: "Full options & flexibility",
  },
];

const PackagePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const checkAll = checkOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < checkOptions.length;

  const onOptionsChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? checkOptions : []);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // edit & delete func
  const handleEditClick = () => {
    alert("edit here");
  };
  const handleDeleteClick = () => {
    alert("delete here");
  };

  // add btn func
  const handleAddPackage = () => {
    const data = { packageName: inputValue, checkedList };
    console.log("check", data);
  };

  return (
    <div>
      <Navbar title="Examination Package page" />
      <div className="px-[5%] py-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-blue-500">
            Add new examination package
          </h3>
          <div className="w-6/12">
            <label htmlFor="name" className="italic">
              Package name:
            </label>
            <Input
              placeholder="Package name"
              id="name"
              size="large"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name" className="italic">
              Examination services:
            </label>
            {/* grid */}
            <div className="w-6/12">
              <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                <span className="text-lg">Check all</span>
              </Checkbox>
              <Divider />
              <CheckboxGroup onChange={onOptionsChange} value={checkedList}>
                <Row
                  gutter={[
                    {
                      xs: 8,
                      sm: 16,
                      md: 24,
                      lg: 32,
                    },
                    {
                      xs: 8,
                      sm: 16,
                      md: 24,
                      lg: 32,
                    },
                  ]}
                >
                  {checkOptions?.length >= 0 &&
                    checkOptions.map((item, index) => (
                      <Col span={6} key={`item-${index}`}>
                        <Checkbox value={item} className="text-lg">
                          {item}
                        </Checkbox>
                      </Col>
                    ))}
                </Row>
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <Button
              className="bg-sky-500 hover:bg-sky-500/80"
              onClick={handleAddPackage}
            >
              Add new
            </Button>
          </div>
        </div>
        {/* list goi kham */}
        <Divider />
        <h3 className="font-semibold text-blue-400">Available Packages:</h3>
        <div className="mt-6">
          <Row
            gutter={[
              {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              },
              {
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              },
            ]}
          >
            {ListGoiKham?.length >= 0 &&
              ListGoiKham.map((item, index) => (
                <Col span={4} key={`$item-${index}`}>
                  <Card
                    className="w-full hover:shadow-md"
                    actions={[
                      <EditOutlined key="edit" onClick={handleEditClick} />,
                      <DeleteOutlined
                        key="delete"
                        onClick={handleDeleteClick}
                      />,
                    ]}
                  >
                    <Card.Meta
                      title={item.title}
                      description={item.description}
                    />
                  </Card>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default PackagePage;
