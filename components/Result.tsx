import Planet from "./Planet";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import axios from "axios";
import { setPlanets } from "@/store/slice";
import { Planet as PlanetType } from "../lib/types";
import filterPlanet from "@/lib/action/filterPlanets";
export default function Result() {
  const dispatch = useDispatch();
  const p = useSelector((state: RootState) => state.counter.planets);
  const colorFilter = useSelector((state: RootState) => state.counter.colorFilter);
  const sizeFilter = useSelector((state: RootState) => state.counter.sizeFilter);
  const shapeFilter = useSelector((state: RootState) => state.counter.shapeFilter);
  const planetText = useSelector((state: RootState) => state.counter.planetText);
  useEffect(() => {
    async function f() {
      const planets = await axios.get("https://api-planets.vercel.app/planets");
      dispatch(setPlanets(planets.data));
    }
    f();
  }, []);
  const planets = filterPlanet(planetText,p, colorFilter, shapeFilter, sizeFilter);
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
