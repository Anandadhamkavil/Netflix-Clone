import './App.css';
import Row from './components/Row'
import request from './request'
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner/>
     <Row isPoster={true} title='NetFlix Originals' fetchUrl={request.fetchNetflixOriginals}/> 
     <Row title='Trending' fetchUrl={request.fetchTrending}/> 
     <Row title='Top Rated' fetchUrl={request.fetchTopRated}/> 
     <Row title='Action' fetchUrl={request.fetchActionMovies}/> 
     <Row title='Comedy' fetchUrl={request.fetchComedyMovies}/> 
     <Row title='Horror' fetchUrl={request.fetchHorrorMovies}/> 
     <Row title='Romance' fetchUrl={request.fetchRomanceMovies}/> 
     <Row title='Documentary' fetchUrl={request.fetchDocumentaries}/> 

    </div>
  );
}

export default App;
