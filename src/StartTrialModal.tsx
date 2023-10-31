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
import HyperSpaceGraphic from "./assets/Hyperspace.png";
import FirstModal from "./FirstModal";
import SecondModal from "./SecondModal";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/react";

function StartTrialModal(props: any) {
  const [currentPage, setCurrentPage] = useState(1);

  const renderContent = () => {
    switch (currentPage) {
      case 1:
        return <FirstModal />;
      case 2:
        return <SecondModal />;
    }
  };

  return (
    <Modal isOpen={props.open} placement="center" onClose={props.handleClose}>
      <ModalContent className="flex flex-col items-center py-10 px-10">
        {(onClose) => (
          <>
            <ModalBody>
              {/* <FirstModal />
              <SecondModal /> */}

              {renderContent()}
            </ModalBody>
            <ModalFooter>
              <Pagination
                onChange={(page) => setCurrentPage(page)}
                total={2}
                initialPage={1}
              />{" "}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default StartTrialModal;
