import React from "react";
import { cn } from "../../ui/utils/cn";

type Props = {
  icon: React.ReactNode;
  title: string;
  notificationsCount: number;
  isSelected: boolean;
};

export default function NavMenuItem({
  title,
  icon,
  notificationsCount,
  isSelected,
}: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-1  hover:bg-slate-50 dark:hover:bg-slate-700 px-2 py-2 rounded-md cursor-pointer",
        { "bg-slate-100 dark:bg-slate-800": isSelected }
      )}
    >
      {icon}

      <div className="flex-1">{title}</div>

      {notificationsCount > 0 ? (
        <div
          className={cn(
            "bg-slate-100 dark:bg-slate-800 rounded-sm  px-1 text-xs",
            {
              "bg-slate-600 text-white dark:bg-slate-600": isSelected,
            }
          )}
        >
          {notificationsCount}
        </div>
      ) : null}
    </div>
  );
}
