import { Box } from "@chakra-ui/layout";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import { TaskBoard } from "./Taskboard/TaskBoard";
import { QueryClient, QueryClientProvider } from "react-query";
import { useFetchUserQuery } from "../queries/auth";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Box>
          <Box display={{base: 'block', md: 'none'}} bg="red">Kabam isn't optimised for mobile just yet, please view on a broswer!</Box>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/taskboard" component={TaskBoard} />
        </Box>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
