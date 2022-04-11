import { useEffect, useState } from "react";
import { api } from "./api/Api";
import "./App.css";
import Movies from "./components/movies/Movies";
import Preloader from "./components/Preloader/Preloader";
import Search from "./components/search/Search";
import Slider from "./components/slider/Slider";


function App() {
 
  console.log('render')
  let [isLoaded, setIsLoaded] = useState(false);
  let [movies, setMovies] = useState([]);
  useEffect(()=>{
    api('iron man').then(res=>{
      setMovies(res.data);
      setIsLoaded(true);
    })
  },[])
  let SearchApi = async (search) => {
    setIsLoaded(false);
    setMovies([]);
    let res = await api(search);
    setMovies(res.data);
    setIsLoaded(true);
  };
 
  return (
    <div className="App">
      <Search SearchApi={SearchApi} />
     
        
{isLoaded ? (
       <Slider  movies={movies.Search}/>
      ) : (
        <Preloader/>
      )}
    
        
  
      </div>
      
    
  );
}

export default App;
