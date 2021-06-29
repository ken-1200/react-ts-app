import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { InputTitle } from '../components/atoms/inputs/InputTitle';

Enzyme.configure({ adapter: new Adapter() });

describe('InputTitle.tsx', () => {
  it('changeイベント発火時にコールバック関数が呼び出されること', () => {
    // == 準備 ==
    /** mock関数としてhandleChangeSpyを作成 */
    const handleChangeSpy = jest.fn();

    /**
     * mock関数'handleChangeSpy'をchangeTitleに渡して、
     * Inputコンポーネントをshallowレンダリング
     */
    const wrapper = shallow(<InputTitle changeTitle={ handleChangeSpy } />);

    /** ダミーなeventオブジェクトを作成 */
    const event = { target: { value: 'XXX' } };
  
    // == 実行 ==
    /** input要素に対してchangeイベントを発火させる */
    wrapper.find('input').simulate('change', event);
  
    // == 検証 ==
    /** mock関数'handleChangeSpy'が'XXX'という引数で呼び出されればOK */
    expect(handleChangeSpy).toHaveBeenCalledWith('XXX');
  });
});
