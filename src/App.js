import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Admin dataProvider={simpleRestProvider("http://localhost:5000")}>
      <Resource
        name="posts"
        list={PostList}
        create={CreatePost}
        edit={EditPost}
      />
      <Resource
        name="users"
        list={UsersList}
        create={CreateUser}
        edit={EditUser}
      />
    </Admin>
  );
}

export default App;
