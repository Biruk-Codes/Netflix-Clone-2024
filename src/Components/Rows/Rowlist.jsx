import React from 'react'
import Row from '../Row/Row' 
import '../../../utils/requests'
import requests from '../../../utils/requests'
export default function RowList() {
  return (
    <>
    <Row 
    title="NETFLIX ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals }
    isLargeRow={true}
    />
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    
    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Tv Shows" fetchUrl={requests.fetchTvShow}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    
    </> 
  )
}