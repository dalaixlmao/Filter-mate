import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import downloadJSON from "@/lib/action/downloadJSON";
import { useState } from "react";

export default function Export() {
  const planetText = useSelector((state: RootState) => state.counter.planetText);
  const colorFilter = useSelector((state: RootState) => state.counter.colorFilter);
  const sizeFilter = useSelector((state: RootState) => state.counter.sizeFilter);
  const shapeFilter = useSelector((state: RootState) => state.counter.shapeFilter);
  const data = {
    planetText,
    colorFilter,
    sizeFilter,
    shapeFilter,
  };
  return (
    <div className="ml-1">
      <button
        onClick={() => {
          downloadJSON(data, "almabase-assignment-data");
        }}
        className="bg-white text-black hover:bg-white/50 py-1 px-3 rounded-md text-sm font-semibold mt-2"
      >
        Export
      </button>
    </div>
  );
}
