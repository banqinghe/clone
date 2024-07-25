import { expect, describe, it } from 'vitest';
import { clone } from '../src/index';

describe('function clone', () => {
    describe('param data', () => {
        it('normal', () => {
            // primative
            expect(clone('abc')).to.equal('abc');
            // array
            const arr = [1, [2]];
            const cloneArr = clone(arr);
            expect(arr).not.to.equal(cloneArr);
            expect(arr).to.eql(cloneArr);
            // object
            const obj = { a: 1, b: { c: 2 } };
            const cloneObj = clone(obj);
            expect(obj).not.to.equal(cloneObj);
            expect(obj).to.eql(cloneObj);
        });

        it('boundary', () => {
            expect(clone()).to.equal(undefined);
            expect(clone(null)).to.equal(null);
            expect(clone(undefined)).to.equal(undefined);
            expect(clone(NaN)).to.be.NaN;
        });

        it('prototype', () => {
            const parent = { a: 1 };
            const child = Object.create(parent);
            child.b = 2;
            const cloneChild = clone(child);
            // expect(Object.getPrototypeOf(cloneChild)).to.equal(parent);
            expect(cloneChild).to.eql({ b: 2 });
        });
    });
});
