import type {
	SupportedLang,
} from '../../Utf16leJsonHandler.ts';

function is_supported(maybe: string): maybe is 'en-US' & SupportedLang {
	return maybe === 'en-US';
}

export {
	is_supported,
};
