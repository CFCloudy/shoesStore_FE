import { Button, Modal } from "antd";
import React from "react";

import { CloseCircleOutlined } from "@ant-design/icons";
import {
  ButtonCancle,
  ButtonOk,
  ModelWrapper,
  WrapperFooter,
} from "./PopupConfirmStyled";

export interface IModalDelete {
  openModalConfirm: boolean;
  changeActive: any;
  title: string;
  content: string;
  handleAction: any;
  stateButton: boolean;
  buttonRight: string;
  buttonLeft: string;
  wrapper: any;
  loading?: boolean;
  checkBtnDisabled?: boolean;
  width?: string;
}
export const Confirm = (props: IModalDelete) => {
  const {
    title,
    content,
    openModalConfirm,
    width,
    changeActive,
    handleAction,
    buttonRight,
    buttonLeft,
    stateButton,
    wrapper,
  } = props;
  const handleClose = () => changeActive(false);
  return (
    <React.Fragment>
      <ModelWrapper
        open={openModalConfirm}
        onOk={handleAction}
        width={width || "380px"}
        closeIcon={<CloseCircleOutlined />}
        onCancel={handleClose}
        title={title}
        className="modalConfirm"
        footer={
          buttonLeft || buttonRight ? (
            <WrapperFooter>
              <ButtonCancle
                onClick={handleClose}
                style={{ marginLeft: buttonRight === "" ? "45px" : "0" }}
              >
                {buttonLeft}
              </ButtonCancle>
              <ButtonOk
                onClick={handleAction}
                loading={props.loading ? props.loading : false}
                disabled={
                  props.checkBtnDisabled ? props.checkBtnDisabled : false
                }
              >
                {buttonRight}
              </ButtonOk>
            </WrapperFooter>
          ) : null
        }
      >
        {wrapper}
        <p>{content}</p>
      </ModelWrapper>
    </React.Fragment>
  );
};
