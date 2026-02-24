import type {
	SupportedLang,
} from '../../Utf16leJsonHandler.ts';

const SupportedLang: SupportedLang[] = [
	'en-US',
	'sv',
];

function is_supported(maybe: string): maybe is SupportedLang {
	return (SupportedLang as string[]).includes(maybe);
}

export {
	is_supported,
};
