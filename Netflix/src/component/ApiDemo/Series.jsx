import axios from "axios";
import { useEffect, useState } from "react";

function Series() {
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedSeries, setSelectedSeries] = useState(null);

  const fetchSeries = () => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&type=series&apikey=20b4e4aa`)
      .then((res) => {
        setSeries(res.data.Search || []);
        setSelectedSeries(null);
      });
  };

  useEffect(() => {
    fetchSeries();
  }, []);

  const getFullDetail = (id) => {
    axios
      .get(`https://www.omdbapi.com/?i=${id}&apikey=20b4e4aa`)
      .then((res) => {
        setSelectedSeries(res.data);
      });
  };

  // 🎬 Play Function
  const handlePlay = (title) => {
    alert(`You are watching: ${title}`);
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{color:"cyan",fontFamily:"emoji",}}>Watchig All Series</h1>
      {/* 🔍 Search */}
      {!selectedSeries && (
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Search Series Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: "8px", width: "300px" }}
          />
          <button 
            onClick={fetchSeries} 
            style={{ padding: "8px", marginLeft: "10px" }}
          >
            Search
          </button>
        </div>
      )}

      {/* 📺 GRID VIEW */}
      {!selectedSeries && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
          }}
        >
          {series.map((item) => (
            <div
              key={item.imdbID}
              style={{ border: "1px solid white", padding: "10px" }}
            >
              <img src={item.Poster} width="100%" alt={item.Title} />
              <h4>{item.Title}</h4>

              {/* ▶ Play Button */}
              <button onClick={() => handlePlay(item.Title)}>
                ▶ Play
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 🎥 FULL DETAIL VIEW */}
      {selectedSeries && (
        <div style={{ display: "flex", gap: "30px" }}>
          <img
            src={selectedSeries.Poster}
            width="350px"
            alt={selectedSeries.Title}
          />

          <div>
            <h1>{selectedSeries.Title}</h1>
            <p><b>Year:</b> {selectedSeries.Year}</p>
            <p><b>Genre:</b> {selectedSeries.Genre}</p>
            <p><b>Director:</b> {selectedSeries.Director}</p>
            <p><b>Actors:</b> {selectedSeries.Actors}</p>
            <p><b>Total Seasons:</b> {selectedSeries.totalSeasons}</p>
            <p><b>Plot:</b> {selectedSeries.Plot}</p>
            <p><b>IMDB Rating:</b> ⭐ {selectedSeries.imdbRating}</p>

            <button
              onClick={() => setSelectedSeries(null)}
              style={{ marginTop: "20px", padding: "10px" }}
            >
              ⬅ Back to Series
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Series;
