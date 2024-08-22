import axios from "axios";
import { useEffect, useState } from "react";
import { setLoader } from "@/store/slice";
import { useDispatch } from "react-redux";

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

  const [col, setCol] = useState("");
  const [shape1, setShape1] = useState("");
  const [size1, setSize1] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    async function f(){
      const res1 = await axios.get("https://api-planets.vercel.app/colors/?id="+color);
      setCol(res1.data[0].name[0].toLowerCase()+res1.data[0].name.slice(1));
      const res2 = await axios.get("https://api-planets.vercel.app/shapes/?id="+shape);
      setShape1(res2.data[0].name[0].toLowerCase()+res2.data[0].name.slice(1));
      const res3 = await axios.get("https://api-planets.vercel.app/sizes/?id="+size);
      setSize1(res3.data[0].name[0].toLowerCase()+res3.data[0].name.slice(1));
      dispatch(setLoader(false));
    }
f();
  },[planet, shape, size, color])

  const css = "text-"+col+"-500 text-lg font-semibold";

  return <div className="w-full pl-5 md:pr-24 pr-6 mb-2">
    <div className={css}>{planet}</div>
    <div className="text-white/40 text-sm mt-1 font-light border-b border-white/20 pb-3">{planet} is a {shape1} and {size1} planet with {col} color.</div>
  </div>;
}
