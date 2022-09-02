import { IoCContainer, Register } from './ioc-container';

interface IDepA {
    doA(): void;
}
interface IDepB {
    doB(): void;
}
interface IDepC {
    doC(): void;
}

@Register('IDepA', [])
class ConcreteA implements IDepA {
    doA(): void {
        console.log('Doing A');
    }
}
@Register('IDepB', [])
class ConcreteB implements IDepB {
    doB(): void {
        console.log('Doing B');
    }
}
class ConcreteC implements IDepC {
    constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

    doC(): void {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log('Doing C');
    }
}

let container = IoCContainer.instance;
container.register('IDepC', ['IDepA', 'IDepB'], ConcreteC);

let a = container.resolve<IDepA>('IDepA');
a.doA();

console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[46m',
    '************************************',
    '\x1b[0m'
);

let b = container.resolve<IDepB>('IDepB');
b.doB();

console.log(
    '\x1b[0m',
    '\x1b[30m',
    '\x1b[46m',
    '************************************',
    '\x1b[0m'
);

let c = container.resolve<IDepC>('IDepC');
c.doC();
