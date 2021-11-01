import React, { useState, useContext } from "react";
import classes from "./Options.module.scss";
import { SocketContext } from "../../contexts/SocketContext";

const MakeCallForm = () => {
  const { mySocketId, callAccepted, callEnded, leaveCall, makeCall } =
    useContext(SocketContext);
  const [recipientId, setRecipientId] = useState("");

  return (
    <div className={classes.callFormWrapper}>
      <p>Enter recipient ID</p>
      <div className={classes.callForm}>
        <input
          placeholder="Recipient ID"
          type="text"
          value={recipientId}
          onChange={(e) => setRecipientId(e.target.value)}
        />
        {callAccepted && !callEnded ? (
          <button onClick={leaveCall}>
            <i class="fas fa-phone-slash"></i>
            Leave Call
          </button>
        ) : (
          <button
            onClick={() => {
              console.log({ recipientId });
              makeCall(recipientId);
            }}
          >
            <i class="fas fa-phone-alt"></i>
            Call recipient
          </button>
        )}
      </div>
    </div>
  );
};

export default MakeCallForm;
