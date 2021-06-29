import React from "react";
import { TitleForm } from "../molecules/TitleForm";
import { TextForm } from "../molecules/TextForm";
import { SubmitButton } from "../atoms/buttons/SubmitButton";
import { Link } from "react-router-dom";
import axios from "axios";

interface State {
  title: string;
  text: string;
}

class NewTask extends React.Component<any, State, any> {
  // 初期化
  public constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      text: "",
    }

    this.changeParentTitle = this.changeParentTitle.bind(this);
    this.changeParentText = this.changeParentText.bind(this);
    this.clickSubmitButton = this.clickSubmitButton.bind(this);
  }

  // 受け取った引数をステートに格納
  private changeParentTitle(value: string) {
    this.setState({ title: this.titleValidator(value) });
  }

  private changeParentText(value: string): void {
    this.setState({ text: this.TextValidator(value) });
  }

  private async clickSubmitButton(): Promise<void> {
    // Post実行
    await this.postTask();

    // 画面遷移
    this.historyHome();
  }

  private titleValidator(value: string) {
    if (value.length === 0 && this.state.title.length === 0) {
      return this.titleValidation(value);
    }

    return value;
  }

  private TextValidator(value: string) {
    if (value.length === 0 && this.state.text.length === 0) {
      return this.textValidation(value);
    }

    return value;
  }

  public titleValidation(value: string) {
    console.log("title入力値がない時に呼ばれる");
    console.log(!!value);
    if (!value) return "※タイトルを入力してください";
    return value;
  }

  public textValidation(value: string) {
    console.log("text入力値がない時に呼ばれる");
    console.log(!!value);
    if (!value) return "※テキストを入力してください";
    return value;
  }

  public textError() {
    if (!this.state.text) {
      return "Ss";
    }

    return "";
  }

  private async postTask() {
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos`;
    const payload = {
      title: this.state.title,
      text: this.state.text,
    };

    // 作成API
    return await axios
      .post(url, payload)
      .catch((error) => {
        console.log(error);
      });
  }

  private historyHome(): void {
    // 画面遷移
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <TitleForm changeParentTitle= { this.changeParentTitle } />
          <p>{ this.state.title }</p>
        </div>
        <div>
          <TextForm changeParentText={ this.changeParentText } />
          <p>
            { this.state.text }
          </p>
        </div>
        <div>
          <SubmitButton clickSubmitButton={ this.clickSubmitButton } disabled={ !this.state.text } />
          <Link to="/">Cancel</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default NewTask;