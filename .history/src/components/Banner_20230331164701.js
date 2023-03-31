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

    //특정 영화의 더 상세한 정보를 가져오기 (비디오 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button info">More Information</button>
        </div>
        <h1 className="banner_description">{movie.overview}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}
