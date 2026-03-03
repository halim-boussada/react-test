import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom"

function PostDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);
  
  const fetchdata = async () => {
    try {
      setloading(true);
      // eslint-disable-next-line no-undef
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id,
      );
      console.log(data)
      setPost(data);
      setloading(false);
    } catch (err) {
      seterror(err.message);
      setloading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  function gobacktoPosts() {
    navigate("/posts");
  }

  return (
    <div>
      {loading && <h1>Loading ......</h1>}
      {error && <h1>Erroor : {error}</h1>}
      <button
        onClick={() => {
          gobacktoPosts();
        }}
      >
        GOO BACK TO POSTS
      </button>
      <h1>hello this is details page for the element with the id of {id}</h1>
      <h3>{post?.title}</h3> <p>{post?.body}</p>
    </div>
  );
}

export default PostDetails;
