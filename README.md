# Shuffle Array (ES)

[**⚖️** MIT](./LICENSE.md)

[![Deno Land: shuffle_array](https://img.shields.io/badge/dynamic/json?label=shuffle_array&labelColor=000000&logo=deno&logoColor=ffffff&style=flat&url=https%3A%2F%2Fapiland.deno.dev%2Fv2%2Fmodules%2Fshuffle_array&query=%24.latest_version "Deno Land: shuffle_array")](https://deno.land/x/shuffle_array)
[![GitHub: hugoalh-studio/shuffle-array-es](https://img.shields.io/github/v/release/hugoalh-studio/shuffle-array-es?label=hugoalh-studio/shuffle-array-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/shuffle-array-es")](https://github.com/hugoalh-studio/shuffle-array-es)
[![JSR: @hugoalh/shuffle-array](https://img.shields.io/jsr/v/@hugoalh/shuffle-array?label=@hugoalh/shuffle-array&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/shuffle-array")](https://jsr.io/@hugoalh/shuffle-array)
[![NPM: @hugoalh/shuffle-array](https://img.shields.io/npm/v/@hugoalh/shuffle-array?label=@hugoalh/shuffle-array&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/shuffle-array")](https://www.npmjs.com/package/@hugoalh/shuffle-array)

An ES (JavaScript & TypeScript) module to shuffle the array's indexes.

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **[Deno](https://deno.land/)** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other methods/ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

- **JSR:**
  ```
  @hugoalh/shuffle-array
  ```
- **NPM:**
  ```
  @hugoalh/shuffle-array
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- **Deno Land:**
  ```
  https://deno.land/x/shuffle_array[@${Tag}]/mod.ts
  ```
- **GitHub Raw:** (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-es/${Tag}/mod.ts
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 APIs

- ```ts
  function shuffleArray<T>(item: T[]): T[];
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [Deno Land](https://deno.land/x/shuffle_array)
> - [JSR](https://jsr.io/@hugoalh/shuffle-array)

## ✍️ Examples

- ```ts
  const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```
