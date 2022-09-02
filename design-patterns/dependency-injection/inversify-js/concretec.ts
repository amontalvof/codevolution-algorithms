import { inject, injectable } from 'inversify';
import { IDepA } from './idepa';
import { IDepB } from './idepb';
import { IDepC } from './idepc';
import { TYPES } from './types';

@injectable()
export class ConcreteC implements IDepC {
    constructor(
        @inject(TYPES.IDepA)
        private _concreteA: IDepA,
        @inject(TYPES.IDepB)
        private _concreteB: IDepB
    ) {}

    doC(): void {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log('Doing C');
    }
}
