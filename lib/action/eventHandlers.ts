import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Attributes } from "../types";
import { handleFileChangeType } from "../types";
import { handleCheckType } from "../types";

export function handleFileChange(params:handleFileChangeType) {
  const file = params.event.target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string);
        params.dispatch(params.setColorFilter(data.colorFilter));
        params.dispatch(params.setSizeFilter(data.sizeFilter));
        params.dispatch(params.setShapeFilter(data.shapeFilter));
        params.setRender(!params.render);
        params.setError(null);
        params.setUpload(false);
      } catch (e) {
        params.setError("Failed to parse JSON");
        params.setUpload(false);
        setTimeout(() => params.setError(null), 5000);
      }
    };
    reader.onerror = () => {
      params.setError("Failed to read file");
      params.setUpload(false);
    };
    reader.readAsText(file);
  }
}

export function handleCheck(param:handleCheckType) {
  param.setIsChecked(param.event.target.checked);
  switch (param.type) {
    case "Color": {
      if (param.event.target.checked) {
        param.dispatch(param.setColorFilter([...param.colorFilter, { id:param.id, name:param.name }]));
      } else {
        param.dispatch(param.removeColorFilter({ id:param.id, name:param.name }));
      }
      break;
    }
    case "Size": {
      if (param.event.target.checked) {
        param.dispatch(param.setSizeFilter([...param.sizeFilter, { id:param.id, name:param.name }]));
      } else {
        param.dispatch(param.removeSizeFilter({ id:param.id, name:param.name }));
      }
      break;
    }
    case "Shape": {
      if (param.event.target.checked) {
        param.dispatch(param.setShapeFilter([...param.shapeFilter, { id:param.id, name:param.name }]));
      } else {
        param.dispatch(param.removeShapeFilter({ id:param.id, name:param.name }));
      }
      break;
    }
  }
}