"use client";
import Alert from "@/components/Alert";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setPlanets } from "@/store/slice";
import SearchBar from "@/components/SearchBar";
import LowerHalf from "@/components/LowerHalf";
import { useEffect } from "react";
import axios from "axios";
import Loader from "@/components/Loader";


export default function Home() {
  const dispatch = useDispatch();
  const loader = useSelector((state:RootState)=>state.counter.loader);

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      {loader?<div className="absolute h-full w-full bg-black/50 backdrop-blur-md flex flex-col justify-center items-center"><Loader/></div>:<></>}
      <div className="md:4/5 lg:w-3/5 bg-white/10 h-full">
        <div className="h-[10%] flex flex-col items-center">
          <SearchBar />
        </div>
        <div className="h-[90%]">
          <LowerHalf />
        </div>
      </div>
    </div>
  );
}
