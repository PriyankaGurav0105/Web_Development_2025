export const questions = {
    "HTML & CSS": [
        { 
            question: "What are semantic HTML elements?",
            answer: (
              <>
                Semantic HTML elements clearly describe their meaning. For example:
                <pre className="bg-gray-800 text-white p-4 rounded mt-2 ">
                  <code className="whitespace-pre-wrap break-words">
                  {"<article> This is an article </article>"}<br/>
              {"<section>This is a section</section>"}<br/>
              {"<header>This is a header</header>"}
                  </code>
                </pre>
              </>
            )
          },
      { 
        question: "Explain the difference between <section>, <article>, and <div>.",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "Explain the difference between <section>, <article>, and <div>.",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "How does the browser render CSS styles?",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "What are CSS pseudo-classes and pseudo-elements?",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "Explain the difference between em, rem, vh, and % units in CSS.",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "What is the difference between relative, absolute, fixed, and sticky positioning in CSS?",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "How does z-index work in CSS?",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "What is the difference between visibility: hidden; and display: none;?",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      },
      { 
        question: "Explain how you would implement a responsive design using media queries",
        answer: "<section> is for thematically related content, <article> is for self-contained content, and <div> is a generic container."
      }

    ],
    
    "JavaScript": [
      { 
        question: "What is the difference between `var`, `let`, and `const`?",
        answer: "`var` is function-scoped, `let` is block-scoped, and `const` is block-scoped with immutable bindings."
      },
      { 
        question: "Explain closures in JavaScript.",
        answer: (
            
            <>
            <p>A closure is a function that retains access to its parent scope even after the parent function has closed.</p>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
            <code>
            {"function outer() {"}
                {"let count = 0;"}
                {"function inner() {"}
                  {"count++;"}
                  {"console.log(count);"}
                {"}"}
                {"return inner;"}
              {"}"}
              {"const counter = outer();"}
              {"counter(); // Output: 1"}
              {"counter(); // Output: 2"}
            </code>
            </pre>
            </>)
      }
    ],
    
    "React": [
      { 
        question: "What are React hooks?",
        answer: "Hooks allow functional components to use state and lifecycle features. Examples include `useState` and `useEffect`."
      },
      { 
        question: "What is the Virtual DOM?",
        answer: "The Virtual DOM is a lightweight copy of the actual DOM that improves performance by minimizing direct DOM manipulations."
      }
    ],
    
        "DS & Algorithms":[
            {
                question: "How do you find the largest and smallest numbers in an array?",
                answer: "Big O notation is a measure of an algorithm's time or space complexity, usually."
            }
        ],
        "Backend & Databse":[
            {
                question: "What is an API? How does REST API work?",
                answer: "A database is a collection of data, while a data warehouse is a centralized repository"
            }
        ],
        "Web Performance Optimization":[
            {
                question:"What is the Critical Rendering Path in web browsers?",
                answer: "The Critical Rendering Path is the sequence of steps a browser takes to render a web"
            }
        ],
        "System Design Basics":[
            {
                question: "What is the difference between a monolithic architecture and a microservices architecture?",
                answer: "A monolithic architecture is a single, self-contained unit, while a microservices"
            }
        ],
        "Behavioral & HR":[
            {
                question:"Tell me about yourself",
                answer: "Tell me about a time when you overcame a difficult challenge"
            }
        ]
    
  };
  