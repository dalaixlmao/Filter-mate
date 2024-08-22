import { useDispatch} from "react-redux";
import { useState } from "react";
import { setPlanetText } from "@/store/slice";

export default function SearchBar() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="mt-8 w-full px-6 md:px-24 flex flex-row justify-center">
      <input onKeyDown={(e) => { if (e.key === "Enter") {dispatch(setPlanetText(text));}}}
        onChange={(e) => { setText(e.target.value); }}
        className="w-full bg-white/10 px-3 py-1 rounded-md focus:border-white/60 border-white/10 border"
        type={"text"}
        placeholder="Enter the planet..."
      />
      <button onClick={() => { dispatch(setPlanetText(text)); }}
        className="bg-white text-black px-3 py-1 rounded-md ml-2 hover:bg-white/30 transition-all"
        >
        Search
      </button>
    </div>
  );
}
