import React, { useEffect } from "react";
import AppBody from "../components/AppBody";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  deleteTopicData,
  getCureseModuleTopicWiseList,
} from "../../actions/course/course_action";

const ViewCourseByModulesAndTopic = () => {
  const state = useSelector((state) => state.courseReducer);
  let { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCureseModuleTopicWiseList({ slug: slug }));
  }, []);

  const handelClick = (slug) => {
    navigate("/edit-course/" + slug);
  };

  const deleteCourseTopic = (tslug) => {
    alert(tslug);
    dispatch(deleteTopicData({ slug: tslug }));
  };
  
  if (state.is_done) {
    navigate("/all-courses");
  }

  return (
    <AppBody
      loading={state.loading}
      content={
        <div className="middle-sidebar-left">
          <div className="card w-100 border-0 shadow-xs p-0 mb-4">
            <div className="card-header p-3 w-100 border-0 d-flex rounded-lg">
              <Link to={"/all-courses"} className="d-inline-block mt-2">
                <i className="ti-arrow-left font-sm text-white"></i>
              </Link>
              <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                Courese Topics
              </h4>
            </div>
            <div className="card-body p-4 w-100 border-0 ">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sr.No</th>
                      <th>Courese</th>
                      <th>Module</th>
                      <th>Topic</th>
                      <th className="tblaction">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.list &&
                      state.list.map((li, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{li.course}</td>
                          <td>{li.module}</td>
                          <td>{li.topic}</td>

                          {/* <td>{li.description}</td>*/}
                          <td className="tblaction">
                            <button
                              type="button"
                              title="Edit"
                              className="line-height-23 custom-icon mr-2"
                              onClick={() => handelClick(li.tslug)}
                            >
                              {" "}
                              <i className="feather-edit"></i>
                            </button>

                            <button
                              type="button"
                              title="Delete"
                              className="line-height-23 custom-icon mr-2"
                              onClick={() => deleteCourseTopic(li.tslug)}
                            >
                              <i className="feather-delete"></i>{" "}
                            </button>
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

export default ViewCourseByModulesAndTopic;
