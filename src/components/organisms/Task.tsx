import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

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
  public constructor(props: any) {
    super(props);
    this.state = { tasklist: {} };
  }

  // Mount時
  public async componentDidMount() {
    // タスク一覧API
    await this.getTask();
  }

  // タスク一覧 READ
  public async getTask(): Promise<void> {
    const url: string = `${process.env.REACT_APP_BSSE_URL}/todos`;
    const task = await axios.get(url);
    const mapTask = _.mapKeys(task.data, "id");

    // ステートに保存
    this.setState({ tasklist: mapTask });
  }

  // テーブル表示関数
  private renderTask(): JSX.Element[] {
    return _.map(this.state.tasklist, task => (
      <TableRow key={ task.id }>
        <TableRowColumn>{ task.id }</TableRowColumn>
        <TableRowColumn>
          <Link to={ `/task/${task.id}` }>
            { task.title }
          </Link>
        </TableRowColumn>
        <TableRowColumn>{ task.text }</TableRowColumn>
      </TableRow>
    ));
  }

  render() {
    const style: any = {
      position: "fixed",
      right: "12px",
      bottom: "12px",
    }

    return (
      <React.Fragment>
        <h1>Task List</h1>
        <Table>
          <TableHeader
            displaySelectAll={ false }
            adjustForCheckbox={ false }
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Text</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={ false }
          >
            { this.renderTask() }
          </TableBody>
        </Table>
        <FloatingActionButton style={ style } containerElement={ <Link to="/task/new" /> }>
          <ContentAdd></ContentAdd>
        </FloatingActionButton>
      </React.Fragment>
    );
  }
}

export default Task;
