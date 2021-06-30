import React from "react";
import { TitleForm } from "../molecules/TitleForm";
import { TextForm } from "../molecules/TextForm";
import { SubmitButton } from "../atoms/buttons/SubmitButton";
import { Link } from "react-router-dom";
import axios from "axios";
import RaisedButton from 'material-ui/RaisedButton';

interface State {
  title: string | void;
  text: string | void;
  errorTitle: string;
  errorText: string;
  checkEditTitle: boolean;
  checkEditText: boolean;
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
      checkEditTitle: false,
      checkEditText: false,
    }

    this.changeParentTitle = this.changeParentTitle.bind(this);
    this.changeParentText = this.changeParentText.bind(this);
    this.clickSubmitButton = this.clickSubmitButton.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    
    // マウント時にidに紐づく情報を取得
    if(id) this.getIdTask(id);
  }

  /** idに紐づくタスク取得 */
  private async getIdTask(id: string) {
    // id task api
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos/${id}`;
    await axios.get(url).then((response) => {
      const { title, text } = response.data;
      this.setState({ title: title, text: text });
    });
  }

  // 受け取った引数をステートに格納
  private changeParentTitle(value: string) {
    this.setState({ checkEditTitle: true, checkEditText: true });

    this.setState({ title: this.titleValidator(value) });
  }

  private changeParentText(value: string): void {
    this.setState({ checkEditText: true, checkEditTitle: true });

    this.setState({ text: this.TextValidator(value) });
  }

  private async clickSubmitButton(): Promise<void> {
    // Post実行
    await this.updateTask();

    this.setState({ title: "", text: "" });

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

  /** タスク更新API */
  private async updateTask() {
    const { id } = this.props.match.params;
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos/${id}`;
    const payload = {
      title: this.state.title,
      text: this.state.text,
    };

    // 作成API
    return await axios
      .put(url, payload)
      .catch((error) => {
        console.log(error);
      });
  }

  /** 削除 */
  private async deleteTask(e: any) {
    e.preventDefault();

    const { id } = this.props.match.params;
    const url = `${process.env.REACT_APP_BSSE_URL}/todos/${id}`;

    // 削除API
    await 
      axios.delete(url)
      .then(() => {
        // 画面遷移
        this.historyHome();
      });
  }

  /** ホーム画面遷移 */
  private historyHome(): void {
    // 画面遷移
    this.props.history.push("/");
  }

  render() {
    const style = {
      margin: "12px",
    }

    return (
      <React.Fragment>
        <form>
          <div>
            <TitleForm changeParentTitle= { this.changeParentTitle } title={ this.state.title || "" } />
            <p>{ this.state.errorTitle }</p>
          </div>
          <div>
            <TextForm changeParentText={ this.changeParentText } text={ this.state.text || "" } />
            <p>{ this.state.errorText }</p>
          </div>
          <div>
            <SubmitButton clickSubmitButton={ this.clickSubmitButton } disabled={ !this.state.text || !this.state.title || !this.state.checkEditText || !this.state.checkEditTitle } />
            <RaisedButton label="Cancel" style={ style } containerElement={ <Link to="/" /> } />
            <RaisedButton type="submit" style={ style } onClick={ this.deleteTask }>Delete</RaisedButton>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

export default NewTask;