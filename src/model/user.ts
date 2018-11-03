import { Attribute } from './attribute';

import * as libmoji from 'libmoji';
export class User {
    public AvatarLink: string;
    public AvatarLinkHead: string;
    public AvatarLinkFashion: string;

    constructor(public FirstName: string, public LastName: string, public Attributes: Array<Attribute> = new Array<Attribute>()) {

        const gender = libmoji.genders[libmoji.randInt(2)];
        const style = libmoji.styles[libmoji.randInt(3)];
        const traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
        const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));

        this.AvatarLink = libmoji.buildPreviewUrl('body', 3, gender[1], style[1], 0, traits, outfit);
        this.AvatarLinkHead = libmoji.buildPreviewUrl('head', 3, gender[1], style[1], 0, traits, outfit);
        this.AvatarLinkFashion = libmoji.buildPreviewUrl('fashion', 3, gender[1], style[1], 0, traits, outfit);
    }
}
