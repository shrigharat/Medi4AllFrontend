import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dashboard} />

        <Route exact path="/consultation">
          <SocketProvider>
            <CallPage />
          </SocketProvider>

        </Route>
      </Switch>

    </div>
  );
}

export default App;
