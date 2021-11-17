import React from "react";
import VideoCallPlayer from "../../components/videoCallPlayer/VideoCallPlayer";
import classes from "./CallPage.module.scss";
import Options from "../../components/callingOptions/Options";
import Notifications from "../../components/notifications/Notifications";
import MedicalInfoForm from "../../forms/medicalInfo/MedicalInfo";
import { useDisclosure } from "@chakra-ui/hooks";

const CallPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={classes.callPage}>
      <h3>Consultation Screen</h3>
      <VideoCallPlayer />
      <Options onOpen={onOpen}/>
      <Notifications />
      <MedicalInfoForm isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CallPage;
