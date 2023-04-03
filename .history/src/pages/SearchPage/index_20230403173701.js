import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";

export default function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q"); //첫번째 문자로 된 파라미터를 가져옴

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/mutli?include_adult=false&query=${searchTerm}`
      );
      setSearchResult(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <div>SearchPage</div>;
}
