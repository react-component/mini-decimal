<div align="center">
  <h1>@rc-component/mini-decimal</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Part of the Ant Design ecosystem.</sub></p>
  <p>🧮 Small decimal calculator for precise string-based arithmetic.</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/mini-decimal"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/mini-decimal.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/mini-decimal"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/mini-decimal.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/mini-decimal/actions/workflows/test.yml"><img alt="build status" src="https://github.com/react-component/mini-decimal/actions/workflows/test.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/mini-decimal"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/mini-decimal/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/mini-decimal"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/mini-decimal?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center">English | <a href="./README.zh-CN.md">简体中文</a></p>

## Highlights

| Area    | Support                                                       |
| ------- | ------------------------------------------------------------- |
| Purpose | Small decimal calculator for precise string-based arithmetic. |
| Package | `@rc-component/mini-decimal`                                  |
| Release | `@rc-component/np` / `rc-np`                                  |

## Install

```bash
npm install @rc-component/mini-decimal
```

## Usage

```tsx | pure
import getMiniDecimal from '@rc-component/mini-decimal';

getMiniDecimal('0.1').add('0.2').toString(); // 0.3
getMiniDecimal('0.1').multi('0.2').toString(); // 0.02
```

## API

| Method              | Description                        |
| ------------------- | ---------------------------------- |
| `add(value)`        | Add another decimal value.         |
| `multi(value)`      | Multiply by another decimal value. |
| `negate()`          | Return the negated value.          |
| `equal(value)`      | Check equality.                    |
| `lessEquals(value)` | Check whether the current value is less than or equal to another decimal value. |

## Development

```bash
npm install
npm test
npm run lint
npm run tsc
npm run compile
```

The dumi site runs at `http://localhost:8000`.

## Release

```bash
npm run prepublishOnly
```

The release flow is handled by `@rc-component/np` through the `rc-np` command when the package uses the shared release flow.

## License

@rc-component/mini-decimal is released under the [MIT](./LICENSE) license.
