import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
	//It's not necessary to use mount here. I could use shallow, since there is no children component,
	//but Stephen wanted to show us how to use mount.
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapped.unmount();
});

describe('CommentBox component', () => {
	it('shows textarea and two button elements ', () => {
		expect(wrapped.find('textarea').length).toEqual(1);
		expect(wrapped.find('button').length).toEqual(2);
	});

	describe('the text area', () => {
		beforeEach(() => {
			wrapped.find('textarea').simulate('change', {
				target: { value: 'new comment' }
			});
	
			wrapped.update();
		});

		it('receives user inputs', () => {
			expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		});
	
		it('is cleared after form submission', () => {
			expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	
			wrapped.find('form').simulate('submit');
	
			wrapped.update();
	
			expect(wrapped.find('textarea').prop('value')).toEqual('');
		});
	});	
});