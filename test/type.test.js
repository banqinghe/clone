import { expect, describe, it } from 'vitest';
import type from '../src/type';

describe('type', () => {
    it('primitive', () => {
        expect(type(1)).to.equal('number');
        expect(type('1')).to.equal('string');
        expect(type(true)).to.equal('boolean');
        expect(type(null)).to.equal('null');
        expect(type(undefined)).to.equal('undefined');
        expect(type(Symbol())).to.equal('symbol');
    });

    it('object', () => {
        expect(type({})).to.equal('object');
        expect(type([])).to.equal('array');
        expect(type(/a/)).to.equal('regexp');
        expect(type(Math)).to.equal('math');
    });

    it('wrapper objects for primitive values', () => {
        expect(type(new Number(1))).to.equal('Number');
        expect(type(new String('1'))).to.equal('String');
        expect(type(new Boolean(true))).to.equal('Boolean');
    });

    it('custom class', () => {
        class CustomClass {}
        expect(type(new CustomClass())).to.equal('CustomClass');
    });

    it('prototype is null', () => {
        const obj = Object.create(null);
        expect(type(obj)).to.equal('unknown');
    });
});
