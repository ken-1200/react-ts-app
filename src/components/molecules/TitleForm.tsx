import React from "react";
import { InputTitle } from "../atoms/inputs/InputTitle";
import { LabelTitle } from "../atoms/labels/LabelTitle";

export const TitleForm: ({ changeParentTitle }: any) => JSX.Element = ({ changeParentTitle }: any) => {
  // 受け取った引数を親コンポーネントの関数の引数に渡す
  function changeTitle(value: string): void {
    changeParentTitle(value);
  }
  return (
    <React.Fragment>
      <LabelTitle />
      <InputTitle changeTitle={ changeTitle } />
    </React.Fragment>
  )
};