import React from 'react';
import { Grid } from '@material-ui/core';
import news1 from 'img/news1.png';
import news2 from 'img/news2.jpg';
import news3 from 'img/news3.jpg';
import news4 from 'img/news4.jpg';
import news5 from 'img/news5.jpg';
import news6 from 'img/news6.jpg';

const HistoryPresenter = () => {
  return (
    <>
      <div className="history_banner">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="flex-start" alignItems="flex-start">
            <Grid xs={12} className="history_banner_page">회사 역사</Grid>
            <Grid xs={12} className="history_banner_title">나에게 맞는 더 나은 미래 핏데이터</Grid>
            <Grid xs={12} className="history_banner_subtitle">스포지지를 만드는 회사 핏데이터의 역사와 성장 스토리를 알려드립니다.</Grid>
            <Grid xs={6} sm={4} lg={3} className="history_banner_button"><button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fitdata.fitdata')}>앱 다운로드</button></Grid>
          </Grid>
        </Grid>
      </div>
      <div className="history_content">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="flex-start" alignItems="flex-start">
            <Grid item container xs={12} className="history_content_yearbox">
              <Grid item xs={4} sm={2} className="history_content_year">
                Year <span>2017’</span>
              </Grid>
              <Grid item xs={8} sm={10} className="history_content_text">
                <div>경성대 창업동아리 선정</div>
                <div>Busan 연합 창업 아카데미</div>
                <div>전국 대학생 IT프로젝트 경진대회</div>
              </Grid>
            </Grid>
            <Grid item container xs={12} className="history_content_yearbox">
              <Grid item xs={4} sm={2} className="history_content_year">
                Year <span>2018’</span>
              </Grid>
              <Grid item xs={8} sm={10} className="history_content_text">
                <div>스타트업 마이닝</div>
                <div>스마트창작터(영산대) 시장 검증</div>
                <div>2018년 부산광역시 공공·빅데이터 활용 창업경진대회</div>
                <div>청년창조발전소(꿈터) 입주</div>
              </Grid>
            </Grid>
            <Grid item container xs={12} className="history_content_yearbox">
              <Grid item xs={4} sm={2} className="history_content_year">
                Year <span>2019’</span>
              </Grid>
              <Grid item xs={8} sm={10} className="history_content_text">
                <div>부산대 실천창업교육 1기</div>
                <div>부산모바일앱센터 입주</div>
              </Grid>
            </Grid>
            <Grid item container xs={12} className="history_content_yearbox">
              <Grid item xs={4} sm={2} className="history_content_year">
                Year <span>2020’</span>
              </Grid>
              <Grid item xs={8} sm={10} className="history_content_text">
                <div>부산대 예비창업패키지</div>
                <div>데이터바우처 (일반가공)</div>
                <div>2020 데이터산업 성과보고회 컨설팅 우수사례 선정</div>
              </Grid>
            </Grid>
            <Grid item container xs={12} className="history_content_yearbox">
              <Grid item xs={4} sm={2} className="history_content_year">
                Year <span>2021’</span>
              </Grid>
              <Grid item xs={8} sm={10} className="history_content_text">
                <div>부산e커머스센터 입주</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="history_content2">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="flex-start" alignItems="flex-start">
            <Grid item xs={12} className="history_content2_title">
              수상 이력
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news1} />
              </div>
              <p>핏데이터, 마이데이터 컨설팅 우수 사례 선정</p>
              <span>2020. 12. 11</span>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news2} />
              </div>
              <p>야구, 빅데이터와 결합하다…청년창조발전소 꿈터플러스 입주기업 ‘스포지지’</p>
              <span>2019. 12. 18</span>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news3} />
              </div>
              <p>야구와 빅데이터의 결합…사회인야구 통합 기록 분석 서비스 ‘스포지지’ 출시 예정 [청년창조발전소 꿈터플러스 입주기업 ③]</p>
              <span>2019. 10. 16</span>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news4} />
              </div>
              <p>‘2018년 부산시 공공·빅데이터 창업경진대회’ 시상식 3등</p>
              <span>2018. 09. 11</span>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news5} />
              </div>
              <p>부산 기술창업 프로그램 ‘갈매기 SW창업사관학교’ 5기 담금질 돌입</p>
              <span>2018. 07. 19</span>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="history_content2_content">
              <div className="history_content2_img">
                <img src={news6} />
              </div>
              <p>부경대, '부산 연합 창업아카데미' 성과보고회 개최</p>
              <span>2017. 09. 29</span>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
    )
};

export default HistoryPresenter;