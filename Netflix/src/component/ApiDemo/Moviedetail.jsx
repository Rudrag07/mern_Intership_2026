import axios from "axios";
import { useEffect, useState } from "react";

function Moviedetail() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Search Movies
  const fetchMovies = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&apikey=20b4e4aa`)
      .then((res) => {
        setMovies(res.data.Search || []);
        setSelectedMovie(null); // grid show kare
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Full Detail
  const getFullDetail = (id) => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=20b4e4aa`)
      .then((res) => {
        setSelectedMovie(res.data); // grid hide, detail show
      });
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{color:"cyan",fontFamily:"emoji",}}>Watchig All Movie's</h1>
      {/* 🔍 Search */}
      {!selectedMovie && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search Movie Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px", width: "300px" }}
          />
          <button onClick={fetchMovies} style={{ padding: "8px", marginLeft: "10px" }}>
            Search
          </button>
        </div>
      )}

      {/* 🎬 GRID VIEW */}
      {!selectedMovie && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              style={{ border: "1px solid white", padding: "10px" }}
            >
              <img src={movie.Poster} width="100%" alt={movie.Title} />
              <h4>{movie.Title}</h4>
              <button onClick={() => getFullDetail(movie.imdbID)}>
                Detail
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🎥 FULL DETAIL VIEW */}
      {selectedMovie && (
        <div style={{ display: "flex", gap: "30px" }}>
          <img
            src={selectedMovie.Poster}
            width="350px"
            alt={selectedMovie.Title}
          />

          <div>
            <h1>{selectedMovie.Title}</h1>
            <p><b>Year:</b> {selectedMovie.Year}</p>
            <p><b>Genre:</b> {selectedMovie.Genre}</p>
            <p><b>Director:</b> {selectedMovie.Director}</p>
            <p><b>Actors:</b> {selectedMovie.Actors}</p>
            <p><b>Plot:</b> {selectedMovie.Plot}</p>
            <p><b>IMDB Rating:</b> ⭐ {selectedMovie.imdbRating}</p>

            <button
              onClick={() => setSelectedMovie(null)}
              style={{ marginTop: "20px", padding: "10px" }}
            >
              ⬅ Back to Movies
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Moviedetail;
