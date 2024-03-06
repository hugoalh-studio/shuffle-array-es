# Shuffle Array (TypeScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/shuffle-array-ts](https://img.shields.io/badge/hugoalh--studio/shuffle--array--ts-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/shuffle-array-ts")](https://github.com/hugoalh-studio/shuffle-array-ts)
[![Deno Land: shuffle_array](https://img.shields.io/badge/shuffle__array-000000?logo=deno&logoColor=ffffff&style=flat "Deno Land: shuffle_array")](https://deno.land/x/shuffle_array)
[![JSR: @hugoalh/shuffle-array](https://img.shields.io/badge/JSR-@hugoalh/shuffle--array-F7DF1E?labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/shuffle-array")](https://jsr.io/@hugoalh/shuffle-array)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-ts?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-ts?color=2187C0&label=&style=flat "Latest Release Date"))

A TypeScript module to shuffle the array's indexes.

## 🎯 Target

- Bun ^ v1.0.0
- Cloudflare Workers
- Deno >= v1.34.0 / >= v1.41.1 *(Via JSR)*
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

### 🔗 Other Edition

- [JavaScript](https://github.com/hugoalh-studio/shuffle-array-js)

## 🔰 Usage

### Via HTTPS

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    - Via Deno Land
      ```ts
      import ... from "https://deno.land/x/shuffle_array[@<Tag>]/mod.ts";
      ```
    - Via DenoPKG
      ```ts
      import ... from "https://denopkg.com/hugoalh-studio/shuffle-array-ts[@<Tag>]/mod.ts";
      ```
    - Via DenoPKG (Legacy)
      ```ts
      import ... from "https://denopkg.com/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";
      ```
    - Via GitHub Raw (Require Tag)
      ```ts
      import ... from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-ts/<Tag>/mod.ts";
      ```
    - Via GitHub Raw (Legacy)(Require Tag)
      ```ts
      import ... from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-deno/<Tag>/mod.ts";
      ```
    - Via Pax
      ```ts
      import ... from "https://pax.deno.dev/hugoalh-studio/shuffle-array-ts[@<Tag>]/mod.ts";
      ```
    - Via Pax (Legacy)
      ```ts
      import ... from "https://pax.deno.dev/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";
      ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
    >
    > - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
    > - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
    > - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
    >
    > These elements are not considered part of the public API, thus no stability is guaranteed for them.

### Via JSR With Native Support

> **🎯 Supported Target**
>
> - Deno

1. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "jsr:@hugoalh/shuffle-array[@<Tag>]";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

### Via JSR With NPM Compatibility Layer Support

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via console/shell/terminal:
    - Via Bun
      ```sh
      bunx jsr add @hugoalh/shuffle-array[@<Tag>]
      ```
    - Via NPM
      ```sh
      npx jsr add @hugoalh/shuffle-array[@<Tag>]
      ```
    - Via PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/shuffle-array[@<Tag>]
      ```
    - Via Yarn
      ```sh
      yarn dlx jsr add @hugoalh/shuffle-array[@<Tag>]
      ```
2. Import at the script (`<ScriptName>.ts`):
    ```ts
    import ... from "@hugoalh/shuffle-array";
    ```
    > **ℹ️ Note**
    >
    > Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.

## 🧩 API

- ```ts
  function shuffleArray<T>(item: T[]): T[];
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/shuffle-array)

## ✍️ Example

- ```ts
  const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```
