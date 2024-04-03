import { CirclePlus } from "lucide-react";
import { Button } from "./ui/button";

const addNewBtn = () => {
  return (
    <div>
      <Button variant="addNew">
        Add new patient
        <span className="ml-2">
          <CirclePlus />
        </span>
      </Button>
    </div>
  );
};

export default addNewBtn;
