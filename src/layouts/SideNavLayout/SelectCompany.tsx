import { ChevronDownIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function SelectCompany({}: Props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-black rounded-sm h-6 w-6" />
      <div className="flex-1">Company</div>
      <ChevronDownIcon className="h-6 w-6 text-muted-foreground" />
    </div>
  );
}
