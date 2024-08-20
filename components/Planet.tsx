export default function Planet({
  planet,
  shape,
  size,
  color,
}: {
  color: string;
  planet: string;
  shape: string;
  size: string;
}) {
  return <div className="w-full px-5 mb-2">
    <div className="text-lg font-semibold">{planet}</div>
    <div className="text-white/40 text-sm mt-1 font-light border-b border-white/20 pb-3">{planet} is a {shape} and {size} planet with {color} color.</div>
  </div>;
}