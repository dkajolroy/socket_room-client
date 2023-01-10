import "./App.css";
import { io } from "socket.io-client";
import { useState } from "react";
import AuthPage from "./Components/AuthPage";
import ChatPage from "./Components/ChatPage";
const socket = io("http://localhost:5000");

function App() {
  const [data, setData] = useState({ name: "", room: null });
  const [showChat, setShowChat] = useState(false);

  const submitJoin = () => {
    if (data.name !== "" && data.room !== "") {
      socket.emit("join_room", parseInt(data.room));
      setShowChat(true);
    }
  };

  return (
    <div className="container-fluid bg-secondary">
      {!showChat ? (
        <AuthPage onClick={submitJoin} setData={setData} />
      ) : (
        <ChatPage socket={socket} data={data} />
      )}
    </div>
  );
}

export default App;
