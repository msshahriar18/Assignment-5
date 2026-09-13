# Dev Stack Builder

A frontend web app where you can browse different web development technologies (frontend, backend, database, language, styling, DevOps, and tools), and build your own personal "tech stack" by adding the ones you like to a stack panel.

## Description

Dev Stack Builder lets you explore a curated list of popular technologies with details like category, difficulty level, and rating. You can add technologies to your stack, remove them one at a time, or clear the whole stack at once. The app is fully responsive and gives instant feedback through toast notifications whenever you add or remove something.

## Technology Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Icons
- React-Toastify
- Vite

## Features

1. **Browse and select technologies** — Technologies are loaded from a JSON file and shown as cards with an icon, badge, category, difficulty, and rating. Clicking "Add to Stack" adds that technology to your personal stack.
2. **Your Stack panel** — A live sidebar shows every technology you've added, with the count updating automatically. You can remove a single item or clear the entire stack with "Remove All".
3. **Responsive design with toast feedback** — The layout adapts across mobile, tablet, and desktop, and every action (add, duplicate attempt, remove, remove all) shows a toast notification so you always know what just happened.

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension for JavaScript that lets us write HTML-like code directly inside our JavaScript/TypeScript files. React uses it because it makes describing what the UI should look like much easier to read and write, compared to calling `React.createElement()` manually every time.

**2. What is the difference between props and state?**

Props are values passed into a component from its parent — a component cannot change its own props. State is data that a component manages internally with `useState`, and it can change over time (usually because of user interaction), which causes the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a component keep track of a value that can change and re-render the UI whenever that value updates. In this project I used it in `App.tsx` to hold the fetched technologies promise and the list of `selectedTechnologies` (the stack), and inside components to toggle things like the mobile menu open/close state.

**4. What does the `useEffect`/`use` hook do, and why did you need it to load the JSON data?**

These hooks let a component do something outside of the normal render, like fetching data. In this project I load `technologies.json` with an async function that returns a promise, and use React's `use()` hook together with `Suspense` to read that data once it resolves, showing a loading fallback in the meantime.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` prop to keep track of which list item is which between re-renders, so it knows what changed, what was added, and what was removed. Without a stable unique key, React can mix up items or re-render the whole list unnecessarily, which can cause bugs or lost input state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on some condition, instead of always showing the same thing. In this project, the `YourStack` component checks `selectedTechnologies.length === 0` — if it's empty it shows an "Your stack is empty." message, otherwise it renders the list of selected technologies.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props, for example `<TechnologyCard technology={technology} />`. To send something back up, the parent also passes down a setter function (like `setSelectedTechnologies`) as a prop, and the child calls that function — since the parent owns the actual state, calling the setter from the child updates the parent's state and re-renders anything that depends on it.

## What to submit

- GitHub Repository Link:
- Live Site Link:
