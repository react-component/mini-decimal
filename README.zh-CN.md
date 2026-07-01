<div align="center">
  <h1>@rc-component/mini-decimal</h1>
  <p><sub><a href="https://ant.design"><img alt="Ant Design" height="14" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" style="vertical-align: -0.125em;" /></a> Ant Design 生态的一部分。</sub></p>
  <p>🧮 用于精确字符串小数运算的轻量计算工具。</p>

  <p>
    <a href="https://npmjs.org/package/@rc-component/mini-decimal"><img alt="NPM version" src="https://img.shields.io/npm/v/@rc-component/mini-decimal.svg?style=flat-square"></a>
    <a href="https://npmjs.org/package/@rc-component/mini-decimal"><img alt="npm downloads" src="https://img.shields.io/npm/dm/@rc-component/mini-decimal.svg?style=flat-square"></a>
    <a href="https://github.com/react-component/mini-decimal/actions/workflows/test.yml"><img alt="build status" src="https://github.com/react-component/mini-decimal/actions/workflows/test.yml/badge.svg"></a>
    <a href="https://app.codecov.io/gh/react-component/mini-decimal"><img alt="Codecov" src="https://img.shields.io/codecov/c/github/react-component/mini-decimal/master.svg?style=flat-square"></a>
    <a href="https://bundlephobia.com/package/@rc-component/mini-decimal"><img alt="bundle size" src="https://img.shields.io/bundlephobia/minzip/@rc-component/mini-decimal?style=flat-square"></a>
    <a href="https://github.com/umijs/dumi"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue?style=flat-square"></a>
  </p>
</div>

<p align="center"><a href="./README.md">English</a> | 简体中文</p>

## 亮点

| 方向 | 支持                                   |
| ---- | -------------------------------------- |
| 定位 | 用于精确字符串小数运算的轻量计算工具。 |
| 包名 | `@rc-component/mini-decimal`           |
| 发布 | `@rc-component/np` / `rc-np`           |

## 安装

```bash
npm install @rc-component/mini-decimal
```

## 用法

```tsx | pure
import getMiniDecimal from '@rc-component/mini-decimal';

getMiniDecimal('0.1').add('0.2').toString(); // 0.3
getMiniDecimal('0.1').multi('0.2').toString(); // 0.02
```

## API

| 名称                | 说明               |
| ------------------- | ------------------ |
| `add(value)`        | 加上另一个小数值。 |
| `multi(value)`      | 乘以另一个小数值。 |
| `negate()`          | 返回相反数。       |
| `equal(value)`      | 判断是否相等。     |
| `lessEquals(value)` | 判断当前值是否小于或等于另一个小数值。 |

## 本地开发

```bash
npm install
npm test
npm run lint
npm run tsc
npm run compile
```

本地 dumi 站点默认运行在 `http://localhost:8000`.

## 发布

```bash
npm run prepublishOnly
```

发布流程通过 `@rc-component/np` 提供的 `rc-np` 命令处理。

## 许可证

@rc-component/mini-decimal 基于 [MIT](./LICENSE) 协议发布。
