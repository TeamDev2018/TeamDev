import { Attribute } from './attribute';
export class User {
    constructor(public FirstName: string, public LastName: string, public Attributes: Array<Attribute> = new Array<Attribute>(), public image?: string) {}
}
