import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import cartCounter from "./middlewares/cartCounter";
import thunk from "redux-thunk";

composeWithDevTools();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, logger, thunk))
);

export default store;
