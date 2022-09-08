import Modal from "react-modal";
import { useForm } from "react-hook-form";
import React from "react";

import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  customStyles,
  PersonButton,
} from "../styledComponent/index";
import ReplaceModal from "./ReplaceModal";

function RescheduleModal(props) {
  // console.log("reschedule modal", props.data);
  const { register, handleSubmit } = useForm();
  const { p1, p2, p3, p4 } = props.data.data;
  const { id } = props.data;
  const [openModal, setOpenModal] = React.useState(false);
  const [replacePerson, setReplacePerson] = React.useState(null);
  const closeModal = () => {
    setOpenModal(false);
    props.closeModal();
  };
  const onSubmit = (data) => {};

  const clickHandler = (person) => {
    setReplacePerson(person);
    setOpenModal(true);
  };
  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Reschedule</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <div
            style={{
              textAlign: "center",
              marginTop: "15px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <PersonButton onClick={() => clickHandler(p1)}>{p1}</PersonButton>
            <PersonButton onClick={() => clickHandler(p2)}>{p2}</PersonButton>
            <PersonButton onClick={() => clickHandler(p3)}>{p3}</PersonButton>
            <PersonButton onClick={() => clickHandler(p4)}>{p4}</PersonButton>
          </div>
          {/* setOpenModal(true) */}
        </ModalBody>
        <ModalFooter>
          {/* <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel> */}
        </ModalFooter>
      </form>
      {/* <ReTextShow modalState={openModal} data={props} closeModal={closeModal} /> */}
      <ReplaceModal
        modalState={openModal}
        replacePerson={replacePerson}
        apnId={id}
        closeModal={closeModal}
      />
    </Modal>
  );
}

export default RescheduleModal;
