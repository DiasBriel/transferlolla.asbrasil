export default function PrimaryButton({ label }: { label: string }) {
  return (
    <button className="bg-accent-blue text-white px-4 py-2 rounded-md hover:scale-105 md:transition md:duration-150">
      {label}
    </button>
  );
}
