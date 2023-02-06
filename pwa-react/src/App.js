import React from "react";

function App() {
  const [post, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  });
  return (
    <div className="App">
      <main>
        {post.length &&
          post.map((each) => (
            <div
              style={{
                width: "80%",
                marginRight: "auto",
                marginLeft: "auto",
                border: "1px solid gray",
                padding: "20px"
              }}
              key={each.id}
            >
              <h2>{each.title}</h2>
              <p>{each.body}</p>
            </div>
          ))}
      </main>
    </div>
  );
}

export default App;
