import CallPage from "./pages/CallPage/CallPage";
import { SocketProvider } from "./contexts/SocketContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SocketProvider>
        <CallPage />
      </SocketProvider>
    </div>
  );
}

export default App;
