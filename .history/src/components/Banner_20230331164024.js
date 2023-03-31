import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import requests from "../api/request";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //비동기 요청
    //현재 상영중인 영화 정보 가져오기(여러 영화)
    //요청 받고 기다린 다음에 가져와야함
    const request = await axios.get(requests.fetchNowPlaying);
    //여러 영화 중 하나의 영화를 가져와야한다.

    const movieId =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ].id;
  };

  return <div></div>;
}
