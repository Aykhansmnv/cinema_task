import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Content() {
  const movies = useSelector((state) => state.allDataReducer);
  console.log(movies);

  return (
    <section className="content-container">
      <div className="product-list">
        {movies.map((index) => (
          <div className="product">
            <Link to={"/item/:id"}>
              <h2>{index.Title}</h2>
              <div className="product-img">
                <img src={index.Poster} alt="movie-img" />
                <p className="product-tag">Onceden Satish</p>
                <p className="img-p">
                  <span className="session">Seanslar</span>
                  <span className="disclaimer">12+</span>
                </p>
              </div>
            </Link>
          </div>
        ))}

        <div className="product">
          <h2>Batman</h2>
          <div className="product-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD0mjmu3D4soRoCbMPSb0PRVihEKHxxDnCg&usqp=CAU"
              alt="batman"
            />
            <p className="product-tag">Onceden Satish</p>
            <p className="img-p">
              <span className="session">Seanslar</span>
              <span className="disclaimer">16+</span>
            </p>
          </div>
        </div>
        <div className="product">
          <h2>Spider-Man</h2>
          <div className="product-img">
            <img
              src="data:image/jpeg;base64,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"
              alt="spiderman"
            />
            <p className="product-tag">Onceden Satish</p>
            <p className="img-p">
              <span className="session">Seanslar</span>
              <span className="disclaimer">14+</span>
            </p>
          </div>
        </div>
        <div className="product">
          <h2>Thor</h2>
          <div className="product-img">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg"
              alt="thor"
            />
            <p className="product-tag">Onceden Satish</p>
            <p className="img-p">
              <span className="session">Seanslar</span>
              <span className="disclaimer">16+</span>
            </p>
          </div>
        </div>
        <div className="product">
          <h2>Iron-Man</h2>
          <div className="product-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg"
              alt="ironman"
            />
            <p className="product-tag">Onceden Satish</p>
            <p className="img-p">
              <span className="session">Seanslar</span>
              <span className="disclaimer">14+</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
