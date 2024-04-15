import {
	FilesGenerator as Base,
} from '../FilesGenerator';
import {
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
import ts, {
	TypeAliasDeclaration,
	TypeNode,
} from 'typescript';
import {
	create_modifiers,
} from '../TsFactoryWrapper';
import {
	ref_discovery_type,
	TypeDefinitionDiscovery,
} from '../TypeDefinitionDiscovery';
import {
	TypesDiscovery,
} from '../TypesDiscovery';
import {
	DocsDataItem,
} from '../DocsTsGenerator';

export class FilesGenerator extends Base {
	private readonly discovery:TypeDefinitionDiscovery;
	private readonly is_NativeClass:Promise<ValidateFunction<DocsDataItem>>;
	private readonly types:Promise<ref_discovery_type>;
	private readonly validations:ValidateFunction[];

	constructor(
		validations:ValidateFunction[],
		discovery:TypeDefinitionDiscovery,
	) {
		super();
		this.validations = validations;
		this.discovery = discovery;
		this.is_NativeClass = TypesDiscovery.generate_is_NativeClass(
			this.discovery.docs
		);
		this.types = this.discovery.discover_type_definitions();
	}

	async* generate_files() {
		for (const entry of await this.discovery.docs.get()) {
			yield await this.generate_file(entry);
		}
	}

	protected async generate_file(entry:DocsDataItem): Promise<{
		file: string,
		node: TypeAliasDeclaration,
	}> {
		const types = await this.types;
		const is_NativeClass = await this.is_NativeClass;

		const check = this.validations.find(maybe => maybe(entry));

		if (!check) {
			throw new NoMatchError(
				{
					types,
					entry,
				},
				'Could not find matching validator!'
			);
		} else if (!is_NativeClass(entry)) {
			throw new NoMatchError(
				entry,
				'Entry not a general NativeClass!'
			);
		}

		const entry_type = this.discovery.find(
			types.found_classes[this.validations.indexOf(check)]
		);

		return this.generate_files_entry_yield(
			entry_type,
			this.generate_files_class_name(
				entry.NativeClass
			)
		);
	}

	protected generate_files_class_name(value:string): string
	{
		return adjust_unrealengine_value(
			UnrealEngineString.fromString(value).right
		);
	}

	protected generate_files_entry_yield(
		entry_type:TypeNode,
		entry_class_name:string,
	) : {
		file: string,
		node: TypeAliasDeclaration,
	} {
		const entry_filename = `classes/CoreUObject/${
			entry_class_name
		}.ts`;

		return {
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
