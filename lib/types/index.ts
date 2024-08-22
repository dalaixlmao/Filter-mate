import { Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

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


  export interface handleFileChangeType{
    event: React.ChangeEvent<HTMLInputElement>,
    dispatch: Dispatch<UnknownAction>,
    setColorFilter: ActionCreatorWithPayload<Attributes[]>,
    setSizeFilter: ActionCreatorWithPayload<Attributes[]>,
    setShapeFilter: ActionCreatorWithPayload<Attributes[]>,
    setRender: (a: boolean) => void,
    setError: (a: string | null) => void,
    setUpload: (a: boolean) => void,
    render: boolean
  }

  export interface handleCheckType{
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
    name: string,
    setIsChecked: (a: boolean) => void,
    type: string,
    colorFilter: Attributes[],
    sizeFilter: Attributes[],
    shapeFilter: Attributes[],
    setColorFilter: ActionCreatorWithPayload<Attributes[]>,
    removeColorFilter: ActionCreatorWithPayload<Attributes>,
    setSizeFilter: ActionCreatorWithPayload<Attributes[]>,
    removeSizeFilter: ActionCreatorWithPayload<Attributes>,
    setShapeFilter: ActionCreatorWithPayload<Attributes[]>,
    removeShapeFilter: ActionCreatorWithPayload<Attributes>,
    dispatch: Dispatch<UnknownAction>
  }