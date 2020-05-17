import React from "react";
import DefaultTemplate from "./components/layout/default/Template";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faClock,
  faDatabase,
  faFilter,
  faServer,
  faSortAmountUp,
  faSortAmountUpAlt,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCheckCircle,
  faClock,
  faDatabase,
  faFilter,
  faServer,
  faSortAmountUp,
  faSortAmountUpAlt,
  faTerminal,
);

function App() {
  return <DefaultTemplate />;
}

export default App;
