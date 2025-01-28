export default function PrimaryButton({ label }: { label: string }) {
  return (
    <button className="bg-accent text-white px-4 py-2 hover:scale-105 md:transition md:duration-150">
      {label}
    </button>
  );
}
