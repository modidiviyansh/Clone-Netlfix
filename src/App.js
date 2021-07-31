import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';


function App() {
  return (
    <div className="App">
      {/*Nav*/}
      {
        /*Banner*/
        <Banner></Banner>
      }
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Starrers" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
    </div>
  );
} 

export default App;
