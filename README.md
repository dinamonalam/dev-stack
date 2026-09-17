# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

1. What is JSX, and why is it used in React?
JSX lets us write HTML-like code inside JavaScript in React.

2. What is the difference between props and state?
Props are data passed from parent to child, while state is data managed inside a component.

3. What does the useState hook do, and where did you use it in this project?
useState stores and updates data, and I used it to manage the stack/items in this project.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after rendering, and I used it to load JSON data when the component started.

5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify each item and update the list correctly.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing something based on a condition; I used it to show the “Stack is empty” message when there are no items.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data using props, and a child sends data back using a callback function.
