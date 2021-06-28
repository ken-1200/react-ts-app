export const SubmitButton = ({ clickSubmitButton }: any) => {
  // onClick時、実行関数
  function onClickHandler(e: any) {
    e.preventDefault();

    // 親コンポーネントの関数実行
    clickSubmitButton();
  }

  return (
    <button 
      type="submit"
      onClick={ onClickHandler }
    >Submit</button>
  )
};