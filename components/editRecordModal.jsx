import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilePenLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

const fakeInputs = [
  {
    label: "Patient",
    type: "text",
  },

  {
    label: "Diagnose",
    type: "text",
  },
  {
    label: "Therapy",
    type: "text",
  },

  {
    label: "Price",
    type: "text",
  },
  {
    label: "Doctor",
    type: "text",
  },
  {
    label: "Result",
    type: "textarea",
  },
];

const EditRecordModal = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex items-center justify-center">
            <FilePenLine />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update record patient</DialogTitle>
            <div className="flex-1">
              <div className="mt-6 space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                  {fakeInputs.map((item, index) => (
                    <div
                      className={cn(
                        "space-y-3",
                        item.type === "textarea" ? " md:col-span-2" : "",
                      )}
                      key={`item-${index}`}
                    >
                      <label
                        htmlFor={item.label}
                        className="mb-3 font-semibold"
                      >
                        {item.label}
                      </label>
                      {item.type === "textarea" ? (
                        <Textarea
                          placeholder="Type patient result here."
                          id={item.label}
                          className="resize-none bg-sky-100 p-6"
                        />
                      ) : (
                        <Input
                          type={item.type}
                          id={item.label}
                          className="bg-sky-100 p-6"
                        />
                      )}
                    </div>
                  ))}
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

export default EditRecordModal;
