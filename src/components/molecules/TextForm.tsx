import React from "react";
import { InputText } from "../atoms/inputs/InputText";
import { LabelText } from "../atoms/labels/LabelText";

export const TextForm: ({ changeParentText, text }: any) => JSX.Element = ({ changeParentText, text }: any) => {
  // 受け取った引数を親コンポーネントの関数の引数に渡す
  function changeText(value: string): void {
    changeParentText(value);
  }

  return (
    <React.Fragment>
      <LabelText />
      <InputText text={ text } changeText={ changeText } />
    </React.Fragment>
  )
};