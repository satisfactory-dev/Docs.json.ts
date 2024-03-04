import { integer_string, decimal_string } from '../utils/validators';

abstract class color__base {
	public R: number;
	public G: number;
	public B: number;
	public A: number;
	protected constructor(R: number, G: number, B: number, A: number) {
		this.R = R;
		this.G = G;
		this.B = B;
		this.A = A;
	}
}

export class color extends color__base {
	public constructor(R: string, G: string, B: string, A: string) {
		super(
			parseInt(integer_string(R, `Argument ${0}`), 10),
			parseInt(integer_string(G, `Argument ${1}`), 10),
			parseInt(integer_string(B, `Argument ${2}`), 10),
			parseInt(integer_string(A, `Argument ${3}`), 10)
		);
	}
}

export class color__semi_native extends color__base {
	public constructor(R: string, G: string, B: string, A: string) {
		super(
			parseInt(integer_string(R, `Argument ${0}`), 10),
			parseInt(integer_string(G, `Argument ${1}`), 10),
			parseInt(integer_string(B, `Argument ${2}`), 10),
			parseInt(integer_string(A, `Argument ${3}`), 10)
		);
	}
}

export class color_decimal extends color__base {
	public constructor(R: string, G: string, B: string, A: string) {
		super(
			parseFloat(decimal_string(R, `Argument ${0}`)),
			parseFloat(decimal_string(G, `Argument ${1}`)),
			parseFloat(decimal_string(B, `Argument ${2}`)),
			parseFloat(decimal_string(A, `Argument ${3}`))
		);
	}
}

export class color_decimal__semi_native extends color__base {
	public constructor(R: string, G: string, B: string, A: string) {
		super(
			parseFloat(decimal_string(R, `Argument ${0}`)),
			parseFloat(decimal_string(G, `Argument ${1}`)),
			parseFloat(decimal_string(B, `Argument ${2}`)),
			parseFloat(decimal_string(A, `Argument ${3}`))
		);
	}
}
