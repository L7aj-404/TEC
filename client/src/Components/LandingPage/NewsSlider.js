import React, { useState, useEffect } from 'react';
import newsData from '../../data';
import { Slider, NewsItemAnimation, NewsItem, NewsTitle, NewsContent } from './StyledSlider';
import { useMediaQuery } from 'react-responsive';
import { TfiImage } from 'react-icons/tfi';



const NewsSlider = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 500px)' });

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  
  
  

  return(
    <Slider>
      <NewsItemAnimation isMobile={isMobile} >
        {newsData.map((news) => (
          <NewsItem
            key={news.id}
            isDesktop={isDesktop}
            delay={isDesktop ? 0 : news.id * 0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            
            <NewsTitle>
              
              <div style={{padding:"5px",borderRadius:'20PX'}}>
              <TfiImage/>
              </div>
              <span style={{fontSize:25}}>{news.title}</span>
              </NewsTitle>
            <NewsContent>{news.content}</NewsContent>
          </NewsItem>
        ))}
      </NewsItemAnimation>
    </Slider>
  );
};

export default NewsSlider;
