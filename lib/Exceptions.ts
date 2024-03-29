abstract class UnsuccessfulMatchException<
	T = unknown,
> extends Error {
	readonly property: T;

	constructor(
		property: T,
		message = 'Could not match property to type generation!'
	) {
		super(message);
		this.property = property;
	}
}

export class NoMatchError<
	T = unknown,
> extends UnsuccessfulMatchException<T> {}

export class UnexpectedlyUnknown extends NoMatchError {}

export class FragileTypeSafetyError extends UnexpectedlyUnknown
{
	constructor(property: unknown) {
		super(
			property,
			'type safety in here is a bit fragile, check earlier in the stack'
		);
	}
}
