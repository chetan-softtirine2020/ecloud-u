import authReducer from "./auth_reducer";
import { combineReducers } from "redux";
import organizationReducer from "./organization/org_reducer";
import trainingReducer from "./learning_provider/training_reducer";
import trainingUserReducer from "./learning_provider/training_user_reducer";
import puTrainingReducer from "./learning_provider/provider_user/pu_training_reducer";
import adminOrgReducer from "./admin/admin_org_reducer";
import orgTrainingReducer from "./organization/org_training_reducer";
import homeReducer from "./home/home_reducer";
import dashboardReducer from "./learning_provider/dashboard_reducer";
import adminUsersReducer from "./admin/admin_users";
import conferanceReducer from "./conferance_reducer";
const rootReducer = combineReducers({
  authReducer: authReducer,
  adminOrgReducer: adminOrgReducer,
  orgTrainingReducer: orgTrainingReducer,
  organizationReducer: organizationReducer,
  trainingReducer: trainingReducer,
  trainingUserReducer: trainingUserReducer,
  puTrainingReducer: puTrainingReducer,
  homeReducer: homeReducer,
  dashboardReducer: dashboardReducer,
  adminUsersReducer: adminUsersReducer,
  conferanceReducer:conferanceReducer,
});

export default rootReducer;
