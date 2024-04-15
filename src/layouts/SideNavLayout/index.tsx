import {
  BellIcon,
  ChartBarSquareIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import NavMenuItem from "./NavMenuItem";
import SelectCompany from "./SelectCompany";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ModeToggle } from "../../providers/ThemeProvider/ModeToggle";

type Props = { children: React.ReactNode };

function SideNavLayout({ children }: Props) {
  return (
    <div className="flex">
      <div className="w-64 h-screen overflow-x-auto px-4 pt-4 pb-4 flex flex-col dark:bg-slate-900">
        <div className="flex justify-end pb-8">
          <ModeToggle />
        </div>

        <SelectCompany />

        <div className="flex-1 pt-10 flex flex-col gap-2">
          <NavMenuItem
            icon={<Squares2X2Icon className="h-6 w-6 text-muted-foreground" />}
            isSelected={true}
            notificationsCount={4}
            title="Tasks"
          />

          <NavMenuItem
            icon={<BellIcon className="h-6 w-6 text-muted-foreground" />}
            isSelected={false}
            notificationsCount={7}
            title="Notifications"
          />

          <NavMenuItem
            icon={
              <ChartBarSquareIcon className="h-6 w-6 text-muted-foreground" />
            }
            isSelected={false}
            notificationsCount={0}
            title="Analytics"
          />

          <NavMenuItem
            icon={<UserIcon className="h-6 w-6 text-muted-foreground" />}
            isSelected={false}
            notificationsCount={2}
            title="Team"
          />
        </div>

        <NavMenuItem
          icon={<Cog6ToothIcon className="h-6 w-6 text-muted-foreground" />}
          isSelected={false}
          notificationsCount={0}
          title="Settings"
        />
      </div>

      <div className="flex-1 h-screen overflow-x-auto">{children}</div>
    </div>
  );
}

export default SideNavLayout;
