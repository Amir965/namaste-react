const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
      [
          React.createElement("h1", {}, "i'm a h1 child element"),
          React.createElement("h2", {}, "i'm a h2 child element")
    ]
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world! from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
