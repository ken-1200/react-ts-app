import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { SubmitButton } from "../components/atoms/buttons/SubmitButton";

Enzyme.configure({ adapter: new Adapter() });

describe('SubmitButton.tsx', () => {
  it('clickイベント発火時にコールバック関数が呼び出されること', () => {
    // == 準備 ==
    /** mock関数としてhandleclickSpyを作成 */
    const handleclickSpy = jest.fn();

    /**
     * mock関数'handleclickSpy'をclickSubmitButtonに渡して、
     * buttonコンポーネントをshallowレンダリング
     */
    const wrapper = shallow(<SubmitButton clickSubmitButton={ handleclickSpy } />);
  
    // == 実行 ==
    /** button要素に対してclickイベントを発火させる */
    wrapper.find('button').simulate('click', {
      preventDefault: () => {}
    });
  
    // == 検証 ==
    /** mock関数'handleclickSpy'が呼び出されればOK */
    expect(handleclickSpy).toHaveBeenCalled();
  });
});
