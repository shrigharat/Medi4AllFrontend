import React, { useState, useContext } from "react";
import classes from "./Options.module.scss";
import { SocketContext } from "../../contexts/SocketContext";
import { useSelector } from "react-redux";
import userTypes from "../../utils/userTypes";
import { useHistory } from "react-router";

const MakeCallForm = ({onOpen}) => {
  const { mySocketId, callAccepted, callEnded, leaveCall, makeCall } =
    useContext(SocketContext);
  const [recipientId, setRecipientId] = useState("");
  const history = useHistory();
  const { user, userType } = useSelector((state) => state.authReducer);

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
          <button onClick={() => {
            if(userType === userTypes.doctor) {
              onOpen();
              return;
            }
            leaveCall();
            history.pushState("/dashboard");
          }}>
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
