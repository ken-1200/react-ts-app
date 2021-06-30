import TextField from 'material-ui/TextField';

export const InputText = ({ changeText, text }: any) => {
  // onChange時、実行関数
  function onChangeHandler(value: string): void {
    // タイトルを上のコンポーネントの関数の引数に渡す
    changeText(value);
  }

  return (
    <TextField 
      id="text"
      type="text"
      fullWidth={ true }
      value={ text }
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e.target.value);
        }
      }
    />
  )
};
