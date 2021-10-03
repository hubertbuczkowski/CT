import React from "react";
import { connect } from "react-redux";
import style from "./Modal.module.css";
import { toogleModal } from "../../../redux/actions/modal";
import { Cancel } from "@material-ui/icons";

type Props = {
  openModal: ?string,
  name: string,
  title: string,
  onClose: Function,
  children: Node,
};

const Modal = ({ openModal, name, title, onClose, children }: Props) => {
  return (
    <div
      className={openModal === name ? style.background : style.invisible}
      onClick={onClose}
    >
      <div className={style.content} onClick={() => false}>
        <div className={style.header}>
          <strong className={style.title}>{title}</strong>
          <button onClick={onClose}>
            <Cancel className={style.closeIcon} />
          </button>
        </div>
        <div className={style.body}>{children}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { openModal } = state.modal;
  return {
    openModal,
  };
};

const mapDispatchProps = (dispatch) => ({
  onClose: () => {
    dispatch(toogleModal(null));
  },
});

export default connect(mapStateToProps, mapDispatchProps)(Modal);
