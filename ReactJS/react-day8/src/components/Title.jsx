export default function Title({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center py-5">
      {/* dark:text-white */}
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors">
        {title}
      </h2>
      {/* dark:text-gray-400 */}
      <p className="text-gray-600 dark:text-gray-400 transition-colors">
        {subtitle}
      </p>
    </div>
  );
}
