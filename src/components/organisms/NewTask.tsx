import React from "react";
import { TitleForm } from "../molecules/TitleForm";
import { TextForm } from "../molecules/TextForm";

type State = {
  title: string;
  text: string;
}

class NewTask extends React.Component<{}, State, any> {
  // 初期化
  public constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      text: "",
    }

    this.changeParentTitle = this.changeParentTitle.bind(this);
    this.changeParentText = this.changeParentText.bind(this);
  }

  // 受け取った引数をステートに格納
  private changeParentTitle(value: string): void {
    this.setState({ title: value });
  }

  private changeParentText(value: string): void {
    this.setState({ text: value });
  }

  render() {
    return (
      <React.Fragment>
        <TitleForm changeParentTitle= { this.changeParentTitle } />
        <br />
        <TextForm changeParentText={ this.changeParentText } />
      </React.Fragment>
    )
  }
}

export default NewTask;