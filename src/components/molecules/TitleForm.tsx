import React from "react";
import { InputTitle } from "../atoms/inputs/InputTitle";
import { LabelTitle } from "../atoms/labels/LabelTitle";

export const TitleForm: ({ changeParentTitle, title }: any) => JSX.Element = ({ changeParentTitle, title }: any) => {
  // 受け取った引数を親コンポーネントの関数の引数に渡す
  function changeTitle(value: string): void {
    changeParentTitle(value);
  }
  return (
    <React.Fragment>
      <LabelTitle />
      <InputTitle title={ title } changeTitle={ changeTitle } />
    </React.Fragment>
  )
};