import React from "react";
import VideoCallPlayer from "../../components/videoCallPlayer/VideoCallPlayer";
import classes from "./CallPage.module.scss";
import Options from "../../components/callingOptions/Options";
import Notifications from "../../components/notifications/Notifications";

const CallPage = () => {
  return (
    <div className={classes.callPage}>
      <h3>Consultation Prajakta</h3>
      <VideoCallPlayer />
      <Options />
      <Notifications />
    </div>
  );
};

export default CallPage;
