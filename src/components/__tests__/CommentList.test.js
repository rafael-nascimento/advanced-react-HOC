import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ['Comentário bolado', 'Comentário sarado', 'Comentário machucado']
  };

  wrapped = mount(
    <Root initialState={ initialState }>
      <CommentList />
    </Root>
  );
});

describe('CommentList component should', () => {
  it('create LI element per comment', () => {
    const liCounter = wrapped.find('li').length;

    expect(liCounter).toEqual(3);
  });

  it('show right text for each comment', () => {
    wrapped.find('li')
      .map(li => li.render().text())
      .forEach((text, index) => {
        expect(text).toEqual(initialState.comments[index]);
      });
  });
});