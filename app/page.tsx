"use client";
import Alert from "@/components/Alert";
import { RootState } from "@/store/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/slice";
import SearchBar from "@/components/SearchBar";
import LowerHalf from "@/components/LowerHalf";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="absolute bottom-10 bg-red-100/10 backdrop-blur-lg px-4 py-2 border-red-500 border-2 rounded-lg flex flex-row">
      <Alert /> Assignment in progress !</div>
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
