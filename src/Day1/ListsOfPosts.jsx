import axios from "axios";
import { useEffect, useState } from "react";

function ListOfPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const getPosts = async () => {
    try {
      var { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
      );
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const createPost = async () => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: "hello",
          body: "this is a test ",
          useId: 1,
        },
      );
      console.log("reeesss", res);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <button onClick={createPost}>create fake post</button>
      <h1 style={{ color: error ? "red" : "black" }}>{error}</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default ListOfPosts;
