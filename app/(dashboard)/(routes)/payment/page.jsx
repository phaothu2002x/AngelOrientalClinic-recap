import Navbar from "@/components/navbar";
import PaymentTable from "@/components/paymentTable";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const PaymentPage = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar title="Payment page" />
      <section className="h-full w-full space-y-4 bg-slate-400 p-12">
        <div className="flex items-center gap-4">
          <Button variant="print">Print</Button>
        </div>

        <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full max-h-[95%] min-h-[95px] w-full overflow-y-auto rounded-lg bg-[#f9f5f6] scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-sky-300/70  ">
          <PaymentTable />
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
