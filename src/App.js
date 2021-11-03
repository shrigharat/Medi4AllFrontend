import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";


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
      </Switch>
    </div>
  );
}

export default App;
