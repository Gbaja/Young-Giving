import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import alertReducer from "./alert_reducer";
import authReducer from "./auth_reducer";
import mentees_reducer from "./mentees_reducer";
import mentors_reducer from "./mentors_reducer";
import profileReducer from "./profile_reducer";
import univesitiesReducer from "./universities_reducer";
import pendingReducer from "./pending_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  alert: alertReducer,
  mentees: mentees_reducer,
  mentors: mentors_reducer,
  profile: profileReducer,
  universities: univesitiesReducer,
  pending: pendingReducer
});

export default rootReducer;
