import React from "react";

function Header() {
  return (
      <header>
        <div className="container" >
          <img src="./images/cpluslogo.svg" alt="cinema-plus-logo" />
          <div className="header-nav">
            <ul className="header-ul">
              <li><a href="https://www.cinemaplus.az/az/platinum/">Platinum</a></li>
              <li><a href="https://www.cinemaplus.az/az/dolby-atmos/">Dolby Atmos</a></li>
              <li><a href="https://www.cinemaplus.az/az/cinema/services/">Xidmetler</a></li>
              <li><a href="https://www.cinemaplus.az/az/cinema/about-cinemaplus/">Haqqimizda</a></li>
            </ul>
            <ul className="nav-ul">
              <li><a href="/">Bash sehife</a></li>
              <li><a href="https://www.cinemaplus.az/az/campaigns/">Aksiya</a></li>
              <li><a href="https://www.cinemaplus.az/az/tariffs/">Tarifler</a></li>
              <li><a href="https://www.cinemaplus.az/az/cinebonus/">CineBonus</a></li>
            </ul>
          </div>
        </div>
      </header>
  );
}

export default Header;
