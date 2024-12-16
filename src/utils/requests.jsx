import React from "react";
const   = process.env.REACT_APP_ ;
const requests = {
  fetchTrending: "/trending/all/week? =${ }&language=en-US",
  fetchNetflixOriginals: "/discover/tv? =${ }&with_networks=213",
  fetchTopRatedMovies: "/movie/top_rated? =${ }&language=en-US",
  fetchActionMovies: "/discover/movie? =${ }&with_genres=28",
  fetchComedyMovies: "/discover/movie? =${ }&with_genres=35",
  fetchHorrorMovies: "/discover/movie? =${ }&with_genres=27",
  fetchRomanceMovies: "/discover/movie? =${ }&with_genres=10749",
  fetchDOcumentaries: "/discover/movie? =${ }&with_genres=99",
  fetchTvShow: "tv/popular? =${API_KEY}&language=en-Us&page=1",
};

export default requests;
