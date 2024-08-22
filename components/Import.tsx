import { useState } from "react";
import { useDispatch } from "react-redux";
import { setColorFilter, setShapeFilter, setSizeFilter } from "@/store/slice";
import ErrorComponent from "./Error";
import Cross from "./Cross";
import { handleFileChange } from "@/lib/action/eventHandlers";
import UploadOption from "./UploadOption";

export default function Import({
  render,
  setRender,
}: {
  render: boolean;
  setRender: (a: boolean) => void;
}) {
  const [upload, setUpload] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    handleFileChange({
      event,
      dispatch,
      setColorFilter,
      setSizeFilter,
      setShapeFilter,
      setRender,
      setError,
      setUpload,
      render,
    });
  }
  return (
    <div className="mr-1">
      {error ? (
        <div className="absolute pt-10 left-0 w-full h-full flex flex-col items-center">
          <ErrorComponent />
        </div>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          setUpload(true);
        }}
        className="transition-all bg-white text-black hover:bg-white/50 py-1 px-3 rounded-md text-sm font-semibold mt-2"
      >
        Import
      </button>
      {upload ? (
        <div className="absolute bg-black/60 w-screen h-screen left-0 top-0 flex flex-col items-center justify-center backdrop-blur-md">
          <Cross
            onClick={() => {
              setUpload(false);
            }}
          />
          <UploadOption handleFileChange={handleUpload} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
