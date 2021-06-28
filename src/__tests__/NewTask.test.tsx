import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import NewTask from '../components/organisms/NewTask';

Enzyme.configure({ adapter: new Adapter() });

describe('InputText.tsx', () => {
  it('changeParentTitleを呼び出すと、setStateが呼び出されること', () => {
    // == 準備 ==
    /** Appコンポーネントをshallowレンダリング */
    const wrapper: any = shallow(<NewTask />);

    /** setStateしてthis.state.inputValueの値を'XXX'に更新 */
    wrapper.setState({
      title: 'AAA',
      text: 'AAA',
    });
  
    // == 実行 ==
    /** changeParentTitle() changeParentText()を呼び出す */
    wrapper.instance().changeParentTitle('BBB');
    wrapper.instance().changeParentText('BBB');
  
    // == 検証 ==
    /** 適切な引数でspy化したsetStateが呼び出されていればOK */
    expect(wrapper.state()).toStrictEqual({ title: 'BBB', text: 'BBB' });
  });
});
