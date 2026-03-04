import { Link, Route, Routes } from "react-router-dom";
import TodoList from "./Day1/TodoList";
import Requests from "./Day1/Requests";
import ListOfPosts from "./Day1/ListsOfPosts";
import DataFetch from "./Day2/DataFetch";
import Form from "./Day2/Form";
import Fetching2 from "./Day2/Fetching2";
import DashboardNav from "./Day2/DashboardNav";
import PostDetails from "./Day2/PostDetails";
import Home from "./Day2/HomePage";
import Users from "./Day2/Users";
import Profile from "./Day2/Profile";
import NewTodoList from "./Day2/NewTodoList";
// import ParentComponent from "./Day3/ParentComponent";

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Todos</Link>
        <Link to="/posts">Posts</Link>
      </nav> */}
      {/* <ParentComponent /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newtodo" element={<NewTodoList />} />        
        <Route path="/posts" element={<Fetching2 />} />
        <Route path="/users" element={<Users />} />
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
