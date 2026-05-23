export default function Rings() {
  return (
    <div
      aria-hidden
      className="binder-rings"
    >
      {[0, 1, 2].map((i) => (
        <span key={i} className="ring-metal" />
      ))}
    </div>
  );
}
