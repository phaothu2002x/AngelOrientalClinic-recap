"use client";

import { cn } from "@/lib/utils";
import {
  CalendarClock,
  ClipboardPlus,
  LayoutDashboard,
  Settings,
  UserRound,
  CreditCard,
  Package,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    title: "dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Appointment",
    icon: CalendarClock,
    path: "/appointment",
  },
  {
    title: "Patients",
    icon: UserRound,
    path: "/patients",
  },
  {
    title: "medical records",
    icon: ClipboardPlus,
    path: "/medicalRecords",
  },
  {
    title: "payment",
    icon: CreditCard,
    path: "/payment",
  },
  {
    title: "examination package",
    icon: Package,
    path: "/package",
  },
  {
    title: "settings",
    icon: Settings,
    path: "/settings",
  },
];

const SideBar = () => {
  const urlPath = usePathname();

  const isActive = (path) => {
    return urlPath.startsWith(path) || urlPath.startsWith(`${path}/`);
  };

  // console.log("check", urlPath.startsWith("/patients"));
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {routes.map((item, index) => (
        <Link
          href={item.path}
          key={item.path}
          className={cn(
            "group flex h-14 w-14 items-center justify-center rounded-full border-2 transition hover:border-gray-200 hover:bg-[#7743DB]/90",
            isActive(item.path) ? "bg-[#7743DB]/90" : "",
          )}
        >
          <item.icon
            className={cn("h-4 w-4 text-white group-hover:text-white  ")}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
