import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useEffect, useRef, useState } from "react";

const UpdatePatientModal = () => {
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
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="addNew">
            <p>Update Patientt</p>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>update a new patient</DialogTitle>
            <div className="flex-1">
              <div className="mt-6 space-y-6">
                <div className="w-2/12 space-y-2">
                  <label htmlFor="picture" className="font-semibold">
                    Picture
                  </label>
                  <Input
                    id="picture"
                    type="file"
                    ref={inputRef}
                    className="hidden"
                    onChange={handlePreviewAvatar}
                  />
                  <div className="flex gap-4">
                    <Button variant="outline" onClick={handleUpdateAvatar}>
                      Change
                    </Button>
                    <Avatar>
                      <AvatarImage
                        src={avatar && avatar.preview ? avatar.preview : avatar}
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>

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
                  <div className="flex gap-4">
                    <div className="w-5/12">
                      <Input
                        className="bg-sky-100 p-6"
                        type="text"
                        id="city"
                        placeholder="City"
                      />
                    </div>
                    <div className="w-5/12">
                      <Input
                        className="bg-sky-100 p-6"
                        type="text"
                        id="province"
                        placeholder="State / province"
                      />
                    </div>
                    <div className="w-2/12">
                      <Input
                        className="bg-sky-100 p-6"
                        type="text"
                        id="zipCode"
                        placeholder="Zip code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>
          <DialogFooter className="mt-3 flex items-center gap-3">
            <DialogClose asChild>
              <Button variant="secondary">Close</Button>
            </DialogClose>
            <Button variant="addNew">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default UpdatePatientModal;
