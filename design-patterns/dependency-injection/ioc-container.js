"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IoCContainer = void 0;
class IoCContainer {
    constructor() {
        this._dependencies = {};
        if (IoCContainer._instance) {
            throw new Error('Singleton class. Cannot instantiate using new');
        }
        IoCContainer._instance = this;
    }
    static get instance() {
        return IoCContainer._instance;
    }
    register(name, dependencies, implementation) {
        if (this._dependencies[name]) {
            throw new Error('Dependency already registered');
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }
    resolve(name) {
        if (!this._dependencies[name]) {
            throw new Error(`Unresolved dependency ${name}`);
        }
        return this._dependencies[name];
    }
    getDependenciesImplementations(names) {
        return names.map((name) => this.resolve(name));
    }
}
exports.IoCContainer = IoCContainer;
IoCContainer._instance = new IoCContainer();
