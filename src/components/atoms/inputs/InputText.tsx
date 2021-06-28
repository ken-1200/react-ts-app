export const InputText = ({ changeText }: any) => {
  // onChange時、実行関数
  function onChangeHandler(value: string): void {
    // タイトルを上のコンポーネントの関数の引数に渡す
    changeText(value);
  }

  return (
    <input 
      id="text"
      type="text"
      placeholder="text"
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e.target.value);
        }
      }
    />
  )
};
