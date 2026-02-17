export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white transition-colors">
        {title}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 transition-colors">
        {subtitle}
      </p>
    </div>
  );
}
