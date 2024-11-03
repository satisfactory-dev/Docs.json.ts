import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {
	boolean__type,
	integer_string__type,
	decimal_string__type,
} from '../../../common/common/scalar';

import {empty_object__type} from '../../../common/common/unassigned';

import {common_base__FGEquipment__base__type} from '../../../common/classes/CoreUObject/FGEquipment';

export type FGEquipment__base__type =
	common_base__FGEquipment__base__type & {
		mAttachSocket:
			| 'hand_lSocket'
			| 'hand_rSocket'
			| 'root'
			| 'None'
			| 'helmetSocket'
			| 'jumpingStilt_lSocket';
		mComponentNameToFirstPersonMaterials:
			| empty_object__type
			| [
					[
						(
							| '1P_PortableMiner'
							| 'Bacon_skl'
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
							| '1P_PortableMiner'
							| 'Bacon_skl'
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
		mNeedsDefaultEquipmentMappingContext?: boolean__type;
		mHasPersistentOwner: boolean__type;
		mOnlyVisibleToOwner: boolean__type;
		mDefaultEquipmentActions: integer_string__type;
		mReceivedDamageModifiers: '';
		mSwappedOutThirdPersonMaterials: empty_object__type;
	};

export type FGEquipment__placeable__type = FGEquipment__base__type & {
	mAllowedResourceForms: ['RF_SOLID', ...'RF_SOLID'[]];
	mPlaceDistanceMax: decimal_string__type;
};
