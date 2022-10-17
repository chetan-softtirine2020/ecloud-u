import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppBody from "../components/AppBody";
import DatePicker from "react-datepicker";
import { createTraining } from "../../actions/learning_provider/training_action";
import "react-datepicker/dist/react-datepicker.css";
import { Link, Navigate } from "react-router-dom";

const CreateTrainingPage = (fn) => {
  const [traning, setTraining] = useState({
    name: "",
    date: new Date(),
    description: "",
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
    // });
    return <Navigate to="/all-trainings" />;
  }
 

  return (
     <AppBody
        loading={state.loading}
        content={
          <div className="middle-sidebar-left">
            <div className="">
              <div className="card">
                <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
                  <Link
                    to={"/create-training"}
                    className="d-inline-block mt-2"
                  ></Link>
                  <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                    Create Training
                  </h4>
                </div>
                <div className="card-body w-100 border-0 ">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-8 mb-2">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Training Name
                          </label>
                          <input
                            placeholder="Enter Training Name..."
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
                      <div className="col-lg-4 mb-2">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Date & Time
                          </label>
                          <DatePicker
                            className="form-control"
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
                          className="form-control mb-0 p-3 h100 lh-16"
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

                      <div className="col-lg-12 my-3">
                        <input
                          type="button"
                          name="submit"
                          value="Submit"
                          className="btn-common px-5"
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
