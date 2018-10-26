import { Attribute } from '../model/attribute';
import { User } from '../model/user';
export const USERS = new Array<User>(
    new User('Lukas', 'Anetsberger', new Array<Attribute>(
        new Attribute('gutDrauf', false), 
        new Attribute('motivation', false),
        new Attribute('kollegial', false),
        new Attribute('treu', false),
        new Attribute('spaßvogel', false),
        new Attribute('ehrlich', false),
        new Attribute('direkt', false),
        new Attribute('schläger', false),
        new Attribute('egoist', false),
        new Attribute('hure', false),
        new Attribute('keineAhnung', false),
        new Attribute('uhnkreativ', false)
    ), 'no-photo.jpg'),
    new User('Simon', 'Berleb', new Array<Attribute>(
        new Attribute('ehrlich', false),
        new Attribute('direkt', false),
        new Attribute('schläger', false),
        new Attribute('egoist', false),
        new Attribute('hure', false),
        new Attribute('keineAhnung', false),
        new Attribute('uhnkreativ', false)
    )),
    new User('Sabrina', 'Englmeier'),
    new User('Vanessa', 'Klein'),
    new User('Martin', 'Wagner'),
    new User('Kristina', 'Raith'),
    new User('Rolf', 'Daniel'),
    new User('Uwe', 'Daniel'),
    new User('Marie', 'Klein'),
    new User('Lukas', 'Klein'),
    new User('Patrick', 'Schwarz'),
    new User('Florian', 'Bauer'),
    new User('Evi', 'Heuer'),
    new User('Franziska', 'Dietl'),
    new User('Carola', 'Vaitl')
);
