import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import {
  setColorFilter,
  setSizeFilter,
  setShapeFilter,
  removeSizeFilter,
  removeShapeFilter,
  removeColorFilter,
} from "@/store/slice";

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

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const isChecked = colorFilter.some(e => e.id === id) ||
                      sizeFilter.some(e => e.id === id) ||
                      shapeFilter.some(e => e.id === id);
    setIsChecked(isChecked);
  }, [colorFilter, sizeFilter, shapeFilter, id]);

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    switch (type) {
      case "Color": {
        if (event.target.checked) {
          dispatch(setColorFilter([...colorFilter, { id, name }]));
        } else {
          dispatch(removeColorFilter({ id, name }));
        }
        break;
      }
      case "Size": {
        if (event.target.checked) {
          dispatch(setSizeFilter([...sizeFilter, { id, name }]));
        } else {
          dispatch(removeSizeFilter({ id, name }));
        }
        break;
      }
      case "Shape": {
        if (event.target.checked) {
          dispatch(setShapeFilter([...shapeFilter, { id, name }]));
        } else {
          dispatch(removeShapeFilter({ id, name }));
        }
        break;
      }
    }
  };

  return (
    <div className="flex flex-row items-center mb-2">
      <input
        checked={isChecked}
        onChange={handleCheck}
        type="checkbox"
        className="appearance-none bg-white/10 checked:bg-blue-500 h-4 w-4 rounded-md cursor-pointer"
      />
      <label className="ml-2 text-xs font-light">{name}</label>
    </div>
  );
}
