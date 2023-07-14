import { useState, useEffect } from "react";
import { API_KEY } from "@env";
import axios from "axios";

const useFetch = (endPoint, searchQuery) => {
  const [jobs, setJobs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jobsearch4.p.rapidapi.com/api/v1/Jobs/${endPoint}`,
    params: { SearchQuery: searchQuery },
    headers: {
      "X-RapidAPI-Key": `${API_KEY}`,
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
  };

  const getJobs = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setIsLoading(false);
      setJobs(response.data.data);
      // console.log(response.data.data.map((x) => x));
    } catch (error) {
      setIsLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const reFetch = () => {
    setIsLoading(true);
    getJobs();
  };

  return { jobs, isLoading, error, reFetch };
};

export default useFetch;
