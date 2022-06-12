import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import {
  createCourse,
  getCoureseList,
} from "../../actions/course/course_action";
import { useDispatch, useSelector } from "react-redux";

const CourseCreateModel = (props) => {
  const dispatch = useDispatch();
  const [course, setAddCoure] = useState({
    name: "",
    amount: "",
    is_paid: 1,
    is_public: 1,
    description: "",
    course_id: "",
  });
  const state = useSelector((state) => state.courseReducer);

  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    props.onAddClick(2);
    setShow(false);
  };

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(course));
  };

  if (state.isCourseCreated && show) {
    props.onAddClick(2);
    setShow(false);
    dispatch(getCoureseList());
  }

  return (
    <div>
      <Modal show={show} onHide={handleClose} size={"lg"}>
        <Modal.Header closeButton>
          <Modal.Title>Add Course </Modal.Title>
        </Modal.Header>
        <Modal.Body className="err-model-body">
          <form onSubmit={handleCourseSubmit}>
            <div className={"row"}>
              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">
                    Course Name
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={course.name}
                    onChange={(e) =>
                      setAddCoure({ ...course, name: e.target.value })
                    }
                  />
                  <span className="error-msg">
                    {state.errors.name ? state.errors.name : ""}
                  </span>
                </div>
              </div>
              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">
                    Course Amount
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={course.amount}
                    onChange={(e) =>
                      setAddCoure({ ...course, amount: e.target.value })
                    }
                  />
                  <span className="error-msg">
                    {state.errors.amount ? state.errors.amount : ""}
                  </span>
                </div>
              </div>
            </div>

            <div className={"row"}>
              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">Is Paid</label>
                  <select
                    className="form-control"
                    name={"is_paid"}
                    onChange={(e) =>
                      setAddCoure({ ...course, is_paid: e.target.value })
                    }
                  >
                    <option
                      value={"1"}
                      selected={course.is_paid === 1 ? true : false}
                    >
                      Yes
                    </option>
                    <option
                      value={"0"}
                      selected={course.is_paid === 0 ? true : false}
                    >
                      No
                    </option>
                  </select>
                  <span className="error-msg">
                    {state.errors.is_paid ? state.errors.is_paid : ""}
                  </span>
                </div>
              </div>

              <div className="col-lg-6 mb-12">
                <div className="form-group">
                  <label className="mont-font fw-600 font-xsss">
                    Select Course Access
                  </label>
                  <select
                    className="form-control"
                    name={"is_public"}
                    onChange={(e) =>
                      setAddCoure({ ...course, is_paid: e.target.value })
                    }
                  >
                    <option
                      value={1}
                      selected={course.is_public === 1 ? true : false}
                    >
                      Public Access
                    </option>
                    <option
                      value={0}
                      selected={course.is_public === 0 ? true : false}
                    >
                      Not Public Access
                    </option>
                  </select>
                  <span className="error-msg">
                    {state.errors.is_public ? state.errors.is_public : ""}
                  </span>
                </div>
              </div>
            </div>

            <div className={"row"}>
              <div className="col-lg-12 mb-12">
                <textarea
                  name="description"
                  rows={2}
                  cols={12}
                  className="form-control"
                  onChange={(e) =>
                    setAddCoure({
                      ...course,
                      description: e.target.value,
                    })
                  }
                >
                  {course.description}
                </textarea>
                <span className="error-msg">
                  {state.errors.description ? state.errors.description : ""}
                </span>
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

export default CourseCreateModel;
