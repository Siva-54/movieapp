import { useMovieContext } from '../contexts/MovieContext'
import '../css/Favorites.css'
import MovieCard from '../components/MovieCard'

function Favourites(){
    const {favourites} = useMovieContext();

    if(favourites.length>0 ){
        return(
            <div className='favourites'>
                <h2>Your Favourites</h2>
                <div className="movie-grid">
                    {favourites.map((movie)=> 
                    <MovieCard key= {movie.id} movie = {movie}></MovieCard>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="favourites-empty" >
            <h2>No Favourites to display</h2>
            <p>Add movies to favourites to get displayed here</p>
        </div>
    )
}
export default Favourites