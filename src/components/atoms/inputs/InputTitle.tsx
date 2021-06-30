import TextField from 'material-ui/TextField';

export const InputTitle = ({ changeTitle, title }: any) => {
  // onChange時、実行関数
  function onChangeHandler(value: string): void {
    // タイトルを上のコンポーネントの関数の引数に渡す
    changeTitle(value);
  }

  return (
    <TextField 
      id="title"
      type="text"
      fullWidth={ true }
      value={ title }
      onChange={
        (e: React.ChangeEvent<HTMLInputElement>) => {
          onChangeHandler(e.target.value);
        }
      }
    />
  )
};
