Dev Stack Builder

Description
Dev Stack Builder is a single page website where a user can select their learned tecknologies. A side bar also show the selected technologies. User also delete selected technologies form the sidebar.

Technology Used

React.js
TypeScript
Tailwind CSS
DaisyUI
React Icons
React-Toastify
Vite

Features
1.Select technologies: Technologies are loaded from a JSON file and shown as cards with an icon, badge, category and rating. By Clicking "Add to Stack" user can add the technology to their personal stack. 
2.Stack panel: A sidebar shows every technology a user added automatically. They can remove a single item or clear the entire stack also.
3.Responsive design : The layout is responsive to mobile, tablet, and desktop. 

React Questions
1.What is JSX, and why is it used in React?

JSX is a syntax for JavaScript that allow us write HTML-like code directly inside our JavaScript files. 

2.What is the difference between props and state?

Props are values passed to a component. It's like function's parameter. State is data that a component manages internally , and it can change over time , which causes the component to re-render.

3.What does the useState hook do, and where did you use it in this project?

useState keeps track of a value in componentthat can change and re-render the UI when the value updates. In this project I used it in App.tsx.

4.What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect hook helps to load fetched JSON data.

5.Why does every item in a .map() list need a unique key prop?

Unique ket props help react to identify each item individually.


6.What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different UI depending on some condition. In this project, the YourStack component checks selectedTechnologies.length as conditional rendering.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child through props. To send something back to the parent, the parent also passes a setter function as a prop, and the child calls that function.

