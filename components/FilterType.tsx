import FilterCheck from "./FilterCheks";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setColors, setPlanets, setShapes, setSizes } from "@/store/slice";
import { useEffect } from "react";
import axios from "axios";

export default function FilterType({ name }: { name: string }) {
  const dispatch = useDispatch();
  const color = useSelector((state: RootState) => state.counter.colors);
  const shape = useSelector((state: RootState) => state.counter.shapes);
  const size = useSelector((state: RootState) => state.counter.sizes);

  useEffect(() => {
    async function f() {
      switch (name) {
        case "Color": {
          const colors = await axios.get(
            "https://api-planets.vercel.app/colors"
          );
          dispatch(setColors(colors.data));
        }
        case "Shape": {
          const shapes = await axios.get(
            "https://api-planets.vercel.app/shapes"
          );
          dispatch(setShapes(shapes.data));
        }
        case "Size": {
          const sizes = await axios.get(
            "https://api-planets.vercel.app/sizes"
          );
          dispatch(setSizes(sizes.data));
        }
      }
    }
    f();
  },[name]);

  switch (name){

    case "Color":{
        return (
            <div className="mb-12 ml-6 md:ml-24">
            <div className="mb-2">{name}</div>
            {color.map((elem) => (
                <FilterCheck key={elem.id} name={elem.name} id={elem.id} type={name} />
            ))}
            </div>
        );
    }
    case "Shape":{
        return (
            <div className="mb-12 ml-6 md:ml-24">
            <div className="mb-2">{name}</div>
            {shape.map((elem) => (
                <FilterCheck key={elem.id} name={elem.name} id={elem.id} type={name} />
            ))}
            </div>
        );
    }
    case "Size":{
        return (
            <div className="mb-12 ml-6 md:ml-24">
            <div className="mb-2">{name}</div>
            {size.map((elem) => (
                <FilterCheck key={elem.id} name={elem.name} id={elem.id} type={name} />
            ))}
            </div>
        );
    }
  }
}
