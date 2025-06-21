# 🧮 UpdaterFunc - React Count Update Component

This is a simple React component that demonstrates how to manage and update state using functional updates in React's `useState` hook.

## 🔍 Description

`UpdaterFunc` displays a counter and provides three buttons:
- **Increase**: Increases the counter by 3
- **Decrease**: Decreases the counter by 3
- **Reset**: Resets the counter to 0

All state updates use the functional form of `setState` to ensure correct value updates even when called multiple times in a row.

## 🚀 Features

- React Hooks (`useState`)
- Functional state updates (safe and consistent)
- UI built with basic JSX and styled with Tailwind CSS (optional)
- Dynamic button rendering using `map()`

🛠️ How It Works

setCount((prev) => prev + 1);

▶️ Usage
1. Import and render the component:

import UpdaterFunc from "./UpdaterFunc";

function App() {
  return <UpdaterFunc />;
}

2. Run the app:

npm run dev 

📋 Example Output

Count Update Program
[ 3 ]
[ Increase ] [ Reset ] [ Decrease ]

🧠 Learnings
Using setState in a loop without the functional form may lead to unexpected behavior due to batching.

Functional updates (setCount(prev => ...)) allow reliable cumulative changes.
