import React from 'react'
// import { AiOutlineFacebook,AiOutlineYoutube,AiFillInstagram } from 'react-icons/ai';
// import { FaTelegramPlane } from 'react-icons/fa';    !!!correct?


function Footer() {
  return (
    <footer>
        <div className='announcement'>
            <img src='https://www.cinemaplus.az/site/assets/files/1/qayitdiq_website_png_image.png' alt='img'/>
        </div>
        
        <section className='about-us'>
          <div className='footer-container'>
            <div className='footer-contact'>
              <div className='contact'>
              <ul>
                <li><h4><a href='/'>Haqqimizda</a></h4></li>
                <li><h4><a href='/'>Xidmetler</a></h4></li>
                <li><h4><a href='/'>Qaydalar</a></h4></li>
              </ul>
              <ul>
              <li><h4><a href='/'>FAQ</a></h4></li>
              <li><h4><a href='/'>Vakansiyalar</a></h4></li>
              <li><h4><a href='/'>Elaqe</a></h4></li>
              </ul>
              </div>
              <p></p>
            </div>
            <div className='footer-social'>
              <div className='social'>
                <ul>
                  <li><a href='/'><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href='/'><i class="fa-brands fa-telegram"></i></a></li>
                  <li><a href='/'><i class="fa-brands fa-youtube"></i></a></li>
                  <li><a href='/'><i class="fa-brands fa-instagram"></i></a></li>
                </ul>
              </div>
              <p></p>
            </div>
          </div>
          <div className='copyright'>
            <hr />
            <br/>
            <div className='copyright-info'>
              <div className='info'>
                <h4>Bütün hüquqlar qorunur. © Cinema LLC 2012-2022</h4>
                <p><a href='/'>Saytin tam versiyasi </a></p>
              </div>
              <h3><a href='/'>VIPCLUB</a></h3>
            </div>
          </div>
      
        </section>    
    </footer>
  )
}

export default Footer