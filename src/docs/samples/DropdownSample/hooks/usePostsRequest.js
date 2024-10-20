import { useEffect } from "react";
import useRequest from "./useRequest";

const usePostsRequest = () => {
  const { makeRequest, loading, result } = useRequest([]);

  useEffect(() => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
  }, [])

  return {
    result,
    loading
  }
}

export default usePostsRequest;