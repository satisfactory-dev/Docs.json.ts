import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {integer_string__type, boolean__type} from '../../common/scalar';

import {empty_object__type, ItemClass__type} from '../../common/unassigned';

import {decimal_string__type} from '../../../common/common/scalar';

import {class__no_description_or_display_name__type} from '../../../common/common/unassigned';

export type FGEquipment__base__type =
	class__no_description_or_display_name__type & {
		mRandomAnim?: integer_string__type;
		mCanPress?: boolean__type;
		mAnimData?: [
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
			{
				Montage_7_2E66F6A948A8606E71185682EA2AC4EC: UnrealEngineString<
					'/Script/Engine.AnimMontage',
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_01_Montage.MedkitUse_01_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_02_Montage.MedkitUse_02_Montage'
					| '/Game/FactoryGame/Character/Player/Animation/FirstPerson/MedkitUse_03_Montage.MedkitUse_03_Montage'
				>;
				CameraAnimationSequence_11_920C446448786C507704569A05006500: UnrealEngineString<
					'/Script/TemplateSequence.CameraAnimationSequence',
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_01_CameraAnimSequence.MedkitUse_01_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_02_CameraAnimSequence.MedkitUse_02_CameraAnimSequence'
					| '/Game/FactoryGame/Character/Player/CameraShake/MedkitUse_03_CameraAnimSequence.MedkitUse_03_CameraAnimSequence'
				>;
			},
		];
		mCurrentAnimData?: empty_object__type;
		mEquipmentSlot: 'ES_ARMS' | 'ES_BACK' | 'ES_BODY' | 'ES_HEAD' | 'ES_LEGS';
		mAttachSocket:
			| 'hand_lSocket'
			| 'hand_rSocket'
			| 'root'
			| 'None'
			| 'helmetSocket'
			| 'jumpingStilt_lSocket'
			| 'backpack';
		mComponentNameToFirstPersonMaterials:
			| empty_object__type
			| [
					[
						(
							| 'PortableMiner'
							| 'Chainsaw_skl'
							| 'NobeliskDetonator_Skl_01'
							| 'RebarGun_skl'
							| 'Rifle'
							| 'ScannerSkeletalMesh'
							| 'ShockShank_skl'
							| 'SK_1pHoverPack_01'
							| 'SK_Medkit'
							| 'SK_JumpingStiltLeft_02'
							| 'SkeletalMesh'
							| 'SM_Gasmask_01'
							| 'SM_GolfcartEquipment_01'
							| 'StunSpear_skl'
						),
						{
							FirstPersonMaterials: [
								UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>,
								...UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>[],
							];
						},
					],
					...[
						(
							| 'PortableMiner'
							| 'Chainsaw_skl'
							| 'NobeliskDetonator_Skl_01'
							| 'RebarGun_skl'
							| 'Rifle'
							| 'ScannerSkeletalMesh'
							| 'ShockShank_skl'
							| 'SK_1pHoverPack_01'
							| 'SK_Medkit'
							| 'SK_JumpingStiltLeft_02'
							| 'SkeletalMesh'
							| 'SM_Gasmask_01'
							| 'SM_GolfcartEquipment_01'
							| 'StunSpear_skl'
						),
						{
							FirstPersonMaterials: [
								UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>,
								...UnrealEngineString<
									'/Script/Engine.MaterialInstanceConstant',
									StringStartsWith<'/Game/FactoryGame/'>
								>[],
							];
						},
					][],
			];
		mNeedsDefaultEquipmentMappingContext: boolean__type;
		mCostToUse: '' | ItemClass__type;
		mArmAnimation:
			| 'AE_ShockShank'
			| 'AE_StunSpear'
			| 'AE_Generic2Hand'
			| 'AE_Generic1Hand'
			| 'AE_None'
			| 'AE_ChainSaw'
			| 'AE_RebarGun'
			| 'AE_Rifle'
			| 'AE_Nobelisk';
		mBackAnimation: 'BE_None' | 'BE_Jetpack';
		mDefaultEquipmentActions: integer_string__type;
		mReceivedDamageModifiers: '';
		mSwappedOutThirdPersonMaterials: empty_object__type;
		mHasStingerMontage: boolean__type;
		mMontageBlendOutTime: decimal_string__type;
		mEquipmentLookAtDescOverride: string;
	};

export type FGEquipment__placeable__type = FGEquipment__base__type & {
	mAllowedResourceForms: ['RF_SOLID', ...'RF_SOLID'[]];
};
