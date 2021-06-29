export const InputTitle = ({ changeTitle }: any) => {
  // onChange時、実行関数
  function onChangeHandler(value: string): void {
    // タイトルを上のコンポーネントの関数の引数に渡す
    changeTitle(value);
  }

  return (
    <input 
      id="title"
      type="text"
      placeholder="title"
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e.target.value);
        }
      }
    />
  )
};
