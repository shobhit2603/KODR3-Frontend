export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  );
}
