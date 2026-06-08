// decorative desk dressing beside the binder — pure CSS, no images.
// Anchored to the binder's right edge so it sits in the strip of desk
// wood at every viewport width.
export default function DeskClutter() {
  return (
    <div aria-hidden className="desk-clutter">
      <span className="clutter-pen" />
      <span className="clutter-pencil" />
      <span className="clutter-ring" />
    </div>
  );
}
