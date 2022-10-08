import React from "react";
import "./App.css";
import SignUp from "./container/auth/SignUp";
import Login from "./container/auth/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./container/home/LandingPage";
import OrganizationDashboard from "./container/home/OrganizationDashboard";
import UserDashboard from "./container/home/UserDashboard";
import LearningProviderDashboard from "./container/home/LearningProviderDashboard";
import NotFoundPage from "./container/other/NotFoundPage";
import NotAuthorisedPage from "./container/other/NotAuthorisedPage";
import AddTrainingUser from "./container/learning_provider/AddTrainingUser";
import CreateTrainingPage from "./container/learning_provider/CreateTrainingPage";
import RegisterOrganization from "./container/organization/RegisterOrganization";
import ShowAllTrainings from "./container/learning_provider/ShowAllTrainings";
import ShowTrainingUser from "./container/learning_provider/ShowTrainingUser";
import UserWiseTraining from "./container/learning_provider/provider_user/UserWiseTraining";
import HomePage from "./container/home/HomePage";
import PlayCourse from "./container/courses/PlayCourse";
import CreateCourse from "./container/courses/CreateCourse";
import ProviderUserDashboard from "./container/learning_provider/provider_user/ProviderUserDashboard";
import OrganizationRequest from "./container/admin/OrganizationRequest";
import ShowAllOrg from "./container/admin/ShowAllOrg";
import NewRegisterOrganizations from "./container/admin/NewRegisterOrganizations";
// import CreateOrgTrainingPage from "./container/organization/CreateOrgTrainingPage";
// import ShowAllOrgTrainings from "./container/organization/ShowAllOrgTrainings";
import OrgUserDashboard from "./container/organization/org_user/OrgUserDashboard";
import EducloundMeet from "./container/EducloundMeet";
import ShowAllTrainingsDetails from "./container/learning_provider/ShowAllTrainingsDetails";
import JoinedTrainingUserDetails from "./container/learning_provider/JoinedTrainingUserDetails";
import ChangePasswordPage from "./container/auth/ChangePasswordPage";
import ForgotPassword from "./container/auth/ForgotPassword";
import ResetPassword from "./container/auth/ResetPassword";
import LearningProvidersList from "./container/admin/users/LearningProvidersList";
import AddOrgSubAdmin from "./container/organization/AddOrgSubAdmin";
import { PrivateRoute } from "./container/other/PrivateRoute";
import WhiteBoard from "./container/WhiteBoard";
import axios from "axios";
import { getToken } from "./config/api";
import AllCoures from "./container/courses/AllCoures";
import LearningProvidersUsersList from "./container/admin/users/LearningProvidersUsersList";
import AddSubAdmin from "./container/organization/org_subadmin/AddSubAdmin";
import NewOrgSubAdminRequest from "./container/admin/users/NewOrgSubAdminRequest";
import NewLearningProvidersRequest from "./container/admin/users/NewLearningProvidersRequest";
import OrgSubAdminList from "./container/admin/users/OrgSubAdminList";
import EditCourse from "./container/courses/EditCourse";
import ViewCourseByModulesAndTopic from "./container/courses/ViewCourseByModulesAndTopic";
import GCRegisterPage from "./container/google_cloud/GCRegisterPage";
import GCCreateVM from "./container/google_cloud/GCCreateVM";
import GCLoginPage from "./container/google_cloud/GCLoginPage";
import ShowVMList from "./container/google_cloud/ShowVMList";
import ShowVMDetails from "./container/google_cloud/ShowVMDetails";
import AssignUserToVM from "./container/google_cloud/AssignUserToVM";
import ShowVm from "./container/google_cloud/ShowVm";
import MainHomePage from "./container/home/MainHomePage";
import ShowPricingChart from "./container/admin/ShowPricingChart";

