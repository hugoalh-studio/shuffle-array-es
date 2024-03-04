# Shuffle Array (TypeScript)

[**⚖️** MIT](./LICENSE.md)

**🗂️**
[![GitHub: hugoalh-studio/shuffle-array-ts](https://img.shields.io/badge/hugoalh--studio/shuffle--array--ts-181717?logo=github&logoColor=ffffff&style=flat "GitHub: hugoalh-studio/shuffle-array-ts")](https://github.com/hugoalh-studio/shuffle-array-ts)
[![Deno Land: shuffle_array](https://img.shields.io/badge/shuffle__array-000000?logo=deno&logoColor=ffffff&style=flat "Deno Land: shuffle_array")](https://deno.land/x/shuffle_array)
[![JSR: @hugoalh/shuffle-array](https://img.shields.io/badge/JSR-@hugoalh/shuffle--array-F7DF1E?labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/shuffle-array")](https://jsr.io/@hugoalh/shuffle-array)

**🆙** ![Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/shuffle-array-ts?sort=semver&color=2187C0&label=&style=flat "Latest Release Version") (![Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/shuffle-array-ts?color=2187C0&label=&style=flat "Latest Release Date"))

A TypeScript module to shuffle the array's indexes.

## 🎯 Target

<table>
<tbody align="left">
<tr>
<th>Bun</th>
<td>^ v1.0.0</td>
</tr>
<tr>
<th>Cloudflare Workers</th>
<td>*</td>
</tr>
<tr>
<th>Deno</th>
<td>

\>= v1.34.0 (Via HTTPS) / \>= v1.41.1 (Via JSR)

**🛡️ Require Permission:** *N/A*

</td>
</tr>
<tr>
<th>NodeJS</th>
<td>&gt;= v16.13.0</td>
</tr>
</tbody>
</table>

## 🔰 Usage

### Via HTTPS

> **🎯 Supported Target:**
>
> - Deno

**Import (`<ScriptName>.ts`):**

```ts
/* Via Deno Land */
import ... from "https://deno.land/x/shuffle_array[@<Tag>]/mod.ts";

/* Via DenoPKG */
import ... from "https://denopkg.com/hugoalh-studio/shuffle-array-ts[@<Tag>]/mod.ts";

/* Via DenoPKG (Legacy) */
import ... from "https://denopkg.com/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";

/* Via GitHub Raw (Require Tag) */
import ... from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-ts/<Tag>/mod.ts";

/* Via GitHub Raw (Legacy)(Require Tag) */
import ... from "https://raw.githubusercontent.com/hugoalh-studio/shuffle-array-deno/<Tag>/mod.ts";

/* Via Pax */
import ... from "https://pax.deno.dev/hugoalh-studio/shuffle-array-ts[@<Tag>]/mod.ts";

/* Via Pax (Legacy) */
import ... from "https://pax.deno.dev/hugoalh-studio/shuffle-array-deno[@<Tag>]/mod.ts";
```

> **ℹ️ Notice:** Although it is recommended to import main module with path `mod.ts` in general, it is also able to import part of the module with sub path if available, but do not import if:
>
> - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
> - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
> - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
> These elements are not considered part of the public API, thus no stability is guaranteed for them.

### Via JSR With Native Support

> **🎯 Supported Target:**
>
> - Deno

**Import (`<ScriptName>.ts`):**

```ts
import ... from "jsr:@hugoalh/shuffle-array[@<Tag>]";
```

> **ℹ️ Notice:** Although it is recommended to import main module in general, it is also able to import part of the module with sub path if available, see [file `jsr.jsonc`](./jsr.jsonc) property exports for available sub paths.

### Via JSR With NPM Compatibility Layer Support

> **🎯 Supported Target:**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

**Install (Console / Terminal)**:

```sh
# Via Bun
bunx jsr add @hugoalh/shuffle-array[@<Tag>]

# Via NPM
npx jsr add @hugoalh/shuffle-array[@<Tag>]

# Via PNPM
pnpm dlx jsr add @hugoalh/shuffle-array[@<Tag>]

# Via Yarn
yarn dlx jsr add @hugoalh/shuffle-array[@<Tag>]
```

**Import (`<ScriptName>.js` / `<ScriptName>.ts`):**

```ts
import ... from "@hugoalh/shuffle-array";
```

## 🧩 API

- ```ts
  function shuffleArray<T>(item: T[]): T[];
  ```

> **ℹ️ Notice:** Documentation is included inside the script file, can view it via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [Deno Doc Land](https://doc.deno.land)
> - [JSR](https://jsr.io/@hugoalh/shuffle-array)

## ✍️ Example

- ```ts
  const chain = [3, 7, 25, 26, 42, 62, 71, 76, 92, 93];

  shuffleArray(chain);
  //=> [62, 93, 26, 42, 25, 7, 76, 71, 3, 92]

  shuffleArray(chain);
  //=> [42, 3, 26, 62, 93, 7, 76, 25, 92, 71]
  ```

## 🔗 Other Edition

- [NodeJS](https://github.com/hugoalh-studio/shuffle-array-nodejs)
