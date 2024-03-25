export class NoMatchError extends Error
{
	public readonly value:unknown;

	constructor(value:unknown, message = 'No match found!') {
		super(message);
		this.value = value;
	}
}
