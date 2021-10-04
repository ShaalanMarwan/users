import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./users/user-profile"
import {Route} from "react-router-dom"
;
import UsersTable from "./users/users-table";
function App() {

  return (
    <div className="App">

    <Route exact path="/" component={UsersTable}/>
    <Route exact path="/users/:id" component={UserProfile} />

      {/* <Button variant="text" onClick={()=>{setRefresh(!refresh)}}>Refresh</Button> */}

      {/* <UsersTable users={users} /> */}
    </div>
  );
}

export default App;
