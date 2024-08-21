import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Planet {
  id: string;
  name: string;
  color: string;
  size: string;
  shape: string;
}

export interface Attributes {
  id: string;
  name: string;
}

const initialState = {
  planets: [] as Planet[],
  planetText: "",
  shapes: [] as Attributes[],
  colors: [] as Attributes[],
  sizes: [] as Attributes[],
  colorFilter: [] as Attributes[],
  sizeFilter: [] as Attributes[],
  shapeFilter: [] as Attributes[],
  planetsShow: [] as Planet[],
};

export const planetStates = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setShapes: (state, action: PayloadAction<Attributes[]>) => {
      state.shapes = action.payload;
    },
    setColors: (state, action: PayloadAction<Attributes[]>) => {
      state.colors = action.payload;
    },
    setSizes: (state, action: PayloadAction<Attributes[]>) => {
      state.sizes = action.payload;
    },
    setPlanets: (state, action: PayloadAction<Planet[]>) => {
      state.planets = action.payload;
    },
    setPlanetText: (state, action: PayloadAction<string>) => {
      state.planetText = action.payload;
    },
    setColorFilter: (state, action: PayloadAction<Attributes[]>) => {
      state.colorFilter = action.payload;
    },
    setSizeFilter: (state, action: PayloadAction<Attributes[]>) => {
      state.sizeFilter = action.payload;
    },
    setShapeFilter: (state, action: PayloadAction<Attributes[]>) => {
      state.shapeFilter = action.payload;
    },
    filterPlanet: (state, action) => {
      const filter1 =
        state.planetText != ""
          ? state.planets.filter((elem) => {
              return elem.name.includes(state.planetText);
            })
          : state.planets;
      const filter2 =
        state.colors.length != 0
          ? filter1.filter((elem) => {
              return state.colorFilter.some((e) => {
                return e.id === elem.color;
              });
            })
          : filter1;
      const filter3 =
        state.shapes.length != 0
          ? filter2.filter((elem) => {
              return state.shapeFilter.some((e) => {
                return e.id === elem.shape;
              });
            })
          : filter2;
      const filter4 =
        state.sizes.length != 0
          ? filter3.filter((elem) => {
              return state.sizeFilter.some((e) => {
                return e.id === elem.size;
              });
            })
          : filter3;
      state.planetsShow = filter4;
    },
  },
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const {
  setShapes,
  setColors,
  setSizes,
  setPlanetText,
  setPlanets,
  setColorFilter,
  setShapeFilter,
  setSizeFilter,
  filterPlanet,
} = planetStates.actions;

export default planetStates.reducer;
