import { Attributes, Planet } from "@/store/slice";

export default function filterPlanet(planetText:string, p:Planet[], colorFilter:Attributes[], shapeFilter:Attributes[], sizeFilter:Attributes[]):Planet[] {
    const filter1 =
      planetText != ""
        ? p.filter((elem) => {
            return elem.name.includes(planetText);
          })
        : p;
    const filter2 =
      colorFilter.length != 0
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
        console.log("fitlerplanet.ts");
    return filter4;
  }