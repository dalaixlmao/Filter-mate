import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

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
  loader: true,
};

export const planetStates = createSlice({
  name: "shape",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
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
    removeColorFilter:(state, action: PayloadAction<Attributes>)=>{
      state.colorFilter = state.colorFilter.filter((elem) => {
        return elem.id !== action.payload.id;
    })},
    removeShapeFilter:(state, action: PayloadAction<Attributes>)=>{
      state.shapeFilter = state.shapeFilter.filter((elem) => {
        return elem.id !== action.payload.id;
    })},
    removeSizeFilter:(state, action: PayloadAction<Attributes>)=>{
      state.sizeFilter = state.sizeFilter.filter((elem) => {
        return elem.id !== action.payload.id;
    })},
    setSizeFilter: (state, action: PayloadAction<Attributes[]>) => {
      state.sizeFilter = action.payload;
    },
    setShapeFilter: (state, action: PayloadAction<Attributes[]>) => {
      state.shapeFilter = action.payload;
    },
  },
});


export const {
  setShapes,
  setColors,
  setSizes,
  setPlanetText,
  setPlanets,
  setColorFilter,
  setShapeFilter,
  setSizeFilter,
  removeColorFilter,
  removeShapeFilter,
  removeSizeFilter,
  setLoader
} = planetStates.actions;

export const getColor = (state: RootState, id: string): string | undefined => {
  const color = state.counter.colors.find((shape) => shape.id === id);
  return color ? color.name : undefined;
};




export default planetStates.reducer;
