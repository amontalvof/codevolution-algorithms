import { IDepA } from './idepa';
import { IDepB } from './idepb';
import { IDepC } from './idepc';
import container from './inversify.config';
import { TYPES } from './types';

let a = container.get<IDepA>(TYPES.IDepA);
a.doA();

console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[46m',
    '************************************',
    '\x1b[0m'
);

let b = container.get<IDepB>(TYPES.IDepB);
b.doB();

console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[46m',
    '************************************',
    '\x1b[0m'
);

let c = container.get<IDepC>(TYPES.IDepC);
c.doC();
