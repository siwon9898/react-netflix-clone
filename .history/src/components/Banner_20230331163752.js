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
    //요청 받은 다음에 가져오기
    const request = await axios.get(requests.fetchNowPlaying);
  };

  return <div></div>;
}
