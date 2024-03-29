import {
	describe,
	it,
} from 'node:test';
import assert from 'node:assert/strict';
import {
	progress_group,
	reduce,
	remap,
	remove_indentation,
} from '../../lib/MarkdownUtilities';

void describe('remap', () => {
	void it('behaves', () => {
		const foo:progress_group = {
			members: ['foobar', 'bar_foo'],
			subgroups: {
				foo: {
					members: ['baz', 'bat'],
					subgroups: {},
				},
				bar: {
					members: ['baz', 'bat'],
					subgroups: {},
				},
			},
		};
		remap(foo);
		assert.deepEqual(
			foo,
			{
				members: [],
				subgroups: {
					foo: {
						members: ['foobar', 'baz', 'bat'],
						subgroups: {},
					},
					bar: {
						members: ['bar_foo', 'baz', 'bat'],
						subgroups: {},
					},
				},
			}
		);
	})
})

void describe('reduce', () => {
	void it('behaves', () => {
		const foo:progress_group = {
			members: ['foobar', 'bar_foo'],
			subgroups: {
				foo: {
					members: ['baz', 'bat'],
					subgroups: {},
				},
				bar: {
					members: ['baz', 'bat'],
					subgroups: {},
				},
			},
		};
		remap(foo);
		assert.deepEqual(
			reduce(foo),
			[
				{
					title: 'Basic Types',
					depth: 2,
					members: [],
				},
				{
					title: 'bar',
					depth: 2,
					members: [
						'bar_foo',
						'baz',
						'bat',
					],
				},
				{
					title: 'foo',
					depth: 2,
					members: [
						'foobar',
						'baz',
						'bat',
					],
				},
			]
		);
	});
})

void describe('remove_indentation', () => {
	void it('will remove indentation', () => {
		assert.equal(
			remove_indentation(
				`foo
				bar`
			),
			'foo\nbar'
		);
	})
	void it('will not need to bother', () => {
		assert.equal(remove_indentation('foo'), 'foo');
	})
});
