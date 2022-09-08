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
import ReplaceModal2 from "./ReplaceModal2";
import ReplaceModal3 from "./ReplaceModal3";
function RescheduleModal(props) {
  // console.log("reschedule modal", props.data);
  const { register, handleSubmit } = useForm();
  const { p1, p2, p3, p4 } = props.data.data;
  const { id } = props.data;
  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);
  const [openModal3, setOpenModal3] = React.useState(false);
  const [openModal4, setOpenModal4] = React.useState(false);
  const [replacePerson, setReplacePerson] = React.useState(null);
  const closeModal = () => {
    setOpenModal(false);
    props.closeModal();
  };
  const closeModal2 = () => {
    setOpenModal2(false);
    props.closeModal();
  };
  const closeModal3 = () => {
    setOpenModal3(false);
    props.closeModal();
  };
  const closeModal4 = () => {
    setOpenModal4(false);
    props.closeModal();
  };
  const onSubmit = (data) => {};

  const clickHandler = (person) => {
    setReplacePerson(person);
    setOpenModal(true);
  };
  const clickHandler2 = (person) => {
    setReplacePerson(person);
    setOpenModal2(true);
  };
  const clickHandler3 = (person) => {
    setReplacePerson(person);
    setOpenModal3(true);
  };
  const clickHandler4 = (person) => {
    setReplacePerson(person);
    setOpenModal4(true);
    console.log("4")
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
            <PersonButton onClick={() => clickHandler2(p2)}>{p2}</PersonButton>
            <PersonButton onClick={() => clickHandler3(p3)}>{p3}</PersonButton>
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
      <ReplaceModal2
        modalState2={openModal2}
        replacePerson={replacePerson}
        apnId={id}
        closeModal2={closeModal2}
      />
      <ReplaceModal3
        modalState3={openModal3}
        replacePerson={replacePerson}
        apnId={id}
        closeModal3={closeModal3}
      />
    </Modal>
  );
}

export default RescheduleModal;
