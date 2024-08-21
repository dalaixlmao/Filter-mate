import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setColorFilter, setSizeFilter, setShapeFilter, removeSizeFilter, removeShapeFilter,removeColorFilter } from "@/store/slice";

export default function FilterCheck({
  name,
  id,
  type,
}: {
  name: string;
  id: string;
  type: string;
}) {
    const dispatch = useDispatch();
    const colorFilter = useSelector((state: RootState) => state.counter.colorFilter);
    const sizeFilter = useSelector((state: RootState) => state.counter.sizeFilter);
    const shapeFilter = useSelector((state: RootState) => state.counter.shapeFilter);

    const handleCheck = (event:any) => {
        switch (type) {
            case "Color": {
                if (event.target.checked) {
                    dispatch(setColorFilter([...colorFilter, {id, name}]));
                    console.log("checked", colorFilter);
                } else {
                    dispatch(removeColorFilter({id, name}));
                    console.log("unchecked", colorFilter);
                }
                break;
            }
            case "Size": {
                if (event.target.checked) {
                    dispatch(setSizeFilter([...sizeFilter, {id, name}]));
                    console.log("checked", sizeFilter);

                } else {
                    dispatch(removeSizeFilter({id, name}));
                    console.log("unchecked", sizeFilter);

                }
                break;
            }
            case "Shape": {
                if (event.target.checked) {
                    dispatch(setShapeFilter([...shapeFilter, {id, name}]));
                    console.log("checked", shapeFilter);

                } else {
                    dispatch(removeShapeFilter({id, name}));
                    console.log("unchecked", shapeFilter);

                }
                break;
            }
        }
    };


  return (
    <div className="flex flex-row items-center mb-2">
      <input
        onClick={handleCheck}
        type="checkbox"
        className="appearance-none bg-white/10 checked:bg-blue-500 h-4 w-4 rounded-md cursor pointer"
      />
      <label className="ml-2 text-xs font-light">{name}</label>
    </div>
  );
}
