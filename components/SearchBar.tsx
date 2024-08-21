import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useState } from "react";
import { setPlanetText } from "@/store/slice";
import { setLoader } from "@/store/slice";

export default function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const p = useSelector((state: RootState) => state.counter.planetText);
  const colorFilter = useSelector(
    (state: RootState) => state.counter.colorFilter
  );
  const sizeFilter = useSelector(
    (state: RootState) => state.counter.sizeFilter
  );
  const shapeFilter = useSelector(
    (state: RootState) => state.counter.shapeFilter
  );
  const planetText = useSelector(
    (state: RootState) => state.counter.planetText
  );

  return (
    <div className="mt-8 w-full px-6 md:px-24 flex flex-row justify-center">
      <input onKeyDown={(e) => {
        if (e.key === "Enter") {
          dispatch(setPlanetText(text));
        }
      }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className="w-full bg-white/10 px-3 py-1 rounded-md focus:border-white/60 border-white/10 border"
        type={"text"}
        placeholder="Enter the planet . . ."
      />
      <button
        onClick={() => {
          dispatch(setPlanetText(text));
        }}
        className="bg-white text-black px-3 py-1 rounded-md ml-2 hover:bg-white/30"
      >
        Search
      </button>
    </div>
  );
}
