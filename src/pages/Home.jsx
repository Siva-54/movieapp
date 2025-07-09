import { useEffect, useState } from "react"
import { getPopularMovies, searchMovies} from "../services/api";
import MovieCard from "../components/MovieCard"
import '../css/Home.css'


function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
                }   
            catch(err){
                console.log(err);
                setError("Failed to load");
            }
            finally{
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])

    const handleSearch = async (e)=>{
        e.preventDefault() //Prevents page refresh 
        if(!searchQuery.trim()) return
        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery) 
            setMovies(searchResults)
            setError(null)
        }catch(error){
            console.log(error);
            setError("Failed to search movie")
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <div className="home" >
            <form onSubmit={handleSearch} className="search-form">
                <input 
                type="text" 
                className="search-input" 
                value={searchQuery}
                onChange={e=> setSearchQuery(e.target.value)}
                placeholder="Search movies..." />
                <button type="submit" className="search-button" >Search</button>
            </form>
            {error && <div className="error-message">{error}</div>}
            {
                loading? (<div className="loading">Loading...</div>) :
                (<div className="movie-grid">
                {movies.map((movie)=> 
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (<MovieCard key= {movie.id} movie = {movie}></MovieCard>
                ))}
                </div>)}
        </div>
    )
}

export default Home