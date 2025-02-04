import Link from "next/link";

interface IButton {
  label: string;
  url: string;
  className?: string;
}

export default function PrimaryButton({ label, url, className }: IButton) {
  return (
    <Link href={url} className={"bg-accent text-white flex justify-center items-center h-[56px] md:h-[50px] px-4 py-2 hover:scale-105 md:transition md:duration-150" + ` ${className}`}>
      {label}
    </Link>
  );
}
