import {
	FilesGenerator as Base,
} from '../FilesGenerator';
import {
	DocsTsGenerator,
} from '../DocsTsGenerator';
import Ajv, {
	ValidateFunction,
} from 'ajv/dist/2020';
import {
	NoMatchError,
} from '../Exceptions';
import {
	adjust_unrealengine_value,
} from '../CustomParsingTypes/UnrealEngineString';
import {
	UnrealEngineString,
} from '../TypeDefinitionDiscovery/CustomParsingTypes/UnrealEngineString';
import ts from 'typescript';
import {
	create_modifiers,
} from '../TsFactoryWrapper';
import {
	TypeDefinitionDiscovery,
} from '../TypeDefinitionDiscovery';
import {
	TypesDiscovery,
} from '../TypesDiscovery';

export class FilesGenerator extends Base {
	private readonly ajv:Ajv;
	private readonly discovery:TypeDefinitionDiscovery;
	private readonly docs:DocsTsGenerator;
	private readonly validations:ValidateFunction[];

	constructor(
		docs:DocsTsGenerator,
		validations:ValidateFunction[],
		discovery:TypeDefinitionDiscovery,
		ajv:Ajv
	) {
		super();
		this.docs = docs;
		this.validations = validations;
		this.discovery = discovery;
		this.ajv = ajv;
	}

	async* generate_files() {
		const types = await this.discovery.discover_type_definitions();

		const is_NativeClass = await TypesDiscovery.generate_is_NativeClass(
			this.ajv,
			this.docs
		);

		for (const entry of await this.docs.get()) {
			const check = this.validations.find(maybe => maybe(entry));

			if (!check) {
				throw new NoMatchError(
					{
						types,
						entry,
					},
					'Could not find schema!'
				);
			} else if (!is_NativeClass(entry)) {
				console.error(entry);
				throw new Error('Entry not a general NativeClass!');
			}

			const entry_type = this.discovery.find(
				types.found_classes[this.validations.indexOf(check)]
			);

			const entry_class_name = adjust_unrealengine_value(
				UnrealEngineString.fromString(entry.NativeClass).right
			);

			const entry_filename = `classes/CoreUObject/${
				entry_class_name
			}.ts`;

			yield {
				file: entry_filename,
				node: ts.factory.createTypeAliasDeclaration(
					create_modifiers('export'),
					`${entry_class_name}__NativeClass`,
					undefined,
					entry_type
				),
			};
		}
	}
}
