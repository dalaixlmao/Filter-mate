import Filters from "./Filters";
import Result from "./Result";
export default function LowerHalf() {
  return (
    <div className="flex flex-row h-full pt-8">
      <div className="flex flex-col w-2/5 items-center h-full border-r-2 border-white/10">
        <Filters />
      </div>
      <div className="flex flex-col w-3/5 items-center h-full overflow-y-auto">
        <Result />
      </div>
    </div>
  );
}
