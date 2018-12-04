/**
 *  Represents a single trait a {@link User} has
 */
export class Attribute {
    /**
     * The constructor
     * @param text The name of the Attribute
     * @param active whether the Attribute is active or not
     */
    constructor(public text: string, public active: boolean) {}
}
