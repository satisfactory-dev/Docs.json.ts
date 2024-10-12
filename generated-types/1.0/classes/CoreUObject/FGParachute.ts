import {UnrealEngineString, StringStartsWith} from '../../utils/validators';

import {boolean__type} from '../../common/scalar';

import {
	FilterMontageTag__type,
	Montage_1P__type,
	Montage_3P__type,
	CameraAnim__type,
	empty_object__type,
} from '../../common/unassigned';

import {FGEquipment__base__type} from './FGEquipment';

import {decimal_string__type} from '../../../common/common/scalar';

import {NativeClass__type} from '../../../common/common/unassigned';

export type FGParachute__type = FGEquipment__base__type & {
	DeployedVFXComponents: '';
	mParachuteDeployMontageList: {
		Montages: [
			(
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
			),
			(
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
			),
			(
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						Exclusive: boolean__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
				| {
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
						CameraAnim: CameraAnim__type;
				}
			),
		];
	};
	mParachuteDetachMontageList: {
		Montages: [
			(
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						InvertFilter: boolean__type;
						Exclusive: boolean__type;
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
				}
				| {
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
				}
			),
			(
				| {
						Filter: boolean__type;
						FilterMontageTag: FilterMontageTag__type;
						InvertFilter: boolean__type;
						Exclusive: boolean__type;
						Montage_1P: Montage_1P__type;
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
				}
				| {
						Montage_3P: Montage_3P__type;
						AudioEvent: FGParachute__AudioEvent__type;
				}
			),
		];
	};
	mUseDistanceOverride: decimal_string__type;
	mIsDeployed: boolean__type;
	mEquipMontage?: empty_object__type;
	mStingerMontage?: empty_object__type;
	mUnEquipMontage?: empty_object__type;
};

export type FGParachute__AudioEvent__type = UnrealEngineString<
	'/Script/AkAudio.AkAudioEvent',
	StringStartsWith<'/Game/WwiseAudio/Events/Equipment/Parachute/'>
>;

export type FGParachute__NativeClass = NativeClass__type & {
	Classes: [FGParachute__type];
};
