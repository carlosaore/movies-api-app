import AllMoviesDiv from "./atoms/AllMoviesDiv";
import MovieCard from "./MovieCard";
import SelectCategoryDiv from "./atoms/SelectCategoryDiv";

const Main = props => (
    <>
        <SelectCategoryDiv {...props}>
            <label htmlFor="category">Filter by category </label>
            <select
                name="category"
                onChange={event => props.setCategoryFilter(event.target.value)}
            >
                <option value="all">All</option>
                {props.data.categories &&
                    props.data.categories.map((cat, index) => (
                        <option>{cat}</option>
                    )
                )}
            </select>
        </SelectCategoryDiv>

        <AllMoviesDiv {...props}>
            { props.data.movies !== undefined
                ? props.data.movies
                .filter(movie => props.categoryFilter === "all" || movie.genres.includes(props.categoryFilter))
                .map((movie) => (
                    <MovieCard
                        {...movie}
                        setFavoriteMovies={props.setFavoriteMovies}
                        favoriteMovies={props.favoriteMovies}
                        key={props.id}
                        index={props.index}
                        isFavorite={props.favoriteMovies.includes(movie.id)}
                    />
                ))
                : <p>...loading</p>
            }
        </AllMoviesDiv>

    </>
);

export default Main;
