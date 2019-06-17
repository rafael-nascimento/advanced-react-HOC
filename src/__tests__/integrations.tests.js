import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

describe('Integrations', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [ { name: 'natchos blatchos' }, { name: 'natchos mlatchos' } ]
    });
  })

  afterEach(() => {
    moxios.uninstall();
  });

  it('should be able to fetch and display list of comments', done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
      wrapped.update();

      expect(wrapped.find('li').length).toEqual(2);

      done();
      wrapped.unmount();
    });

  });
});