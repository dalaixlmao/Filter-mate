import { Attributes, Planet } from "../types";

export default function filterPlanet(planetText:string, p:Planet[], colorFilter:Attributes[], shapeFilter:Attributes[], sizeFilter:Attributes[]):Planet[] {
    const filter1 =
      planetText != ""? p.filter(elem => elem.name.includes(planetText)) : p;
    const filter2 =
      colorFilter.length != 0 ? filter1.filter(elem => colorFilter.some(e => e.id===elem.color)) : filter1;
    const filter3 =
      shapeFilter.length != 0 ? filter2.filter(elem => shapeFilter.some(e => e.id===elem.shape)) : filter2;
    const filter4 =
      sizeFilter.length != 0 ? filter3.filter((elem) => sizeFilter.some((e) => e.id === elem.size)) : filter3;
    return filter4;
  }