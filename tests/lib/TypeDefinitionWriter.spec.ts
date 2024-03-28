import 'jasmine';
import {
	TypeDefinitionWriter,
} from '../../lib/TypeDefinitionWriter';

describe('TypeDefinitionWriter', () => {
	it('guess_filename', () => {
		expect(
			TypeDefinitionWriter.guess_filename('foo')
		).toEqual('common/unassigned.ts');
		expect(
			TypeDefinitionWriter.guess_filename('NativeClass--foo')
		).toEqual('classes/base.ts');
		expect(
			TypeDefinitionWriter.guess_filename('FGFoo--bar')
		).toEqual('classes/CoreUObject/FGFoo.ts');
	});
});
