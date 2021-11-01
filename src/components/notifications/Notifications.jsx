import React, { useContext, useEffect } from "react";
import { SocketContext } from "../../contexts/SocketContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log("Notification state: ", { answerCall, call, callAccepted })

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Incoming call from {call.from}</ModalHeader>
            <ModalCloseButton />

            <ModalFooter>
              <Button
                colorScheme="med"
                mr={3}
                onClick={() => {
                  onClose();
                  answerCall();
                }}
              >
                Accept
              </Button>
              <Button
                colorScheme="med"
                variant="outline"
                onClick={() => {
                  onClose();
                }}
              >
                Reject
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Notifications;
