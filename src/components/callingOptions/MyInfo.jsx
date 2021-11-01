import { useToast } from "@chakra-ui/toast";
import React, { useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SocketContext } from "../../contexts/SocketContext";
import classes from "./Options.module.scss";

const MyInfo = () => {
  const { mySocketId } = useContext(SocketContext);
  const toast = useToast();
  return (
    <div className={classes.myInfo}>
      <p>Your ID</p>
      <div className={classes.myId}>{mySocketId}</div>
      <CopyToClipboard
        text={mySocketId}
        onCopy={() =>
          toast({
            title: "Copied",
            status: "success",
            duration: 3000,
            isClosable: true,
            variant: "left-accent",
            position: "bottom-end"
          })
        }
      >
        <div className={classes.clipboard}>
          <i class="fas fa-clipboard"></i>
          <span>Copy to clipboard</span>
        </div>
      </CopyToClipboard>
    </div>
  );
};

export default MyInfo;
