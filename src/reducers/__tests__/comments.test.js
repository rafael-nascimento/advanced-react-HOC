import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('Comment reducer should', () => {
    it('save the comment', () => {
        const action = { type: SAVE_COMMENT, payload: 'natchos blatchos' };
        
        const changedState = commentReducer([], action);

        expect(changedState.length).toEqual(1)
        expect(changedState[0]).toEqual('natchos blatchos');
    })

    it('handle action with unknown type', () => {
        const action = { type: 'UNKNOWN_TYPE', payload: 'blatchos' };

        const changedState = commentReducer([], action)
        
        expect(changedState.length).toEqual(0)
    })
})