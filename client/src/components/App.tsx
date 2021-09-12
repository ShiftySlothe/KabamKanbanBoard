import { Box } from "@chakra-ui/layout";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing/Landing";
import { TaskBoard } from "./Taskboard/TaskBoard";

export const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/taskboard" component={TaskBoard} />
      </Box>
    </BrowserRouter>
  );
};
