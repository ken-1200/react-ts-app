export const SubmitButton = ({ clickSubmitButton, disabled }: any) => {
  // onClick時、実行関数
  function onClickHandler(e: any) {
    e.preventDefault();

    // 親コンポーネントの関数実行
    clickSubmitButton();
  }

  console.log(disabled);

  return (
    <button 
      type="submit"
      onClick={ onClickHandler }
      disabled={ disabled }
    >Submit</button>
  )
};