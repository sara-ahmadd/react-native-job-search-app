import { useState, useEffect } from "react";
import { API_KEY } from "@env";
import axios from "axios";

const useFetch = (endPoint, searchQuery) => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    params: { ...searchQuery },
    headers: {
      "X-RapidAPI-Key": `6d1b92e32bmsh7d1bd75fe9fb96ap1968e2jsna3b506b62fda`,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const getJobs = async () => {
    setIsLoading(true);
    try {
      // const response = await axios.request(options);
      setIsLoading(false);
      setJobs(response.data.data);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  const refetch = () => {
    setIsLoading(true);
    getJobs();
  };
  return { jobs, isLoading, error, refetch };
};

export default useFetch;
