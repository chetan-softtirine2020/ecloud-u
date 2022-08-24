import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addLineOfBusiness,
  getLineOfBusiness,
} from "../../actions/auth_action";

const AddLineOfBuniessModel = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const state = useSelector((state) => state.authReducer);

  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    props.onAddClick();
    setShow(false);
  };
  const handleSubmit = () => {
    dispatch(addLineOfBusiness({ name: title }));
  };

  if (show && state.isAddLob) {
    dispatch(getLineOfBusiness());
    setShow(false);
    props.onAddClick(false);
  }

  return (
    <div>
      <Modal
        className="custom-modal"
        show={show}
        onHide={handleClose}
        size={"md"}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Line Of Business </Modal.Title>
        </Modal.Header>
        <Modal.Body className="err-model-body">
          <form onSubmit={handleSubmit}>
            <div className={"row"}>
              <div className="col-lg-9 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">Add Name</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Line Of Business Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <span className="error-msg">
                  {state.errors.name ? state.errors.name : ""}
                </span>
              </div>
              <div className="col-lg-3 pt-2">
                <input
                  type="button"
                  name="submit"
                  readOnly={true}
                  value="Submit"
                  className="btn-common px-3 mt-30"
                  onClick={() => handleSubmit()}
                />
              </div>
            </div>
            <div className={"row"}></div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddLineOfBuniessModel;
