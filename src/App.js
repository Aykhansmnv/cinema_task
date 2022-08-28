import {lazy,Suspense,useEffect} from 'react';
import {Route , Routes} from 'react-router-dom';
import "./css/style.scss"
import axios from "axios";
import {useDispatch} from "react-redux"
const Home = lazy(() => import("./pages/Home"))
const Movie = lazy(() => import("./pages/Movie"))

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    .then(res => res.data)
    .then(res => dispatch({type:"ALL_DATA",payload:res}))
  },[])

  return (
    <Routes>  
      <Route path='/' element={
      <Suspense feelback={<h1>Loading...</h1>}>
        <Home />
      </Suspense>
    } />
    <Route path='/item/:id' element={
      <Suspense feelback={<h1>Loading...</h1>}>
        <Movie />
      </Suspense>
    } />
    </Routes>
    
  );
}

export default App;
