import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "d89e1c18101e3caac2ccac85db5049ff",
    languange: "ko-KR",
  },
});

export default instance;
