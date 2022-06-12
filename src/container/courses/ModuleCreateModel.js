import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { createCourseModule,getCoureseWiseModuleList } from "../../actions/course/course_action";
import { useDispatch, useSelector } from "react-redux";

const ModuleCreateModel = (props) => {
  const dispatch = useDispatch();

  const [module, setAddModule] = useState({
    course_id: props.courseId,
    name: "",
  });
  const state = useSelector((state) => state.courseReducer);

  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    props.onAddClick(2);
    setShow(false);
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourseModule(module));
  };
   

  
  if (state.is_done && show) {
    props.onAddClick(2);
    setShow(false);
    dispatch(getCoureseWiseModuleList({ course_id: module.course_id }));
  }
   console.log(module.course_id)

  return (
    <div >
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Add Module </Modal.Title>
        </Modal.Header>
        <Modal.Body className="err-model-body">
          <form onSubmit={handleCourseSubmit}>
            <div className={"row"}>
              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">
                    Select Course
                  </label>
                  <select
                    className="form-control"
                    name={"course_id"}
                    onChange={(e) =>
                         setAddModule({ ...module, course_id: e.target.value })
                     }
                  >
                    <option>Select Course</option>
                    {state.courseList &&
                      state.courseList.map((li, i) => 
                        <option
                          value={li.id}
                          key={i + 1}
                          defaultValue={module.course_id === li.id ? true : false}
                        >
                          {li.name}
                        </option>
                      )}
                  </select>
                  <span className="error-msg">
                    {state.errors.course_id ? state.errors.course_id : ""}
                  </span>
                </div>
              </div>

              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">
                    Module Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={module.name}
                    onChange={(e) =>
                      setAddModule({ ...module, name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className={"row"}>
              <div className="col-lg-3">
                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                  className="btn-common px-5 mt-30"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModuleCreateModel;
