import React from "react";
import { TitleForm } from "../molecules/TitleForm";
import { TextForm } from "../molecules/TextForm";
import { SubmitButton } from "../atoms/buttons/SubmitButton";
import { Link } from "react-router-dom";
import axios from "axios";

interface State {
  title: string | void;
  text: string | void;
  errorTitle: string;
  errorText: string;
}

class NewTask extends React.Component<any, State, any> {
  // 初期化
  public constructor(props: any) {
    super(props);
    this.state = {
      title: "",
      text: "",
      errorTitle: "",
      errorText: "",
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
    // 入力値がなくなったらエラー表示する
    if (value.length === 0) {
      return this.titleValidation(value);
    }

    this.setState({ errorTitle: "" });
    return value;
  }

  private TextValidator(value: string) {
    // 入力値がなくなったらエラー表示する
    if (value.length === 0) {
      return this.textValidation(value);
    }

    this.setState({ errorText: "" });
    return value;
  }

  /**
   * 
   * @param value 入力値
   * @returns エラーメッセージ
   */
  public titleValidation(value: string) {
    // title入力値がない時に呼ばれる
    if (!value) {
      return this.setState({ errorTitle: "※タイトルを入力してください" });
    }
  }

  /**
   * 
   * @param value 入力値
   * @returns エラーメッセージ
   */
  public textValidation(value: string) {
    // text入力値がない時に呼ばれる
    if (!value) return this.setState({ errorText: "※テキストを入力してください" });
  }

  /** 新規作成API */
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

  /** ホーム画面遷移 */
  private historyHome(): void {
    // 画面遷移
    this.props.history.push("/");
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <TitleForm changeParentTitle= { this.changeParentTitle } />
          <p>{ this.state.errorTitle }</p>
        </div>
        <div>
          <TextForm changeParentText={ this.changeParentText } />
          <p>
            { this.state.errorText }
          </p>
        </div>
        <div>
          <SubmitButton clickSubmitButton={ this.clickSubmitButton } disabled={ !this.state.text || !this.state.title } />
          <Link to="/">Cancel</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default NewTask;