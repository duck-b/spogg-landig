import React, { useEffect, useState} from 'react';
import { Grid, Hidden } from '@material-ui/core';
import main_banner_phone from 'img/main_banner_phone.png';
import main_icon1 from 'img/main_icon1.jpg';
import main_icon2 from 'img/main_icon2.jpg';
import main_icon3 from 'img/main_icon3.jpg';
import main_icon4 from 'img/main_icon4.jpg';
import main_service1 from 'img/main_service1.png';
import main_service2 from 'img/main_service2.png';
import main_service3 from 'img/main_service3.png';
import main_service4 from 'img/main_service4.png';
import main_phone2 from 'img/main_phone2.png';
import main_phone3 from 'img/main_phone3.png';
import main_column1 from 'img/main_column1.png';
import main_column2 from 'img/main_column2.png';
import main_column3 from 'img/main_column3.png';
import main_phone4 from 'img/main_phone4.png';
import main_phone5 from 'img/main_phone5.png';
import logo_bepa from 'img/logo_bepa.jpg';
import logo_ecbc from 'img/logo_ecbc.png';
import blog1 from 'img/blog1.png';
import blog2 from 'img/blog2.png';
import blog3 from 'img/blog3.png';
import blog4 from 'img/blog4.png';
import blog5 from 'img/blog5.png';
import blog6 from 'img/blog6.png';

import logo_googleplay from 'img/logo_googleplay.png';


