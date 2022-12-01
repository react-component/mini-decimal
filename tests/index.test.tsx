import getMiniDecimal from '../src/MiniDecimal';
import type { DecimalClass, ValueType } from '../src/MiniDecimal';

jest.mock('../src/supportUtil');
const { supportBigInt } = require('../src/supportUtil');

describe('MiniDecimal', () => {
  function testSuite() {
    it('empty', () => {
      const num = getMiniDecimal('');
      expect(num.isEmpty()).toBeTruthy();
    });

    it('NaN', () => {
      const nan = getMiniDecimal(NaN);
      expect(nan.isNaN()).toBeTruthy();
      expect(nan.toNumber()).toBeNaN();
    });

    it('negate', () => {
      const num = getMiniDecimal('-9.3');
      expect(num.negate().toString()).toEqual('9.3');
      expect(num.negate().negate().toString()).toEqual('-9.3');
    });

    it('equals', () => {
      expect(
        getMiniDecimal('-9.3').equals(getMiniDecimal('-9.3')),
      ).toBeTruthy();
      expect(getMiniDecimal('9.3').equals(getMiniDecimal('-9.3'))).toBeFalsy();
    });

    it('lessEquals', () => {
      expect(
        getMiniDecimal('-2').lessEquals(getMiniDecimal('-1')),
      ).toBeTruthy();
      expect(getMiniDecimal('2').equals(getMiniDecimal('1'))).toBeFalsy();
    });

    describe('add', () => {
      it('basic', () => {
        let num = getMiniDecimal('11.28');
        num = num.add('-9.3');
        expect(num.toString()).toEqual('1.98');

        num = num.add('10.02');
        expect(num.toString()).toEqual('12');
      });

      it('invalidate src', () => {
        const invalidateNum = getMiniDecimal(NaN);
        expect(invalidateNum.isInvalidate()).toBeTruthy();
        expect(invalidateNum.add('1').toString()).toEqual('1');
      });

      it('invalidate tgt', () => {
        expect(getMiniDecimal('233').add(NaN).toString()).toEqual('233');
      });
    });
  }

  // ==========================================================
  describe('BigIntDecimal', () => {
    beforeEach(() => {
      supportBigInt.mockImplementation(() => {
        return true;
      });
    });

    afterEach(() => {
      supportBigInt.mockRestore();
    });

    testSuite();
  });

  describe('NumberDecimal', () => {
    beforeEach(() => {
      supportBigInt.mockImplementation(() => {
        return false;
      });
    });

    afterEach(() => {
      supportBigInt.mockRestore();
    });

    testSuite();

    it('max safe integer', () => {
      expect(
        getMiniDecimal(Number.MAX_SAFE_INTEGER).add(Number.MAX_SAFE_INTEGER).toNumber(),
      ).toEqual(Number.MAX_SAFE_INTEGER);
    });

    it('min safe integer', () => {
      expect(
        getMiniDecimal(Number.MIN_SAFE_INTEGER).add(Number.MIN_SAFE_INTEGER).toNumber(),
      ).toEqual(Number.MIN_SAFE_INTEGER);
    });
  });
});
