# Shuffle Array (Deno)

[⚖️ MIT](./LICENSE.md)
[![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/hugoalh-studio/shuffle-array-deno?label=Grade&logo=codefactor&logoColor=ffffff&style=flat-square "CodeFactor Grade")](https://www.codefactor.io/repository/github/hugoalh-studio/shuffle-array-deno)

|  | **Heat** | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/shuffle-array-deno) | [![GitHub Stars](https://img.shields.io/github/stars/hugoalh-studio/shuffle-array-deno?label=&logoColor=ffffff&style=flat-square "GitHub Stars")](https://github.com/hugoalh-studio/shuffle-array-deno/stargazers) \| ![GitHub Total Downloads](https://img.shields.io/github/downloads/hugoalh-studio/shuffle-array-deno/total?label=&style=flat-square "GitHub Total Downloads") | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-deno?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/shuffle-array-deno?label=&style=flat-square "GitHub Latest Pre-Release Date")) |

A Deno module to shuffle the array's indexes.

## 🔰 Begin

### Deno

- **Target Version:** >= v1.34.0
- **Require Permission:** *N/A*
- **Domain/Registry:**
  - [Deno Land](https://deno.land/x/shuffle_array)
    ```ts
    import ... from "https://deno.land/x/shuffle_array[@<Tag>]/mod.ts";
    ```
  - DenoPKG
    ```ts
    import ... from "https://denopkg.com/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";
    ```
  - GitHub Raw *\[Require Tag\]*
    ```ts
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-deno/<Tag>/mod.ts";
    ```
  - Pax
    ```ts
    import ... from "https://pax.deno.dev/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";
    ```

> **ℹ️ Notice:** Although it is recommended to import main module with path `mod.ts` in general, it is also able to import part of the module with sub path if available, but do not import if:
>
> - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
> - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
> - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
> These elements are not considered part of the public API, thus no stability is guaranteed for them.

## 🧩 API

- ```ts
  function shuffleArray<T>(item: T[]): T[];
  ```

> **ℹ️ Notice:** Documentation is included inside the script file, can view it via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [Deno Doc Land](https://doc.deno.land)

## ✍️ Example

- ```ts
  import { shuffleArray } from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-deno/main/mod.ts";
  const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```

## 🔗 Other Edition

- [NodeJS](https://github.com/hugoalh-studio/shuffle-array-nodejs)
