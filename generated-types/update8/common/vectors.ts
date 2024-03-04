import {
	decimal_string,
	decimal_string__signed,
	integer_string,
} from '../utils/validators';

export class xyz {
	public X: number;
	public Y: number;
	public Z: number;
	public constructor(X: string, Y: string, Z: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
		this.Z = parseFloat(decimal_string__signed(Z, `Argument ${2}`));
	}
}

export class xyz__semi_native {
	public X: number;
	public Y: number;
	public Z: number;
	public constructor(X: string, Y: string, Z: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
		this.Z = parseFloat(decimal_string__signed(Z, `Argument ${2}`));
	}
}

export class xy {
	public X: number;
	public Y: number;
	public constructor(X: string, Y: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
	}
}

export class xy__integer {
	public X: number;
	public Y: number;
	public constructor(X: string, Y: string) {
		this.X = parseInt(integer_string(X, `Argument ${0}`), 10);
		this.Y = parseInt(integer_string(Y, `Argument ${1}`), 10);
	}
}

export class xy__semi_native {
	public X: number;
	public Y: number;
	public constructor(X: string, Y: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
	}
}

export class quaternion {
	public X: number;
	public Y: number;
	public Z: number;
	public W: number;
	public constructor(X: string, Y: string, Z: string, W: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
		this.Z = parseFloat(decimal_string__signed(Z, `Argument ${2}`));
		this.W = parseFloat(decimal_string(W, `Argument ${3}`));
	}
}

export class quaternion__semi_native {
	public X: number;
	public Y: number;
	public Z: number;
	public W: number;
	public constructor(X: string, Y: string, Z: string, W: string) {
		this.X = parseFloat(decimal_string__signed(X, `Argument ${0}`));
		this.Y = parseFloat(decimal_string__signed(Y, `Argument ${1}`));
		this.Z = parseFloat(decimal_string__signed(Z, `Argument ${2}`));
		this.W = parseFloat(decimal_string(W, `Argument ${3}`));
	}
}

export class xyz__integer {
	public X: number;
	public Y: number;
	public Z: number;
	public constructor(X: string, Y: string, Z: string) {
		this.X = parseInt(integer_string(X, `Argument ${0}`), 10);
		this.Y = parseInt(integer_string(Y, `Argument ${1}`), 10);
		this.Z = parseInt(integer_string(Z, `Argument ${2}`), 10);
	}
}
