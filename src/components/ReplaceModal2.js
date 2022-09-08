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
  const textName = ["soc3", "soc6", "soc13", "soc19", "soc20"];
  //   const onSubmit = (data) => {};
  const { replacePerson } = bindActionCreators(actionCreators, dispatch);

  const setTextName = (replaceWith) => {
    replacePerson({
      apnId: props.apnId,
      replacePerson: props.replacePerson,
      replaceWith,
    });
    props.closeModal2();
  };

  return (
    <Modal
      isOpen={props.modalState2}
      ariaHideApp={false}
      onRequestClose={props.closeModal2}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ModalHeader>replace soc1 with</ModalHeader>
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
