import dnd5e from "./index.mjs";

export default [
  { ignores: ["test/fixtures/**"] },
  ...dnd5e.configs.recommended
];
