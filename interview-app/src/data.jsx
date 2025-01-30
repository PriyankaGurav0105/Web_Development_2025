export const questions = {
  "HTML & CSS": [
    {
      question: "What are semantic HTML elements?",
      answer: (
        <>
          Semantic HTML elements are elements that have meaningful names that
          describe their purpose in the document. They improve accessibility,
          SEO, and readability. For example:
          <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
              {"<header><h1>Welcome to My Blog</h1></header>"}
              <br />
              {"<footer><p>© 2025 My Blog</p></footer>"}
              <br />
              {"<section>This is a section</section>"}
              <br />
              {"<header>This is a header</header>"}
            </code>
          </pre>
        </>
      )
    },
    {
      question:
        "Explain the difference between <section>, <article>, and <div>.",
      answer: (
        <>
          <ul>
            <li>
              {"<section>: Groups related content but doesn't stand alone."}
            </li>
            <li>
              {
                "<article>: Represents self-contained content (like blog posts)."
              }
            </li>
            <li>{"<div>: A generic container without semantic meaning."}</li>
          </ul>
          <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
              {
                "<section><h2>Our Services</h2><p>Details about services.</p></section>"
              }
              <br />
              {
                "<article><h2>Blog Post</h2><p>This article is about web development.</p></article>"
              }
              <br />
              {"<div><p>This is a generic container.</p></div>"}
              <br />
            </code>
          </pre>
        </>
      )
    },

    {
      question: "How does the browser render CSS styles?",
      answer: (
        <>
          {" "}
          The browser processes CSS in the following steps:
          <ol>
            <li>
              {"Parsing - HTML and CSS are converted into DOM and CSSOM."}
            </li>
            <li>
              {
                "Style Calculation - CSS rules are applied based on specificity."
              }
            </li>
            <li>
              {
                "Layout - Elements are placed according to styles (e.g., width, position)."
              }
            </li>
            <li>{"Painting - Elements are drawn on the screen."}</li>
            <li>{"Compositing - Layers are rendered in order."}</li>
          </ol>
        </>
      )
    },
    {
      question: "What are CSS pseudo-classes and pseudo-elements?",
      answer: (
        <>
          Pseudo-classes: Target elements based on state (:hover, :focus).
          <br />
          Pseudo-elements: Style part of an element (::before, ::after).
        </>
      )
    },
    {
      question:
        "Explain the difference between em, rem, vh, and % units in CSS.",
      answer: (
        <>
          em: Relative to the parent element’s font-size.<br/> rem: Relative to the
          root (html) font-size.<br/> vh: Percentage of the viewport height.<br/> %:
          Relative to the parent element.
        </>
      )
    },
    {
      question:
        "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
      answer:
      (
        <>
         relative: Moves relative to its normal position.<br/>
absolute: Moves relative to the nearest positioned ancestor.<br/>
fixed: Stays fixed relative to the viewport.<br/>
sticky: Behaves like relative but sticks when scrolling.<br/>
        </>
      )
    },
    {
      question:
        "Flexbox vs. CSS Grid - When to use each?",
      answer:
      (
        <>
        Flexbox: One-dimensional (row OR column).<br/>
        CSS Grid: Two-dimensional (rows AND columns).<br/>
        For example:
        Flexbox(best for Navbars, Aligning items)
        <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
              
                {".container{"}<br/>
                {"display:flex;"}<br/>
                {"justify-content:space-between;"}<br/>
                {"}"}
              
            </code>
          </pre>
          Grid(best for Layouts)
          <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
              
                {".container{"}<br/>
                {"display:grid;"}<br/>
                {" grid-template-columns: repeat(3, 1fr);"}<br/>
                {"}"}
              
            </code>
          </pre>
       </>
      )
    },
    {
      question: "How does z-index work in CSS?",
      answer:(
        <>
        Controls stacking order.<br/> Higher z-index values appear above lower ones.<br/>Works only with position: relative|absolute|fixed.<br/>

        Example: Here, .box2 appears above .box1
          <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
              
                {".box1{"}<br/>
                {" position: absolute;"}<br/>
                {" z-index: 1;"}<br/>
                {"}"}<br/>

                {".box2{"}<br/>
                {" position: absolute;"}<br/>
                {" z-index: 2;"}<br/>
                {"}"}
              
            </code>
          </pre>
        
        </>
      )
      

    },
    {
      question:
        "What is the difference between visibility: hidden; and display: none;?",
      answer:
        "visibility: hidden; → Element is invisible but still takes space.display: none; → Element is removed from the layout."
    },
    {
      question:
        "Explain how you would implement a responsive design using media queries",
      answer:
        "Media queries apply styles based on screen size. @media(max-width:600px){body{font-size:14px;}}"
    }
  ],

  JavaScript: [
    {
      question: "What is the difference between `var`, `let`, and `const`?",
      answer:
        "var: Function-scoped, can be redeclared and updated, hoisted with undefined. let: Block-scoped, can be updated but not redeclared. const: Block-scoped, cannot be updated or redeclared."
    },
    {
      question: "Difference between == and === in JavaScript?",
      answer:
        "== (Loose equality): Converts values to the same type before comparison.=== (Strict equality): Compares both value and type."
    },
    {
      question: "How does the JavaScript Event Loop work?",
      answer:
        "The event loop manages asynchronous tasks. It continuously checks the call stack and the task queue. Sync code runs first. Async callbacks (like setTimeout, Promises) go into the task queue and execute later."
    },
    {
      question: "Difference between == and === in JavaScript?",
      answer:
        "== (Loose equality): Converts values to the same type before comparison.=== (Strict equality): Compares both value and type."
    },
    {
      question: "Synchronous vs Asynchronous Programming?",
      answer:
        "Synchronous: Executes line by line, blocking further execution.Asynchronous: Executes non-blocking tasks like API calls, timers, Promises."
    },
    {
      question: "How setTimeout and setInterval work?",
      answer:
        "setTimeout(fn, delay): Runs fn once after delay. setInterval(fn, delay): Runs fn repeatedly every delay ms."
    },
    {
      question: "What is Hoisting in JavaScript?",
      answer:
        "Hoisting moves function declarations and var variables to the top before execution."
    },
    {
      question: "Difference between map(), forEach(), filter(), and reduce()?",
      answer:
        (
          <>
          map(): Creates a new array with transformed values. <br/> 
          forEach(): Executes a function on each element. <br/>
          filter(): Creates a new array with elements that pass a test. <br/>
          reduce(): Accumulates a value by applying a function to each element.
          <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
            <code className="whitespace-pre-wrap break-words">
                {"let arr = [1, 2, 3, 4];"}<br/>
                {"let doubled = arr.map(n => n * 2);"}<br/>
                {"console.log(doubled); // [2, 4, 6, 8]"}<br/>
                {"arr.forEach(n => console.log(n)); // Logs each item"}<br/>
                {"let even = arr.filter(n => n % 2 === 0);"}<br/>
                {"console.log(even); // [2, 4]"}<br/>
                {"let sum = arr.reduce((acc, n) => acc + n, 0);"}<br/>
                {"console.log(sum); // 10"}<br/>
            </code>
            </pre>
          </>
        )
    },
    {
      question: "Explain closures in JavaScript.",
      answer: (
        <>
          <p>
            A closure is a function that retains access to its parent scope even
            after the parent function has closed.
          </p>
          <pre className="bg-gray-800 text-white p-4 rounded mt-2">
            <code className="whitespace-pre-wrap break-words">
              {"function outer() {"}<br/>
              {"let count = 0;"}<br/>
              {"function inner() {"}<br/>
              {"count++;"}<br/>
              {"console.log(count);"}<br/>
              {"}"}<br/>
              {"return inner;"}<br/>
              {"}"}<br/>
              {"const counter = outer();"}<br/>
              {"counter(); // Output: 1"}<br/>
              {"counter(); // Output: 2"}<br/>
            </code>
          </pre>
        </>
      )
    },
    {
      question: "What are Promises, and how do they work?",
      answer: "A Promise handles async operations, returning results with .then() or errors with .catch()."
    },
    {
      question:"Purpose of async and await?",
      answer:"async: Marks a function as asynchronous. await: Waits for a Promise to resolve.",
    }
  ],

  React: [
    {
      question: "What are React hooks?",
      answer:
        "Hooks allow functional components to use state and lifecycle features. Examples include `useState` and `useEffect`."
    },
    {
      question: "What is the Virtual DOM?",
      answer:
        "The Virtual DOM is a lightweight copy of the actual DOM that improves performance by minimizing direct DOM manipulations."
    }
  ],

  "DS & Algorithms": [
    {
      question: "How do you find the largest and smallest numbers in an array?",
      answer:
        "Big O notation is a measure of an algorithm's time or space complexity, usually."
    }
  ],
  "Backend & Databse": [
    {
      question: "What is an API? How does REST API work?",
      answer:
        "A database is a collection of data, while a data warehouse is a centralized repository"
    }
  ],
  "Web Performance Optimization": [
    {
      question: "What is the Critical Rendering Path in web browsers?",
      answer:
        "The Critical Rendering Path is the sequence of steps a browser takes to render a web"
    }
  ],
  "System Design Basics": [
    {
      question:
        "What is the difference between a monolithic architecture and a microservices architecture?",
      answer:
        "A monolithic architecture is a single, self-contained unit, while a microservices"
    }
  ],
  "Behavioral & HR": [
    {
      question: "Tell me about yourself",
      answer: "Tell me about a time when you overcame a difficult challenge"
    }
  ]
};