function App() {
  if (localStorage.getItem("token")) {
    const token = getToken();
    console.log("Totk" + token);
    //.substring(1, getToken().length - 1);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  return (
    <Router>
      <Routes>
        {/*Normal User */}

        <Route
          path={"/main-page"}
          caseSensitive={false}
          element={<MainHomePage />}
        />

        <Route path={"/vm/:name"} caseSensitive={false} element={<ShowVm />} />

        <Route
          path={"/my-trainings"}
          caseSensitive={false}
          element={<UserWiseTraining />}
        />
        <Route
          path={"/white-board"}
          caseSensitive={false}
          element={<WhiteBoard />}
        />
        <Route
          path={"/training/:slug"}
          caseSensitive={false}
          element={<EducloundMeet />}
        />

        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route
            path={"/users"}
            caseSensitive={false}
            element={<UserDashboard />}
          />
          <Route
            path={"/vm/:name"}
            caseSensitive={false}
            element={<ShowVm />}
          />
        </Route>

        {/*Provider */}
        <Route element={<PrivateRoute allowedRoles={["provider"]} />}>
          <Route
            path={"/learning-provider"}
            caseSensitive={false}
            element={<LearningProviderDashboard />}
          />
        </Route>

        {/*Provider User */}
        <Route element={<PrivateRoute allowedRoles={["provider_user"]} />}>
          <Route
            path={"/lpu-home"}
            caseSensitive={false}
            element={<ProviderUserDashboard />}
          />
          <Route
            path={"/vm/:name"}
            caseSensitive={false}
            element={<ShowVm />}
          />
        </Route>

        {/*Organization */}
        <Route element={<PrivateRoute allowedRoles={["organization"]} />}>
          <Route
            path={"/organization"}
            caseSensitive={false}
            element={<OrganizationDashboard />}
          />
          <Route
            path={"/org/add-org-sub-admin"}
            caseSensitive={false}
            element={<AddOrgSubAdmin />}
          />
          <Route
            path={"/org/add-org-subadmin"}
            caseSensitive={false}
            element={<AddSubAdmin />}
          />
        </Route>

        {/*Organization User */}
        <Route element={<PrivateRoute allowedRoles={["organization_user"]} />}>
          <Route
            path={"/ou/home"}
            caseSensitive={false}
            element={<OrgUserDashboard />}
          />
          <Route
            path={"/vm/:name"}
            caseSensitive={false}
            element={<ShowVm />}
          />
        </Route>

        {/*Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route
            path={"/admin/home"}
            caseSensitive={false}
            element={<HomePage />}
          />
          <Route
            path={"/admin/vm-pricing-chart"}
            caseSensitive={false}
            element={<ShowPricingChart />}
          />

          <Route
            path={"/admin/organizations"}
            caseSensitive={false}
            element={<ShowAllOrg />}
          />
          <Route
            path={"/admin/approve-organizations"}
            caseSensitive={false}
            element={<NewRegisterOrganizations />}
          />
          <Route
            path={"/admin/learning-providers"}
            caseSensitive={false}
            element={<LearningProvidersList />}
          />
          <Route
            path={"/admin/learning-provider-users-list/:slug"}
            caseSensitive={false}
            element={<LearningProvidersUsersList />}
          />
          <Route
            path={"/get-organizations"}
            caseSensitive={false}
            element={<OrganizationRequest />}
          />
          <Route
            path={"/admin/org-sub-admin-requests"}
            caseSensitive={false}
            element={<NewOrgSubAdminRequest />}
          />
          <Route
            path={"/admin/org-sub-admin"}
            caseSensitive={false}
            element={<OrgSubAdminList />}
          />
          <Route
            path={"/admin/learning-provider-requests"}
            caseSensitive={false}
            element={<NewLearningProvidersRequest />}
          />
        </Route>

        {/*Provider And Organization Routes */}
        <Route
          element={
            <PrivateRoute
              allowedRoles={["provider", "organization", "org_subadmin"]}
            />
          }
        >
          <Route
            path={"/create-training"}
            caseSensitive={false}
            element={<CreateTrainingPage />}
          />

          <Route
            path={"/register-cloud-account"}
            caseSensitive={false}
            element={<GCRegisterPage />}
          />
          <Route
            path={"/authorize-cloud-account"}
            caseSensitive={false}
            element={<GCLoginPage />}
          />

          <Route
            path={"/create-vm"}
            caseSensitive={false}
            element={<GCCreateVM />}
          />
          <Route
            path={"/vm-list"}
            caseSensitive={false}
            element={<ShowVMList />}
          />
          <Route
            path={"/vm-details/:name"}
            caseSensitive={false}
            element={<ShowVMDetails />}
          />

          <Route
            path={"/assign-vm-to-user"}
            caseSensitive={false}
            element={<AssignUserToVM />}
          />

          <Route
            path={"/vm/:name"}
            caseSensitive={false}
            element={<ShowVm />}
          />

          <Route
            path={"/course/:slug"}
            caseSensitive={false}
            element={<PlayCourse />}
          />

          <Route
            path={"/create-course"}
            caseSensitive={false}
            element={<CreateCourse />}
          />

          <Route
            path={"/course-view/:slug"}
            caseSensitive={false}
            element={<ViewCourseByModulesAndTopic />}
          />

          <Route
            path={"/edit-course/:slug"}
            caseSensitive={false}
            element={<EditCourse />}
          />

          <Route
            path={"/all-courses"}
            caseSensitive={false}
            element={<AllCoures />}
          />

          <Route
            path={"/all-trainings"}
            caseSensitive={false}
            element={<ShowAllTrainings />}
          />
          <Route
            path={"/completed-trainings"}
            caseSensitive={false}
            element={<ShowAllTrainingsDetails />}
          />
          <Route
            path={"/completed-training-users/:slug"}
            caseSensitive={false}
            element={<JoinedTrainingUserDetails />}
          />
          <Route
            path={"/add-training-user/:slug"}
            caseSensitive={false}
            element={<AddTrainingUser />}
          />
          <Route
            path={"/show-training-users/:slug"}
            caseSensitive={false}
            element={<ShowTrainingUser />}
          />
        </Route>

        {/*Comman  Private Routes */}

        <Route
          path={"/change-password"}
          caseSensitive={false}
          element={<ChangePasswordPage />}
        />

        {/*Public Routes */}
        <Route path="/" caseSensitive={false} element={<LandingPage />} />
        <Route path={"/login"} caseSensitive={false} element={<Login />} />
        <Route path={"/register"} caseSensitive={false} element={<SignUp />} />
        <Route
          path={"/forgot-password"}
          caseSensitive={false}
          element={<ForgotPassword />}
        />
        <Route
          path={"/reset-password/:i_t"}
          caseSensitive={false}
          element={<ResetPassword />}
        />
        <Route
          path={"/register-organization"}
          caseSensitive={false}
          element={<RegisterOrganization />}
        />
        <Route path="/not-authorized" element={<NotAuthorisedPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
