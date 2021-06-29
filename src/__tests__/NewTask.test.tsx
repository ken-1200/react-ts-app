import axios from 'axios';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMemoryHistory } from 'history';

import { shallow } from 'enzyme';
import NewTask from '../components/organisms/NewTask';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('axios');

describe('NewTask.tsx', () => {
  it('changeParentTitleを呼び出すと、setStateが呼び出されること', () => {
    // == 準備 ==
    /** NewTaskコンポーネントをshallowレンダリング */
    const wrapper: any = shallow(<NewTask />);

    /** setStateしてthis.state.inputValueの値を'XXX'に更新 */
    wrapper.setState({
      title: 'AAA',
      text: 'AAA',
      errorTitle: '',
      errorText: '',
    });
  
    // == 実行 ==
    /** changeParentTitle() changeParentText()を呼び出す */
    wrapper.instance().changeParentTitle('BBB');
    wrapper.instance().changeParentText('BBB');
  
    // == 検証 ==
    /** 適切な引数でspy化したsetStateが呼び出されていればOK */
    expect(wrapper.state()).toStrictEqual({ title: 'BBB', text: 'BBB', errorTitle: '', errorText: '' });
  });

  afterEach(() => jest.restoreAllMocks());

  it('postTaskを呼び出すと、タスクがpostされ、ホーム画面に遷移すること', async () => {
    // == 準備 ==
    /** NewTaskコンポーネントをshallowレンダリング */
    const wrapper: any = shallow(<NewTask />);

    /** createMemoryHistoryで履歴が実際に変更されたことを確認する */
    const history = createMemoryHistory();


    /** axios postの設定 */
    const payload = {title: "title", text: "text"};
    (axios.post as any).mockResolvedValue(payload);

    // == 実行 ==
    /** historyHome() */
    history.push('/');

    /** postTask() */
    const data = await wrapper.instance().postTask();

    // == 検証 ==
    /** 適切な引数でspy化したsetStateが呼び出されていればOK */
    expect(data).toBe(payload);
    expect(history.location.pathname).toBe('/');
  });
});
