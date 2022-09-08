import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/actions/index";

import {
  ModalFooter,
  ModalBody,
  ModalHeader,
  customStyles,
  PersonButton,
} from "../styledComponent/index";

function ReplaceModal(props) {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const textName = ["add1", "add2", "add3", "add4", "add5"];
  //   const onSubmit = (data) => {};
  const { replacePerson } = bindActionCreators(actionCreators, dispatch);

  const setTextName = (replaceWith) => {
    replacePerson({
      apnId: props.apnId,
      replacePerson: props.replacePerson,
      replaceWith,
    });
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.modalState}
      ariaHideApp={false}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>Text</ModalHeader>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
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
          {textName.map((name, i) => (
            //console.log(name)
            <PersonButton key={i} onClick={() => setTextName(name)}>
              {name}
            </PersonButton>
          ))}
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <ModalSubmit>Submit</ModalSubmit>
          <ModalCancel onClick={props.openModal}>Cancel</ModalCancel> */}
      </ModalFooter>
      {/* </form> */}
    </Modal>
  );
}

export default ReplaceModal;
