import axios from "axios";
import { useQuery } from "react-query";

async function fetchUserReqest() {
  const res = await axios.get("/api/current_user");
  return res.data;
}

export const useFetchUserQuery = () => {
  return useQuery("fetch_user", fetchUserReqest);
};
