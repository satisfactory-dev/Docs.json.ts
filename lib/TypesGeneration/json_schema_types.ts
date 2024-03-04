export type integer__string = {'$ref': '#/definitions/integer-string'};
export type decimal__string = {'$ref': '#/definitions/decimal-string'};

export type RGBA = {
	properties: {
		R: integer__string,
		G: integer__string,
		B: integer__string,
		A: integer__string
	}|{
		R: decimal__string,
		G: decimal__string,
		B: decimal__string,
		A: decimal__string
	}
};
