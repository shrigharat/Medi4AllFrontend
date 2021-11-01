import React, { useState, useEffect, useRef, createContext } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useToast } from "@chakra-ui/toast";

const socket = io("https://medi4allbackend.herokuapp.com/");

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const [stream, setDataStream] = useState(null);
  const [mySocketId, setMySocketId] = useState("");
  const [call, setCall] = useState({});
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [myName, setMyName] = useState("Shrishail");
  const toast = useToast();

  const myVideoFeed = useRef();
  const recipientVideoFeed = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then((currentStream) => {
        setDataStream(currentStream);
        myVideoFeed.current.srcObject = currentStream;
      });

    socket.on("me", (id) => {
      setMySocketId(id);
    });

    socket.on("calluser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  }, []);

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answercall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      recipientVideoFeed.current.srcObject = currentStream;
    });

    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const makeCall = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id,
        signalData: data,
        name: myName,
        from: mySocketId,
      });
    });

    peer.on("stream", (currentStream) => {
      console.log("Got video feed from recipient...");
      recipientVideoFeed.current.srcObject = currentStream;
    });

    socket.on("callaccepted", (signal) => {
      setCallAccepted(true);
      toast({
        title: "Call accepted",
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "left-accent",
        position: "bottom-end"
      })
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        answerCall,
        makeCall,
        leaveCall,
        myName,
        setMyName,
        myVideoFeed,
        recipientVideoFeed,
        callAccepted,
        callEnded,
        call,
        stream,
        mySocketId,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
