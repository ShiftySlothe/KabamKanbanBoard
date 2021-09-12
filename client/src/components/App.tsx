import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import { TaskBoard } from "./Taskboard/TaskBoard";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Landing} />
      <Route exact path="/taskboard" component={TaskBoard} />
    </BrowserRouter>
  );
};
