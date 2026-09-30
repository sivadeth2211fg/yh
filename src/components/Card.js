export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-navy/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
