type PlaceholderProps = {
  label?: string;
  className?: string;
};

export function Placeholder({ label = "content placeholder", className = "" }: PlaceholderProps) {
  return (
    <div className={`flex items-center justify-center rounded-2xl bg-gray-200 p-8 text-center text-sm text-gray-500 ${className}`}>
      {label}
    </div>
  );
}
