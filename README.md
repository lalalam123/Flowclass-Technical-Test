## Flowclass Technical Test for Software Engineer

![Author](https://img.shields.io/badge/Author-%20Chan%20Sik%20Lam%20Jerry-red)
![Version](https://img.shields.io/badge/Version-0.0.1-orange)
![Date](https://img.shields.io/badge/Date-4--6--2023-yellow)
![Copyright](https://img.shields.io/badge/Copyright-N.A.-green)
![Progress](https://img.shields.io/badge/Progress-Complete-blue)

## Result Demonstraion
![Demo](./src/app/asset/demo.gif)

## Features and Requirements
- a text search bar (search by name)
- search text highlighted (case-sensitive according to the video attached)
- click on the name will show the detailed info of that person
- Use React, React Hooks, CSS/SCSS, etc.
- Using UI library is not allowed but beautiful UI

## Context API Demonstration

Motivation: 
   
- Passing props to children is sometimes verbose when the component tree is huge, so we can use context API to pass data to children without passing props to every level of the component tree.

Code:

`src/page.js`, we can create a context and export it

```javascript
export const PersonContext = createContext(data);
```

`src/peoplelist.jsx`, we can import the context and use it

```javascript
import { PersonContext } from "../page";

function PeopleList() {

    const people = useContext(PersonContext)

    const filteredPeople = people.filter((person) =>
        ...
    );

    ...

}

```

Reference: [React Context API](https://reactjs.org/docs/context.html)

## Getting Started with a develpment server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

I started editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
