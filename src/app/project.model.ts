export class Project {
	amount: number = 0;
	constructor(public name: string, public creator: string, public type: string, public descShort: string, public descLong: string, public goal: number, public reward: string) {}
}
