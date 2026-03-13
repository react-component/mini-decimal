import type { ValueType } from './interface';
import { supportBigInt } from './supportUtil';

export function isEmpty(value: ValueType) {
  return (
    (!value && value !== 0 && !Number.isNaN(value)) || !String(value).trim()
  );
}

/**
 * Format string number to readable number
 */
export function trimNumber(numStr: string) {
  let str = numStr.trim();

  let negative = str.startsWith('-');

  if (negative) {
    str = str.slice(1);
  }

  str = str
    // Remove decimal 0. `1.000` => `1.`, `1.100` => `1.1`
    .replace(/(\.\d*[^0])0*$/, '$1')
    // Remove useless decimal. `1.` => `1`
    .replace(/\.0*$/, '')
    // Remove integer 0. `0001` => `1`, 000.1' => `.1`
    .replace(/^0+/, '');

  if (str.startsWith('.')) {
    str = `0${str}`;
  }

  const trimStr = str || '0';
  const splitNumber = trimStr.split('.');

  const integerStr = splitNumber[0] || '0';
  const decimalStr = splitNumber[1] || '0';

  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }

  const negativeStr = negative ? '-' : '';

  return {
    negative,
    negativeStr,
    trimStr,
    integerStr,
    decimalStr,
    fullStr: `${negativeStr}${trimStr}`,
  };
}

export function isE(number: string | number) {
  const str = String(number);

  return !Number.isNaN(Number(str)) && str.includes('e');
}

function expandScientificNotation(numStr: string) {
  const [mantissa, exponent] = numStr.toLowerCase().split('e');
  const exp = Number(exponent);
  const negative = mantissa.startsWith('-');
  const unsignedMantissa = negative ? mantissa.slice(1) : mantissa;
  const [integer = '0', decimal = ''] = unsignedMantissa.split('.');
  const digits = `${integer}${decimal}`.replace(/^0+/, '') || '0';
  const decimalIndex = integer.length + exp;

  let expanded = '';

  if (decimalIndex <= 0) {
    expanded = `0.${'0'.repeat(-decimalIndex)}${digits}`;
  } else if (decimalIndex >= digits.length) {
    expanded = `${digits}${'0'.repeat(decimalIndex - digits.length)}`;
  } else {
    expanded = `${digits.slice(0, decimalIndex)}.${digits.slice(decimalIndex)}`;
  }

  return `${negative ? '-' : ''}${expanded}`;
}

/**
 * [Legacy] Convert 1e-9 to 0.000000001.
 * This may lose some precision if user really want 1e-9.
 */
export function getNumberPrecision(number: string | number) {
  const numStr: string = String(number);

  if (isE(number)) {
    const [mantissa, exponent = '0'] = numStr.toLowerCase().split('e');
    const decimalMatch = mantissa.match(/\.(\d+)/);
    const decimalLength = decimalMatch?.[1]?.length || 0;
    const exp = Number(exponent);

    if (exp >= 0) {
      return Math.max(0, decimalLength - exp);
    }

    return Math.abs(exp) + decimalLength;
  }

  return numStr.includes('.') && validateNumber(numStr)
    ? numStr.length - numStr.indexOf('.') - 1
    : 0;
}

/**
 * Convert number (includes scientific notation) to -xxx.yyy format
 */
export function num2str(number: number): string {
  let numStr: string = String(number);
  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(
        supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER,
      );
    }

    if (number < Number.MIN_SAFE_INTEGER) {
      return String(
        supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER,
      );
    }

    const precision = getNumberPrecision(numStr);

    numStr =
      precision > 100
        ? expandScientificNotation(numStr)
        : number.toFixed(precision);
  }

  return trimNumber(numStr).fullStr;
}

export function validateNumber(num: string | number) {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  }

  // Empty
  if (!num) {
    return false;
  }

  return (
    // Normal type: 11.28
    /^\s*-?\d+(\.\d+)?\s*$/.test(num) ||
    // Pre-number: 1.
    /^\s*-?\d+\.\s*$/.test(num) ||
    // Post-number: .1
    /^\s*-?\.\d+\s*$/.test(num)
  );
}
