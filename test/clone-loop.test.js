import { expect, describe, it } from 'vitest';
import cloneLoop from '../src/clone-loop';

describe('function clone', () => {
    describe('param data', () => {
        it('normal', () => {
            // primitive
            expect(cloneLoop('abc')).to.equal('abc');
            // array
            const arr = [1, [2]];
            const cloneArr = cloneLoop(arr);
            expect(arr).not.to.equal(cloneArr);
            expect(arr).to.deep.equal(cloneArr);
            // object
            const obj = { a: 1, b: { c: 2 } };
            const cloneObj = cloneLoop(obj);
            expect(obj).not.to.equal(cloneObj);
            expect(obj).to.deep.equal(cloneObj);
        });

        it('boundary', () => {
            expect(cloneLoop()).to.equal(undefined);
            expect(cloneLoop(null)).to.equal(null);
            expect(cloneLoop(undefined)).to.equal(undefined);
            expect(cloneLoop(NaN)).to.be.NaN;
        });

        it('prototype', () => {
            const parent = { a: 1 };
            const child = Object.create(parent);
            child.b = 2;
            const cloneChild = cloneLoop(child);
            expect(cloneChild).to.deep.equal({ b: 2 });
        });
    });
});
