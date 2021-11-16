import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginForm from "./forms/login/Login";
import Registration from "./pages/Registration/Registration";
import { useSelector } from "react-redux";

function App() {
  const { userLoggedIn } = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/call">
          <SocketProvider>
            <CallPage />
          </SocketProvider>
        </Route>
        <Route exact path="/">
          {userLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
        {userLoggedIn ? <Dashboard /> : <LoginForm/> }
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/dashboard">
          {userLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
