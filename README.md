# Shuffle Array (Deno)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/shuffle-array-deno?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/shuffle-array-deno)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/shuffle-array-deno) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/shuffle-array-deno?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/shuffle-array-deno/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/shuffle-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |

A Deno module to shuffle the array's indexes.

> **🔗 Other Edition:**
>
> - [NodeJS](https://github.com/hugoalh-studio/shuffle-array-nodejs)

## 🎯 Target

- Deno >= v1.34.0

## 📥 Use

### Import

- **Named Import:** ✔️
- **Default Import:** Function `shuffleArray`
- **Namespace Import:** ✔️
- **Side Effect Import:** ❌

### From

- **[Deno Land](https://deno.land/x/shuffle_array):**
  ```
  https://deno.land/x/shuffle_array[@<Tag>]/mod.ts
  ```
- **DenoPKG:**
  ```
  https://denopkg.com/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts
  ```
- **GitHub Raw: *\[Require Tag\]***
  ```
  https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-deno/<Tag>/mod.ts
  ```
- **Pax:**
  ```
  https://pax.deno.dev/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts
  ```

## API

- ```ts
  function shuffleArray<T>(item: T[]): T[];
  ```

## Example

- ```ts
  const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];
  
  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]
  
  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```
