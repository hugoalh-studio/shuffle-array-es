# Shuffle Array (Deno)

![License](https://img.shields.io/static/v1?label=License&message=MIT&style=flat-square "License")
[![GitHub Repository](https://img.shields.io/badge/Repository-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub Repository")](https://github.com/hugoalh-studio/shuffle-array-deno)
[![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/shuffle-array-deno?label=Stars&logo=github&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/shuffle-array-deno/stargazers)
[![GitHub Contributors](https://img.shields.io/github/contributors/hugoalh-studio/shuffle-array-deno?label=Contributors&logo=github&logoColor=ffffff&style=flat-square "GitHub Contributors")](https://github.com/hugoalh-studio/shuffle-array-deno/graphs/contributors)
[![GitHub Issues](https://img.shields.io/github/issues-raw/hugoalh-studio/shuffle-array-deno?label=Issues&logo=github&logoColor=ffffff&style=flat-square "GitHub Issues")](https://github.com/hugoalh-studio/shuffle-array-deno/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/hugoalh-studio/shuffle-array-deno?label=Pull%20Requests&logo=github&logoColor=ffffff&style=flat-square "GitHub Pull Requests")](https://github.com/hugoalh-studio/shuffle-array-deno/pulls)
[![GitHub Discussions](https://img.shields.io/github/discussions/hugoalh-studio/shuffle-array-deno?label=Discussions&logo=github&logoColor=ffffff&style=flat-square "GitHub Discussions")](https://github.com/hugoalh-studio/shuffle-array-deno/discussions)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/shuffle-array-deno?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/shuffle-array-deno)

| **Releases** | **Latest** (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | **Pre** (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
|:-:|:-:|:-:|
| [![Deno Land](https://img.shields.io/badge/Deno%20Land-000000?logo=deno&logoColor=ffffff&style=flat-square "Deno Land")](https://deno.land/x/shuffle_array) |  |  |
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/shuffle-array-deno/releases) ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/shuffle-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") |

## 📝 Description

A Deno module to shuffle the array's indexes.

> **🔗 Other Edition:**
>
> - [NodeJS](https://github.com/hugoalh-studio/shuffle-array-nodejs)

## 📚 Documentation

### Getting Started

- Deno >= v1.34.0

```ts
import shuffleArray from "https://deno.land/x/shuffle_array/mod.ts";// Default Import
```

### API

#### Function

```ts
shuffleArray<T>(item: T[]): T[];
```

### Example

```js
let chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

shuffleArray(chain);
//=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

shuffleArray(chain);
//=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
```
