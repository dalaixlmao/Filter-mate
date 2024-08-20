import FilterType from "./FilterType";

export default function Filters() {
  return (
    <div className="flex flex-col h-4/5">
      <FilterType name={"Color"} />
      <FilterType name={"Shape"} />
      <FilterType name={"Size"} />
    </div>
  );
}
