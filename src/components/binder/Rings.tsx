export default function Rings() {
  return (
    <div
      aria-hidden
      className="absolute left-[28px] top-0 bottom-0 flex flex-col items-center justify-around py-16 pointer-events-none z-20"
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className="ring-metal" />
      ))}
    </div>
  );
}
