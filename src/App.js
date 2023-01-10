import "./App.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:5000");

function App() {
  return <div className="App">OK</div>;
}

export default App;
