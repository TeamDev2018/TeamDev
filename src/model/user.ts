import { Attribute } from './attribute';

import * as libmoji from 'libmoji';
/**
 * Represents a single User, is retrieved and created by the {@link UserService}
 */
export class User {
    /**
     * A link to the full body image of the user.
     */
    public AvatarLink: string;

    /**
     * A link to the head image of the user.
     */

    public AvatarLinkHead: string;
    /**
     * A link to the user in the fashion pose.
     */
    public AvatarLinkFashion: string;

    /**
     * A list of the key attributes this user has.
     */
    public KeyAttributes: Array<Attribute>;

    /**
     * The constructor
     * @param FirstName The first name of the user.
     * @param LastName The given name of the user.
     * @param Attributes A list of Attributes the user has.
     */
    constructor(public FirstName: string, public LastName: string, public Attributes: Array<Attribute> = new Array<Attribute>()) {

        const gender = libmoji.genders[libmoji.randInt(2)];
        const style = libmoji.styles[libmoji.randInt(3)];
        const traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
        const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

        this.AvatarLink = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);
        this.AvatarLinkHead = libmoji.buildPreviewUrl('head', 3, gender[1], style[1], 0, traits, outfit);
        this.AvatarLinkFashion = libmoji.buildPreviewUrl('fashion', 3, gender[1], style[1], 0, traits, outfit);

        if (this.Attributes.length) {
            this.KeyAttributes = this.Attributes.splice(0, 3);
        }
    }
}
