import { Link, Route, Routes } from "react-router-dom";
import TodoList from "./Day1/TodoList";
import Requests from "./Day1/Requests";
import ListOfPosts from "./Day1/ListsOfPosts";
import DataFetch from "./DataFetch";
import Form from "./Form";
import Fetching2 from "./Fetching2";
import DashboardNav from "./DashboardNav";
import PostDetails from "./postDetails";
import Home from "./HomePage";
function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Todos</Link>
        <Link to="/posts">Posts</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/posts" element={<Fetching2 />} />
        <Route path="/home/:lang" element={<Home />} />
        <Route path="posts/:id" element={<PostDetails />} />
        <Route path="/dashboard/*" element={<DashboardNav />}>
          <Route path="req" element={<Requests />} />
          <Route path="list" element={<ListOfPosts />} />
          <Route path="data" element={<DataFetch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
