import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginForm from "./forms/login/Login";
import Registration from "./pages/Registration/Registration";
import { useSelector } from "react-redux";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const { userLoggedIn } = useSelector((state) => state.authReducer);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/call">
          {userLoggedIn ? (
            <SocketProvider>
              <CallPage />
            </SocketProvider>
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/">
          {userLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          {userLoggedIn ? <Dashboard /> : <LoginForm />}
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
        <Route exact path="/dashboard">
          {userLoggedIn ? <Dashboard /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/landingpage">
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
