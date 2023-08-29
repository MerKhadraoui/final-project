import React, { useContext, userData } from 'react';
import "./headAboutUs.css"
import HeadAboutUs from './HeadAboutUs';
import Carousel from 'react-bootstrap/Carousel';
import PartnersAboutUs from './PartnersAboutUs';
import { myStore } from '../myStore/dataStore.js';
import BodyAboutUs from './BodyAboutUs';
import StorContext from '../context';

function AboutUs() {
  const { userData } = useContext(StorContext)
  const newsData = myStore((state) => state.newsData.articles ? state.newsData.articles : [])
  return (
    <div className='home'>
      <div><HeadAboutUs /></div>
      <div>
        <nav style={{ color: "goldenrod" }}> <h2> About "Cryptos-Space" Team</h2></nav>
        <Carousel className='carousel'>
          {newsData.map((data, i) => < Carousel.Item key={i} className='card-item  news-text'>
            <a href={`${data.url}`} > <img

              className="d-block w-30 image"
              src={`${data.urlToImage}`}
              alt="news"

            /></a>
            <Carousel.Caption >
              <div className='news-box'>
                <a className='link' href={`${data.url}`} >  <h3> Title : {data.title}</h3></a>
                {/* <p>  {data.description}</p> */}
                <small>Author : {data.author}</small><br />
                <span className="post-date"><i className="fa fa-clock-o"></i>{data.publishedAt}</span>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
        </Carousel></div>

      <div>(<BodyAboutUs />)</div>
      <div>
        <PartnersAboutUs /></div>




    </div>
  )
}

export default AboutUs

/*import React, { useContext } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./newsCard.css"
import StorContext from '../context';

function AboutUs() {
  const { userData } = useContext(StorContext)

  return (
    // <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${userData.urlToImage}`}
          alt="news"
          style={{ hight: "20rem" }}
        />
        <Carousel.Caption>
          <h3>{userData.title}</h3>
          <p>{userData.description}</p>
          <small>{userData.author}</small>
          <span class="post-date"><i class="fa fa-clock-o"></i>{userData.publishedAt}</span>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //</div>
  )
}

export default AboutUs */

