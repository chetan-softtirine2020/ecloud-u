import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getCoureseList } from "../../actions/course/course_action";

const AllCoures = () => {
  const state = useSelector((state) => state.courseReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCoureseList());
  }, []);

  const handelClick = (slug) => {
    navigate("/course-view/" + slug);
  };

  const handelStartCourse = (slug) => {
    navigate("/course/" + slug);
  };

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/create-training"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                All Courese
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Courese Name</th>
                      <th>Courese Amount</th>
                      <th>Description</th>
                      <th className="tblaction">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.courseList &&
                      state.courseList.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.name}</td>
                          <td>{li.amount}</td>
                          <td>{li.description}</td>

                          {/* <td>{li.description}</td>*/}
                          <td className="tblaction">
                          <a className="line-height-36 custom-icon mr-2" title="Start" onClick={() => handelStartCourse(li.slug)}>
                            <i className="feather-play-circle"></i>
                          </a>
                          <a className="line-height-36 custom-icon mr-2" title="Edit" onClick={() => handelClick(li.slug)}>
                            <i className="feather-edit"></i>
                          </a>
                            {/* <input
                              type="button"
                              value="Start"
                              className="btn approve_btn btn-common"
                              onClick={() => handelStartCourse(li.slug)}
                            />                        
                            <input
                              type="button"
                              value="Edit"
                              className="btn approve_btn btn-common"
                              onClick={() => handelClick(li.slug)}
                            /> */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default AllCoures;
