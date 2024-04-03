"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { CirclePlus } from "lucide-react";

import { useFormik } from "formik";
import * as Yub from "yup";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
const AddnewModal = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      idCard: "",
      sex: "",
      nationality: "",
      dob: "",
      address: "",
    },

    validationSchema: Yub.object({
      name: Yub.string()
        .required("field required")
        .min(6, "must be >=6 character"),
      email: Yub.string()
        .required("field required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid Email",
        ),
      phone: Yub.string()
        .required("field required")
        .matches(
          /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
          "Must be valid Phone",
        ),
      idCard: Yub.string().required("field required"),
      sex: Yub.string().required("field required"),
      nationality: Yub.string().required("field required"),
      dob: Yub.string().required("field required"),
      address: Yub.string().required("field required"),
    }),

    onSubmit: (values) => {
      //call api create
      console.log("value", values);
      formik.resetForm();
    },
  });

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="addNew">
            <p>Add new patient</p>
            <span className="ml-2">
              <CirclePlus />
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Add a new patient</DialogTitle>
            <div className="flex-1">
              <div className="mt-6 space-y-4">
                <div className="flex justify-between gap-4">
                  <div className="w-6/12 md:w-full">
                    <label htmlFor="name" className="mb-3 font-semibold">
                      Client name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      placeholder="Babarra"
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.name ? "border-red-500" : "",
                      )}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500  ",
                        formik.errors.name ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between gap-4">
                  <div className="w-6/12">
                    <label htmlFor="email" className="mb-3 font-semibold">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Babarra@gmail.com"
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.email ? "border-red-500" : "",
                      )}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.email ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.email}
                    </span>
                  </div>
                  <div className="w-6/12">
                    <label htmlFor="phone" className="mb-3 font-semibold">
                      Phone
                    </label>
                    <Input
                      type="text"
                      id="phone"
                      placeholder="0931446782"
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.phone ? "border-red-500" : "",
                      )}
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.phone ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.phone}
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-3/12">
                    <label htmlFor="idCard" className="mb-3 font-semibold">
                      Id Card Number
                    </label>
                    <Input
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.idCard ? "border-red-500" : "",
                      )}
                      type="text"
                      id="idCard"
                      placeholder="0792020266332"
                      value={formik.values.idCard}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.idCard ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.idCard}
                    </span>
                  </div>
                  <div className="w-3/12">
                    <label htmlFor="dob" className="mb-3 font-semibold">
                      DoB
                    </label>
                    <Input
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.dob ? "border-red-500" : "",
                      )}
                      type="date"
                      id="dob"
                      value={formik.values.dob}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.dob ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.dob}
                    </span>
                  </div>
                  <div className="w-2/12">
                    <label htmlFor="sex" className="mb-3 font-semibold">
                      Sex
                    </label>
                    <Input
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.sex ? "border-red-500" : "",
                      )}
                      type="text"
                      id="sex"
                      placeholder="Male"
                      value={formik.values.sex}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.sex ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.sex}
                    </span>
                  </div>
                  <div className="w-2/12">
                    <label htmlFor="nationality" className="mb-3 font-semibold">
                      Nationality
                    </label>
                    <Input
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.nationality ? "border-red-500" : "",
                      )}
                      type="text"
                      id="nationality"
                      placeholder="VietNam"
                      value={formik.values.nationality}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.nationality ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.nationality}
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="w-full space-y-4">
                    <label htmlFor="address" className=" font-semibold">
                      Address
                    </label>
                    <Input
                      type="text"
                      id="address"
                      placeholder="123 Main street"
                      className={cn(
                        " bg-sky-100 p-6 ",
                        formik.errors.address ? "border-red-500" : "",
                      )}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                    />
                    <span
                      className={cn(
                        " mt-2 block font-extralight italic text-red-500 ",
                        formik.errors.address ? "opacity-100" : "opacity-0",
                      )}
                    >
                      *{formik.errors.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="mt-3 flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
            <Button variant="addNew" onClick={formik.handleSubmit}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddnewModal;
