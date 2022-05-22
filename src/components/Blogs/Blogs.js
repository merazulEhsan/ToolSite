import React from "react";

const Blogs = () => {
  return (
    <div className="m-10">
      <div className="mb-10">
        <h2 className="text-2xl font-bold">
          01. How will you improve the performance of a React Application?
        </h2>
        <p>
          In React applications, we are guaranteed a very fast UI by default.
          However, as an application grows, developers may encounter some
          performance issues.
        </p>
        <ul className=" list-disc ml-10 mt-3">
          <li>Keeping component state local where necessary</li>
          <li>Memoizing React components to prevent unnecessary re-renders</li>
          <li>Code-splitting in React using dynamic import()</li>
          <li>Windowing or list virtualization in React</li>
          <li>Lazy loading images in React</li>
        </ul>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold">
          02. What are the different ways to manage a state in a React
          application?
        </h2>

        <p>
          There are four main types of state you need to properly manage in your
          React apps:
        </p>

        <ul className=" list-disc ml-10 mt-3">
          <li>Local state</li>
          <li>Global state</li>
          <li>Server state</li>
          <li>URL state</li>
        </ul>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          03. How does prototypical inheritance work?
        </h1>

        <p>
          The Prototypal Inheritance is a feature in javascript used to add
          methods and properties in objects. It is a method by which an object
          can inherit the properties and methods of another object.
          Traditionally, in order to get and set the [[Prototype]] of an object,
          we use Object.getPrototypeOf and Object.
        </p>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          04.You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>

        <p></p>
      </div>
      <div className="mb-10">
        <h1 className="text-2xl font-bold">
          05. What is a unit test? Why should write unit tests?
        </h1>
        <p>
          The main objective of unit testing is to isolate written code to test
          and determine if it works as intended. Unit testing is an important
          step in the development process, because if done correctly, it can
          help detect early flaws in code which may be more difficult to find in
          later testing stages.
          <br /> <br />
          Why should I write unit tests? One of the benefits of unit tests is
          that they isolate a function, class or method and only test that piece
          of code. Higher quality individual components create overall system
          resiliency. Thus, the result is reliable code. Unit tests also change
          the nature of the debugging process.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
