# @bytestruct/dnd5e-eslint

ESLint rules for enforcing the dnd5e project code style conventions.

## Installation

```sh
npm install --save-dev @bytestruct/dnd5e-eslint
```

In `eslint.config.mjs`:

```js
import dnd5e from "@bytestruct/dnd5e-eslint";

export default [
  ...dnd5e.configs.recommended
];
```

## Rules

### `dnd5e/jsdoc-no-spaces-around-optional-param-equals`

Disallows spaces around `=` in JSDoc optional parameter defaults.

```js
// Incorrect
/** @param {string} [foo = "bar"] */

// Correct
/** @param {string} [foo="bar"] */
```

---

### `dnd5e/no-spaces-around-default-param-equals`

Disallows spaces around `=` in function default parameters.

```js
// Incorrect
function foo(options = {}) {}

// Correct
function foo(options={}) {}
```

---

### `dnd5e/require-arrow-braces`

Requires block bodies for multi-line arrow functions.

```js
// Incorrect
const f = x =>
  x + 1;

// Correct
const f = x => {
  return x + 1;
};
```

---

### `dnd5e/require-method-separator`

Requires a separator comment before each class method and top-level function after the first.

```js
// Incorrect
class Foo {
  a() {}
  b() {}
}

// Correct
class Foo {
  a() {}

  /* -------------------------------------------- */

  b() {}
}
```

---

### `dnd5e/sort-object-keys`

Requires object properties to be ordered shorthand-first, then alphabetically within each group.
Skips objects containing spread elements or computed keys.

```js
// Incorrect
const x = { foo: 1, b, bar: 2, a };

// Correct
const x = { a, b, bar: 2, foo: 1 };
```

---

### `dnd5e/space-in-control-flow-parens`

Requires spaces inside the parentheses of control-flow statements
(`if`, `for`, `while`, `switch`, `do...while`, `catch`).

```js
// Incorrect
if (x) {}

// Correct
if ( x ) {}
```
