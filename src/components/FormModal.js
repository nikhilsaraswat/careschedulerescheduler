import Modal from "react-modal";
import React from "react";
import { useForm } from "react-hook-form";

import {
  ModalCancel,
  ModalSubmit,
  ModalFooter,
  InputField,
  InputSpan,
  InputContainer,
  ModalBody,
  ModalHeader,
  customStyles,
} from "../styledComponent/index";

function FormModal(props) {
  const { register, handleSubmit, reset } = useForm();
  // console.log(register);

  const onSubmit = (data) => {
    if (
      data.p1 &&
      data.p2 &&
      data.p3 &&
      data.p4 &&
      data.Task &&
      data.Date &&
      data.Time
    ) {
      props.onModalSubmit(data);
      props.openModal();
    }
    reset();
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.openModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Create Appointment</ModalHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <InputContainer>
            <InputSpan>Health:</InputSpan>
            <InputField {...register("p1")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Social:</InputSpan>
            <InputField {...register("p2")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Educational:</InputSpan>
            <InputField {...register("p3")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>CYP:</InputSpan>
            <InputField {...register("p4")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Task:</InputSpan>
            <InputField {...register("Task")}></InputField>
          </InputContainer>
          {/* <InputContainer>
            <InputSpan>Gender:</InputSpan>
            <InputField {...register("Gender")}></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Age:</InputSpan>
            <InputField {...register("Age")}></InputField>
          </InputContainer> */}
          <InputContainer>
            <InputSpan>Date:</InputSpan>
            <InputField
              {...register("Date")}
              type="number"
              min="1"
              max="31"
              placeholder="Type a number 1 - 31"
            ></InputField>
          </InputContainer>
          <InputContainer>
            <InputSpan>Time:</InputSpan>
            <InputField {...register("Time")} type="Time"></InputField>
          </InputContainer>
        </ModalBody>
        <ModalFooter>
          <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel>
        </ModalFooter>
      </form>
    </Modal>
  );
}

export default FormModal;
