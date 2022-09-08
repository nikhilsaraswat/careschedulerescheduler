import Modal from "react-modal";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import {
  ModalBody,
  ModalHeader,
  customStyles,
 IconSpan,
  TextButtonContainer,
} from "../styledComponent/index";

function InformationModal(props) {
  const { register, handleSubmit, reset } = useForm();
  // console.log(register);

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.closeinformModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader></ModalHeader>

      <TextButtonContainer>
        <p>Text-a</p>
        <IconSpan>
          <AiOutlineCheck />
        </IconSpan>
      </TextButtonContainer>
      <hr />
      <TextButtonContainer>
        <p>Text-b</p>
        <IconSpan>
          <AiOutlineClose />
        </IconSpan>
      </TextButtonContainer>
    </Modal>
  );
}

export default InformationModal;
