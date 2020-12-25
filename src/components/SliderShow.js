import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
    position:'relative',
    height: '360px',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    background: 'rgb(68 46 7 / 69%)',
    zIndex: '1',
  };
  const img_container = {
      position:'absolute',
      zIndex:'0',
  }
  const pStyle = {
      color:'#fff',
      width:'55%',
      textAlign:'center',
      margin:'0 auto',
      padding:'40px 10px',
      fontSize:'1rem'
  }

export default function SliderShow() {
    return (
        <div>
            <Carousel autoplay>
                <div>
                   <div style={img_container}>
                    <img src="/img/mouton.jpg" style={{  backgroundSize: 'cover',
                                                         backgroundRepeat: 'no-repeat',
                                                         backgroundOrigin: 'content-box',
                                                         width: 'inherit',
                                                         height: '360px'}} alt="mouton" />
                    </div>
                    <div style={contentStyle}>
                        <h3 style={pStyle}>Nos Moutons</h3>
                        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nihil harum quis incidunt! Commodi amet nemo tenetur, et ea optio eligendi ex repellat .</p>
                    </div>
                </div>
                <div>
                    <div style={img_container}>
                    <img src="/img/boeuf.jpg" style={{  backgroundSize: 'cover',
                                                         backgroundRepeat: 'no-repeat',
                                                         backgroundOrigin: 'content-box',
                                                         width: 'inherit',
                                                         height: '360px'}} alt="mouton"
                     />
                    </div>
                    <div style={contentStyle}>
                       <h3 style={pStyle}>Nos Boeufs</h3>
                        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nihil harum quis incidunt! Commodi amet nemo tenetur, et ea optio eligendi ex repellat .</p>
                    
                    </div>
                </div>
                <div>
                   <div style={img_container}>
                    <img src="/img/poulet2.jpg" style={{  backgroundSize: 'cover',
                                                         backgroundRepeat: 'no-repeat',
                                                         backgroundOrigin: 'content-box',
                                                         width: 'inherit',
                                                         height: '360px'}} alt="mouton" />
                    </div>
                    <div style={contentStyle}>
                       <h3 style={pStyle}>Nos Poulets</h3>
                        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nihil harum quis incidunt! Commodi amet nemo tenetur, et ea optio eligendi ex repellat .</p>
                    
                    </div>
                </div>
                <div>
                  <div style={img_container}>
                   <img src="/img/poulet1.jpg" style={{  backgroundSize: 'cover',
                                                         backgroundRepeat: 'no-repeat',
                                                         backgroundOrigin: 'content-box',
                                                         width: 'inherit',
                                                         height: '360px'}} alt="mouton" />
                   </div>
                   <div style={contentStyle}>
                       <h3 style={pStyle}>Nos Aneaux</h3>
                        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti nihil harum quis incidunt! Commodi amet nemo tenetur, et ea optio eligendi ex repellat .</p>
                    
                   </div>
                </div>
            </Carousel>
            
        </div>
    )
}
