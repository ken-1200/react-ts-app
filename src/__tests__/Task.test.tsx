import axios from 'axios';
import Task from '../components/Task'

jest.mock('axios');

describe('first test', () => {
  afterEach(() => jest.restoreAllMocks());

  it('should return empty string', async () => {
    // レスポンス内容を指定
    const res = {id: 1, title: "title", text: "text"};

    (axios.get as any).mockResolvedValue(res);

    // タスクコンポーネントないのgetTask関数を呼び出し
    const data = await Task.getTask();

    // 整合性のチェック
    expect(data).toEqual(res);
  });
});
