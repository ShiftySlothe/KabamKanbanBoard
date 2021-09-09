import { BrowserRouter, Route } from "react-router-dom";
import { AppContainer } from "./baseStyles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Landing } from "./Landing/Landing";
import { TaskBoard } from "./Taskboard/TaskBoard";

export const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Route exact path="/" component={Landing} />
        <Route exact path="/taskboard" component={TaskBoard} />
      </AppContainer>
    </BrowserRouter>
  );
};
