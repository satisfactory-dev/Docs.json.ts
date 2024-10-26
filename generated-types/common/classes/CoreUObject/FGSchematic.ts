import {
	StringPassedRegExp,
	UnrealEngineString,
	StringStartsWith,
} from '../../utils/validators';

import {
	decimal_string__signed__type,
	integer_string__type,
	decimal_string__type,
	boolean__type,
} from '../../common/scalar';

import {
	ItemClass__type,
	class__type,
	quaternion__type,
	SpecifiedColor__type,
	xy__type,
	empty_object__type,
	Texture2D__type,
	mEventType__optional_csv__type,
	None__type,
} from '../../common/unassigned';

export type FGSchematic__base__type = class__type & {
	FullName: StringPassedRegExp<'^BlueprintGeneratedClass /Game/FactoryGame/(Schematics|Events/Christmas)/'>;
	mType: Exclude<string, ''>;
	mSubCategories:
		| ''
		| [None__type, ...None__type[]]
		| [
				UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Schematics/'>
				>,
				...UnrealEngineString<
					'/Script/Engine.BlueprintGeneratedClass',
					StringStartsWith<'/Game/FactoryGame/Schematics/'>
				>[],
		];
	mMenuPriority: decimal_string__signed__type;
	mTechTier: integer_string__type;
	mCost: '' | ItemClass__type;
	mTimeToComplete: decimal_string__type;
	mRelevantShopSchematics:
		| ''
		| [
				(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Schematics/ResourceSink/'>
					>
					| None__type
				),
				...(
					| UnrealEngineString<
							'/Script/Engine.BlueprintGeneratedClass',
							StringStartsWith<'/Game/FactoryGame/Schematics/ResourceSink/'>
					>
					| None__type
				)[],
		];
	mIsPlayerSpecific: boolean__type;
	mUnlocks: [
		...{
			Class: Exclude<string, ''>;
		}[],
	];
	mSchematicIcon: {
		DrawAs: 'Image';
		ImageSize: xy__type;
		Margin: empty_object__type;
		TintColor: SpecifiedColor__type;
		OutlineSettings: {
			CornerRadii: quaternion__type;
			Color: SpecifiedColor__type;
			RoundingType: 'HalfHeightRadius';
		};
		ResourceObject?: Texture2D__type;
		UVRegion: {
			Min: xy__type;
			Max: xy__type;
			bIsValid: boolean__type;
		};
	};
	mSmallSchematicIcon: Texture2D__type;
	mSchematicDependencies: [
		...{
			Class: Exclude<string, ''>;
		}[],
	];
	mDependenciesBlocksSchematicAccess: boolean__type;
	mHiddenUntilDependenciesMet: boolean__type;
	mRelevantEvents: mEventType__optional_csv__type;
	mIncludeInBuilds: 'IIB_PublicBuilds';
};
