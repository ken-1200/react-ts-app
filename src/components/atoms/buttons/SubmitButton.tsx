import RaisedButton from 'material-ui/RaisedButton';

export const SubmitButton = ({ clickSubmitButton, disabled }: any) => {
  // onClick時、実行関数
  function onClickHandler(e: any) {
    e.preventDefault();

    // 親コンポーネントの関数実行
    clickSubmitButton();
  }

  const style = { margin: "12px" };

  return (
    <RaisedButton 
      type="submit"
      style={ style }
      onClick={ onClickHandler }
      disabled={ disabled }
    >Submit</RaisedButton>
  )
};