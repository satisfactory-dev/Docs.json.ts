import {StringPassedRegExp} from '../utils/validators';

export type decimal_string__type = StringPassedRegExp<'^\\d+\\.\\d{6}$'>;

export type decimal_string__signed__type =
	StringPassedRegExp<'^-?\\d+\\.\\d{6}$'>;

export type integer_string__type = StringPassedRegExp<'^\\d+$'>;

export type integer_string__signed__type = StringPassedRegExp<'^-?\\d+$'>;
