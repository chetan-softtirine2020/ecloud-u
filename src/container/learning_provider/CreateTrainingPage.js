import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import DatePicker from "react-datepicker";
import { createTraining } from "../../actions/learning_provider/training_action";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate } from "react-router-dom";
const CreateTrainingPage = () => {
  const [traning, setTraining] = useState({
    name: "",
    date: new Date(),
    description: "",
    link: "",
  });
  const dispatch = useDispatch();
  const state = useSelector((state) => state.trainingReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTraining(traning));
  };
  if (state.is_done) {
    // setTraining({
    //   name: "",
    //   date: "",
    //   description: "",
    //   link: "",
    // });
    return <Navigate to="/all-trainings" />;
  }
  
  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="">
            <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
              <div className="card-body p-3 w-100 bg-current border-0 d-flex rounded-lg">
                <a href="default-settings.html" className="d-inline-block mt-2">
                  <i className="ti-arrow-left font-sm text-white"></i>
                </a>
                <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                  Create Training
                </h4>
              </div>
              <div className="card-body p-4 w-100 border-0 ">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Training Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={traning.name}
                          onChange={(e) =>
                            setTraining({ ...traning, name: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.name : ""}
                        </span>
                      </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Metting Link
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={traning.link}
                          onChange={(e) =>
                            setTraining({ ...traning, link: e.target.value })
                          }
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.link : ""}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-2">
                      <div className="form-group">
                        <label className="mont-font fw-600 font-xsss">
                          Date&Time
                        </label>
                        <DatePicker
                          selected={traning.date}
                          onChange={(date) =>
                            setTraining({ ...traning, date: date })
                          }
                          showTimeSelect
                          dateFormat="Pp"
                        />
                        <span className="error-msg">
                          {state.errors ? state.errors.date : ""}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 mb-2">
                      <label className="mont-font fw-600 font-xsss">
                        Description
                      </label>
                      <textarea
                        className="form-control mb-0 p-3 h100 bg-greylight lh-16"
                        rows="5"
                        placeholder="Write your message..."
                        spellCheck="true"
                        onChange={(e) =>
                          setTraining({
                            ...traning,
                            description: e.target.value,
                          })
                        }
                        value={traning.description}
                      />
                      <span className="error-msg">
                        {state.errors ? state.errors.description : ""}
                      </span>
                    </div>

                    <div className="col-lg-12">
                      <input
                        type="submit"
                        name="submit"
                        value="Submit"
                        className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default CreateTrainingPage;
