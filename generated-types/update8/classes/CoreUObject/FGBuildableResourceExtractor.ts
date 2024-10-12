import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	FGBuildableResourceExtractor__miner_mk3__type,
	None__type,
} from '../../common/unassigned';

import {boolean__type} from '../../common/scalar';

import {FGBuildable__extractor_base__type} from './FGBuildable';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGBuildableResourceExtractor__miner__type =
	FGBuildableResourceExtractor__miner__base__type;

export type FGBuildableResourceExtractor__miner__base__type =
	FGBuildable__extractor_base__type & {
		mParticleMap: [
			{
				ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3:
					| '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C'
					| '/Game/FactoryGame/Resource/RawResources/Stone/Desc_Stone.Desc_Stone_C'
					| '/Game/FactoryGame/Resource/RawResources/OreIron/Desc_OreIron.Desc_OreIron_C'
					| '/Game/FactoryGame/Resource/RawResources/OreBauxite/Desc_OreBauxite.Desc_OreBauxite_C'
					| '/Game/FactoryGame/Resource/RawResources/OreCopper/Desc_OreCopper.Desc_OreCopper_C'
					| '/Game/FactoryGame/Resource/RawResources/CrudeOil/Desc_LiquidOil.Desc_LiquidOil_C'
					| '/Game/FactoryGame/Resource/RawResources/OreGold/Desc_OreGold.Desc_OreGold_C'
					| '/Game/FactoryGame/Resource/RawResources/RawQuartz/Desc_RawQuartz.Desc_RawQuartz_C'
					| '/Game/FactoryGame/Resource/RawResources/Sulfur/Desc_Sulfur.Desc_Sulfur_C'
					| '/Game/FactoryGame/Resource/RawResources/OreUranium/Desc_OreUranium.Desc_OreUranium_C';
				ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: UnrealEngineString<
					'/Script/Engine.ParticleSystem',
					StringStartsWith<
						| '/Game/FactoryGame/VFX/Factory/'
						| '/Game/FactoryGame/Buildable/Factory/'
					>
				>;
			},
			...{
				ResourceNode_16_2100B5C34EE8DF7958D78A974512F3C3:
					| '/Game/FactoryGame/Resource/RawResources/Coal/Desc_Coal.Desc_Coal_C'
					| '/Game/FactoryGame/Resource/RawResources/Stone/Desc_Stone.Desc_Stone_C'
					| '/Game/FactoryGame/Resource/RawResources/OreIron/Desc_OreIron.Desc_OreIron_C'
					| '/Game/FactoryGame/Resource/RawResources/OreBauxite/Desc_OreBauxite.Desc_OreBauxite_C'
					| '/Game/FactoryGame/Resource/RawResources/OreCopper/Desc_OreCopper.Desc_OreCopper_C'
					| '/Game/FactoryGame/Resource/RawResources/CrudeOil/Desc_LiquidOil.Desc_LiquidOil_C'
					| '/Game/FactoryGame/Resource/RawResources/OreGold/Desc_OreGold.Desc_OreGold_C'
					| '/Game/FactoryGame/Resource/RawResources/RawQuartz/Desc_RawQuartz.Desc_RawQuartz_C'
					| '/Game/FactoryGame/Resource/RawResources/Sulfur/Desc_Sulfur.Desc_Sulfur_C'
					| '/Game/FactoryGame/Resource/RawResources/OreUranium/Desc_OreUranium.Desc_OreUranium_C';
				ParticleSystem1_9_F0CF81514E1E1C5007AC99B0C59C63CD: UnrealEngineString<
					'/Script/Engine.ParticleSystem',
					StringStartsWith<
						| '/Game/FactoryGame/VFX/Factory/'
						| '/Game/FactoryGame/Buildable/Factory/'
					>
				>;
			}[],
		];
		mCanPlayAfterStartUpStopped?: boolean__type;
		CanPlayAfterStartUpStopped?: boolean__type;
		mAllowedResourceForms?: ['RF_SOLID', ...'RF_SOLID'[]];
		mExtractorTypeName?: 'Miner';
		mAllowedResources: '';
	};

export type FGBuildableResourceExtractor__oil_extractor__type =
	FGBuildable__extractor_base__type & {
		mAllowedResourceForms: ['RF_LIQUID', ...'RF_LIQUID'[]];
		mAllowedResources: [
			UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				'/Game/FactoryGame/Resource/RawResources/CrudeOil/Desc_LiquidOil.Desc_LiquidOil_C'
			>,
			...UnrealEngineString<
				'/Script/Engine.BlueprintGeneratedClass',
				'/Game/FactoryGame/Resource/RawResources/CrudeOil/Desc_LiquidOil.Desc_LiquidOil_C'
			>[],
		];
		mExtractorTypeName: None__type;
	};

export type FGBuildableResourceExtractor__NativeClass =
	NativeClass__type & {
		Classes: [
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
			(
				| FGBuildableResourceExtractor__oil_extractor__type
				| FGBuildableResourceExtractor__miner_mk3__type
				| FGBuildableResourceExtractor__miner__type
			),
		];
	};
