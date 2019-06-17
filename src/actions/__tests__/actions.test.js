import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment should', () => {
  it('have the correct type', () => {
    const action = saveComment();
  
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('have the correct payload', () => {
    const action = saveComment('PAGUE O ALUGUEL!');

    expect(action.payload).toEqual('PAGUE O ALUGUEL!')
  });
});