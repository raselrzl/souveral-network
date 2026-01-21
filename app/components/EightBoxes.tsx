export default function DotFillBox() {
  return (
    <div className="max-w-70 h-25">
      <div className="grid grid-cols-40 gap-0.5">
        {Array.from({ length: 196 }).map((_, i) => (
          <span
            key={i}
            className="dot"
            style={{
              animationDelay: `${(i % 14) * 0.06 + Math.floor(i / 14) * 0.04}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
