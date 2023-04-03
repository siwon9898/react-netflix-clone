import React, { useEffect } from "react";
import axios from "../api/axios";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setmovies] = useState(second);
  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
  };

  return <div></div>;
}
