import { Box, Grid } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { SocketContext } from "../../contexts/SocketContext";
import classes from "./VideoCallPlayer.module.scss";

const VideoCallPlayer = () => {
  const {
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
  } = useContext(SocketContext);
  console.log({
    myName,
    callAccepted,
    callEnded,
    call,
    stream,
    mySocketId,
    recipientVideoFeed,
    myVideoFeed,
  });
  return (
    <div className={classes.videoCallPlayer}>
      {stream && (
        <div className={classes.myVideContainer}>
          <video playsInline autoPlay ref={myVideoFeed} muted/>
          <p className={classes.userName}>{myName}</p>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className={classes.myVideContainer}>
          <video playsInline autoPlay ref={recipientVideoFeed} />
          <p className={classes.userName}>{call.from}</p>
        </div>
      )}
    </div>
  );
};

export default VideoCallPlayer;
