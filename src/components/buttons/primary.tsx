import Link from "next/link";

interface IButton {
  label: string;
  url: string
}

export default function PrimaryButton({ label, url }: IButton) {
  return (
    <Link href={url} className="bg-accent text-white px-4 py-2 hover:scale-105 md:transition md:duration-150">
      {label}
    </Link>
  );
}
