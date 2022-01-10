import authReducer from "./auth_reducer";
import { combineReducers } from "redux";
import organizationReducer from "./organization/org_reducer";
import trainingReducer from "./learning_provider/training_reducer"; 
import trainingUserReducer from "./learning_provider/training_user_reducer";
import puTrainingReducer from "./learning_provider/provider_user/pu_training_reducer";  
import adminOrgReducer from "./admin/admin_org_reducer";
import orgTrainingReducer from "./organization/org_training_reducer";
const rootReducer = combineReducers({
  authReducer: authReducer,
  adminOrgReducer:adminOrgReducer,
  orgTrainingReducer:orgTrainingReducer,
  organizationReducer: organizationReducer,
  trainingReducer:trainingReducer, 
  trainingUserReducer:trainingUserReducer,
  puTrainingReducer:puTrainingReducer,
});

export default rootReducer;
