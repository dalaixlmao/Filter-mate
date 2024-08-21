import Planet from "./Planet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import axios from "axios";
import { setColorFilter, setPlanets } from "@/store/slice";
import { Planet as PlanetType } from "@/store/slice";
export default function Result() {
  const dispatch = useDispatch();
  const p = useSelector((state: RootState) => state.counter.planets);
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

  useEffect(() => {
    async function f() {
      const planets = await axios.get("https://api-planets.vercel.app/planets");
      console.log(planets.data);
      dispatch(setPlanets(planets.data));
    }
    f();
  }, []);

  function filterPlanet() {
    const filter1 =
      planetText != ""
        ? p.filter((elem) => {
            return elem.name.includes(planetText);
          })
        : p;
    const filter2 =
      setColorFilter.length != 0
        ? filter1.filter((elem) => {
            return colorFilter.some((e) => {
              return e.id === elem.color;
            });
          })
        : filter1;
    const filter3 =
      shapeFilter.length != 0
        ? filter2.filter((elem) => {
            return shapeFilter.some((e) => {
              return e.id === elem.shape;
            });
          })
        : filter2;
    const filter4 =
      sizeFilter.length != 0
        ? filter3.filter((elem) => {
            return sizeFilter.some((e) => {
              return e.id === elem.size;
            });
          })
        : filter3;
    return filter4;
  }
  const planets = filterPlanet();
  return (
    <div className="w-full">
      <div className="flex flex-wrap">
        {planets.map((planet: PlanetType) => {
          return (
            <Planet
              key={planet.id}
              planet={planet.name}
              color={planet.color}
              size={planet.size}
              shape={planet.shape}
            />
          );
        })}
      </div>
    </div>
  );
}
