export default function Cover() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 binder-back rounded-r-md"
        style={{ transform: 'translate(6px, 6px)' }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 binder-cover rounded-r-md"
      />
    </>
  );
}