const MainPresenter = () => {
  const contents = [
    {
      title: '스포츠용품의 실제 사용 모습을 바로 앞에서',
      content: '자신이 구매하고자 하는 용품의 실제 스포츠 활동에서 사용되는 모습과, 사용자의 솔직한 후기를 보고 더욱 편하게 물품을 선택할 수 있도록 돕습니다.',
      img: main_service1
    },
    {
      title: '서로의 스포츠 활동을 공유하고 기록을 자랑',
      content: '서로의 스포츠 일상을 공유하고 자신의 하루하루 기록을 올림으로써 성장일기를 써나갈 수 있도록 합니다.',
      img: main_service2
    },
    {
      title: '전문가들의 노하우와 꿀 팁이 가득한 공간',
      content: '확실한 인증을 받은 전문가들이 전수해주는 팁들을 참고하고 자신의 부족한 점들을 채워보세요. ',
      img: main_service3
    },
    {
      title: '원하는 구장, 간편한 검색',
      content: '즐기고자 하는 종목, 가고자 하는 위치에 따라 쉽게 구장을 검색하고 정보를 확인할 수 있습니다. ',
      img: main_service4
    }
  ]
  const blogs = [
    {
      title: '[핏데이터]축구 A매치 친선경기 프리뷰 vs 일본',
      kind: '한국 축구',
      url: 'https://blog.naver.com/fitdata0630/222286914291',
      img: blog1
    },
    {
      title: '[핏데이터] 바르셀로나 UCL 16강 탈락',
      kind: '해외 축구',
      url: 'https://blog.naver.com/fitdata0630/222271783567',
      img: blog2
    },
    {
      title: '[핏데이터] 추신수 선수 이마트와 계약!',
      kind: '야구 소식',
      url: 'https://blog.naver.com/fitdata0630/222253430127',
      img: blog3
    },
    {
      title: '[핏데이터] 2020 시즌 키움 히어로즈 리뷰',
      kind: '야구 리뷰',
      url: 'https://blog.naver.com/fitdata0630',
      img: blog4
    },
    {
      title: '[핏데이터] 2020 시즌 LG 트윈스 리뷰',
      kind: '야구 리뷰',
      url: 'https://blog.naver.com/fitdata0630',
      img: blog5
    },
    {
      title: '[핏데이터] 도쿄 올림픽 취소될까?',
      kind: '스포츠 소식',
      url: 'https://blog.naver.com/fitdata0630/222216095438',
      img: blog6
    },
  ]
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let fadeout = setInterval(() => {
        FadeOut();
      }, 50);
      setTimeout(()=>{
        clearInterval(fadeout);
        if(document.getElementById('fade_img')){
          document.getElementById('fade_img').style.opacity = 0;
        }
      },[500]);
    }, [2500]);

    setTimeout(() => {
      if(count === 0){
        setCount(1);
      }else{
        setCount(0);
      }
      let fadein = setInterval(() => {
        FadeIn();
      }, 50);
      setTimeout(()=>{
        clearInterval(fadein);
        if(document.getElementById('fade_img')){
          document.getElementById('fade_img').style.opacity = 1;
        }
      },[500]);
    }, [3000])
  }, [count]);
  const FadeOut = () => {
    if(document.getElementById('fade_img')){
      const img = document.getElementById('fade_img');
      const opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
      if(opacity < 0.1){
        img.style.opacity = 0;
      }else{
        img.style.opacity = opacity - 0.1;
      }
    }
  }
  const FadeIn = () => {
    if(document.getElementById('fade_img')){
      const img = document.getElementById('fade_img');
      const opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
      if(opacity > 0.9){
        img.style.opacity = 1;
      }else{
        img.style.opacity = opacity + 0.1;
      }
    }
  }
  
  return (
    <>
      <div className="main_banner">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="space-between" alignItems="flex-start">
            <Grid item container xs={12} lg={8} justify="flex-start" alignItems="flex-start">
              <Grid xs={12} className="main_banner_page">Sports Information, SPOGG</Grid>
              <Grid xs={12} className="main_banner_title">내가 찾는 모든 스포츠, 스포지지</Grid>
              <Grid xs={12} className="main_banner_subtitle">스포지지를 통해 나에게 꼭 맞는 스포츠 라이프를 찾는 즐거움을 누리세요!</Grid>
              <Grid xs={12} className="main_banner_thdtitle">스포지지가 지향하는 올바른 스포츠 정보를 통해 소비자 중심의 서비스가 기준이 될 수 있도록 노력할게요.</Grid>
              <Grid xs={6} sm={4} lg={3} className="main_banner_button"><button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fitdata.fitdata')}>앱 다운로드</button></Grid>
            </Grid>
            <Grid item container xs={12} lg={3} justify="center" alignItems="flex-start">
              <Grid xs={3} lg={12} className="main_banner_img">
                <img src={main_banner_phone} alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main_banner_background" />
      <div className="main_content">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="flex-start" alignItems="flex-start">
            <Grid xs={12} className="main_content_title">
              왜 핏데이터일까요?
            </Grid>
            <Grid xs={12} lg={6} className="main_content_content">
            스포츠는 일상생활에서 건강한 라이프에 연결되어있어, 이에 대한 취향을 찾는 과정이 중요합니다. 하지만 스포츠용품 특성상 동호회 사람이 추천해주거나 오프라인에서 쉽게 볼 수 있는 제품을 구매해 버리곤 합니다.
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main_content">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="flex-start" alignItems="center">
            <Grid xs={12} sm={6} lg={3} className="main_content_img">
              <div style={{backgroundImage: `url(${main_icon1})`}} />
              {/* <img src={main_icon1} alt="" /> */}
              <p>스포츠용품<br/>구매전 사용 모습을 볼 수 있도록</p>
            </Grid>
            <Grid xs={12} sm={6} lg={3} className="main_content_img">
              <div style={{backgroundImage: `url(${main_icon2})`}} />
              <p>같은 스포츠를 즐기는 사람들<br/>취미를 공유할 수 있도록</p>
            </Grid>
            <Grid xs={12} sm={6} lg={3} className="main_content_img">
              <div style={{backgroundImage: `url(${main_icon3})`}} />
              <p>어려운 스포츠<br/>더 쉽게 시작할 수 있도록</p>
            </Grid>
            <Grid xs={12} sm={6} lg={3} className="main_content_img">
              <div style={{backgroundImage: `url(${main_icon4})`}} />
              <p>가고 싶은 구장<br/>손쉽게 확인할 수 있도록</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main_content2">
        <Grid container justify="center">
            {contents.map((content, i) => (
              <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start" className="main_content2_box">
                <Grid xs={12} sm={10} lg={6}><img src={content.img} alt=""/></Grid>
                <Grid xs={12} sm={12} lg={6}>
                  <p>{content.title}</p>
                  <span>{content.content}</span>
                </Grid>
              </Grid>
            ))}
        </Grid>
      </div>
      <div className="main_content3">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
            <Grid item container xs={12} lg={6} justify="center">
              <Grid xs={12} sm={3} lg={8}>
                <img src={count === 0 ? main_phone2 : main_phone3} alt="" id="fade_img" />
              </Grid>
            </Grid>
            <Grid item container xs={12} lg={6} justify="center">
              <Grid xs={12}>
                <p>나만의 스포츠를 찾는 개인취향 맞춤 스포츠 리뷰</p>
                <span>스포지지 사용자들이 직접 사용해 솔직한 리뷰 중 나에게 꼭 맞는 ‘개인 맞춤 스포츠 리뷰’를 만나보세요.</span>
              </Grid>
              <Grid item container xs={12} justify="space-between">
                <Grid className="main_content3_sport">축구</Grid>
                <Grid className={`main_content3_sport ${count === 0 ?'main_content3_sport_check':''}`}>야구</Grid>
                <Grid className="main_content3_sport">배드민턴</Grid>
                <Grid className="main_content3_sport">골프</Grid>
                <Grid className="main_content3_sport">농구</Grid>
                <Grid className="main_content3_sport">볼링</Grid>
                <Grid className="main_content3_sport">당구</Grid>
                <Grid className="main_content3_sport">필라테스</Grid>
                <Grid className="main_content3_sport">마라톤</Grid>
                <Grid className="main_content3_sport">자전거</Grid>
                <Grid className="main_content3_sport">크로스핏</Grid>
                <Grid className={`main_content3_sport ${count === 1 ?'main_content3_sport_check':''}`}>헬스</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main_content4">
        <Grid container justify="center">
          <div className="main_content4_line"></div>
          <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
            <Grid item container xs={12} sm={6} justify="center">
              <Grid xs={12} lg={8} style={{zIndex: '2'}}>
                <img src={main_column1}/>
              </Grid>
            </Grid>
            <Grid item container xs={12} sm={6} justify="flex-start" className="main_content4_right_content">
              <Grid xs={12}>
                <p>핏데이터에서 제공하는 특별한 스포츠 콘텐츠</p>
                <span>스포츠 인플루엔서, 전문가가 제공하는 스포츠 정보와 꿀팁을 스포지지 앱에서 만나보세요.</span>
              </Grid>
              <div className="main_content4_right_content_img">
                  <div style={{backgroundImage: `url(${main_column2})`}}></div>
                  <div style={{backgroundImage: `url(${main_column3})`}}></div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="main_content5">
        <Grid container justify="center">
            <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
              <Grid item xs={12} className="main_content5_title">BLOG</Grid>
              <Grid item container xs={12} className="main_content5_content">
                {blogs.map((blog, i) => (
                  <Grid item xs={12} sm={6} lg={4} bac>
                    <div>
                      <div onClick={() => window.open(blog.url)} style={{backgroundImage: `url(${blog.img})`}}></div>
                      <p>{blog.title}</p>
                      <span>{blog.kind}</span>
                      <a onClick={() => window.open(blog.url)}>더 읽기</a>
                    </div>
                  </Grid>
                ))}
              </Grid>
              <Grid item xs={12} className="main_content5_button">
                <button onClick={() => window.open('https://blog.naver.com/fitdata0630')}>더 많은 콘텐츠 보기</button>
              </Grid>
            </Grid>
          </Grid>
      </div>
      <div className="main_content6">
        <Grid container justify="center">
            <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
              <Grid item xs={12}>
                <p>지금 다운로드하세요!</p>
              </Grid>
              <Grid item sm={12} lg={8}>
                <Hidden xsDown>
                  <span>핏데이터는 다양한 스포츠 정보를 얻고, 운동 기록을 기록하고 비슷한 취미를 가진 사람들과 자유롭게 소통할 수 있는 공간을 제공합니다. 앱 서비스를 통해 더 즐거운 운동 생활을 즐겨보세요.</span>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justify="center">
            <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
              <Grid item container xs={12} sm={8} lg={6} justify="space-between">
                  <Grid item xs={6} className="main_content6_button">
                    <button onClick={() => window.open('https://m.spo.gg')}>웹사이트</button>
                  </Grid>
                  <Grid item xs={6} className="main_content6_button">
                    <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fitdata.fitdata')}><img src={logo_googleplay} alt=""/>구글 플레이</button>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
      </div>
      <div className="main_content7">
        <Grid container justify="center">
            <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
              <Grid item xs={12}>
                <p>Collaborating Companies</p>
                <span>국내외 다양한 협력사들과 함께 만드는 플랫폼 서비스입니다.</span>
              </Grid>
              <Grid item container xs={12} justify="flex-start" className="main_content7_img">
                <Grid xs={6} sm={4} lg={3}>
                  <img src={logo_bepa} alt="" />
                </Grid>
                <Grid xs={6} sm={4} lg={3}>
                  <img src={logo_ecbc} alt="" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
      </div>
    </>
  );
};

export default MainPresenter;
