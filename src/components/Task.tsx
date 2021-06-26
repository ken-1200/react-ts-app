import React from 'react';
import axios from 'axios';
import _ from 'lodash';

type State = {
  tasklist: any;
}

class Task extends React.Component<{}, State> {
  // Test
  static getTask () {
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos`
    const task: any = axios.get(url);
    return task;
  }

  // 初期化処理
  private constructor(props: any) {
    super(props);
    this.state = { tasklist: {} };
  }

  // Mount時
  public async componentDidMount() {
    // タスク一覧API
    this.getTask();
  }

  // タスク一覧 READ
  public async getTask(): Promise<void> {
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos`
    const task = await axios.get(url);
    const mapTask = _.mapKeys(task.data, "id");

    // ステートに保存
    this.setState({ tasklist: mapTask });
  }

  // テーブル表示関数
  private renderTask(): JSX.Element[] {
    return _.map(this.state.tasklist, task => (
      <tr key={ task.id }>
        <td>{ task.id }</td>
        <td>{ task.title }</td>
        <td>{ task.text }</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <h1>task list</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Text</th>
            </tr>
          </thead>

          <tbody>
            { this.renderTask() }
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Task;
