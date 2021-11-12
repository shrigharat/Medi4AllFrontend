import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import LoginForm from "./forms/login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/call">
          <SocketProvider>
            <CallPage />
          </SocketProvider>
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/registration">
          <Registration />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
