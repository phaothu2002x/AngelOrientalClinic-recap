import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DeleteModal = () => {
  const handleDeletePatient = () => {
    alert(" call api delete");
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        {/* <Button
          variant="destructive"
          className="flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-100/80"
        >
          Delete This account
          <Trash2 size={28} color="#000000" strokeWidth={1.25} />
        </Button> */}

        <Button variant="destructive">
          <span className="mr-2">Delete Account</span>
          <Trash2 size={28} color="#fff" strokeWidth={1.25} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-500 hover:bg-red-500/80"
            onClick={() => handleDeletePatient()}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteModal;
