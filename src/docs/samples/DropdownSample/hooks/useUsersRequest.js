import { useEffect } from "react";
import useRequest from "./useRequest";

const useUsersRequest = () => {
  const { makeRequest, loading, result } = useRequest([]);

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/users")
  }, [])

  return {
    result,
    loading
  }
}

export default useUsersRequest;