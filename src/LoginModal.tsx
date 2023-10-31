import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

function LoginModal(props: any) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Modal
      placement="center"
      isOpen={props.open}
      className="px-3 py-10 "
      onClose={props.handleClose}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              Login
            </ModalHeader>
            <ModalBody>
              <Input type="email" label="Email" />
              <Input type="password" label="Password" />
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Link className="text-xs">Forgot your password?</Link>

              <Button
                color="danger"
                variant="light"
                onPress={props.handleClose}
              >
                Cancel
              </Button>
              <Button
                isLoading={isLoading}
                onClick={() => {
                  setIsLoading(true);
                }}
                color="primary"
                onPress={onClose}
              >
                Login
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default LoginModal;
