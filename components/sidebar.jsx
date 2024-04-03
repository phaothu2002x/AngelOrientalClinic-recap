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
            "border-1 group flex h-14 w-full items-center justify-center rounded-lg border-r-2 border-transparent text-gray-100 transition hover:border-sky-400 hover:bg-sky-300/50",
            isActive(item.path) ? "  border-r-2 bg-sky-300/50  " : "",
          )}
        >
          <item.icon
            className={cn(
              "h-5 w-5  transition group-hover:h-6  group-hover:w-6 group-hover:text-white",
              isActive(item.path) ? "h-6 w-6" : "",
            )}
          />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
