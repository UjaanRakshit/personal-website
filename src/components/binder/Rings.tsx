export default function Rings() {
  return (
    <div aria-hidden className="binder-rings">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="ring-clasp" />
      ))}
    </div>
  );
}
