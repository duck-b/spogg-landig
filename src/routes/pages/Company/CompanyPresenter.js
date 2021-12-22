import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import iconAutonomy from 'img/icon_autonomy.png';
import iconCommunication from 'img/icon_communication.png';
import iconGrowth from 'img/icon_growth.png';
import profileCeo from 'img/profile_ceo.png';
import profileLeadDeveloper from 'img/profile_leadDeveloper.png';
import profileBusinessSupport from 'img/profile_businessSupport.png';

const CompanyPresenter = () => {
  return (
    <>
      <div className="aboutus_banner">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={6} justify="center" alignItems="flex-start">
            <div className="aboutus_banner_title">운동 정보 불균형을 해결하고 모두 소통하는 문화를 만들어나갑니다.</div>
            <div className="aboutus_banner_subtitle">자유로운 소통 공간 안에서 비슷한 취미를 가진 사람들과 다양한 팁과 정보를 주고받고 기록을 공유 할 수 있도록 합니다. 이를 통해 소통과 건전한 경쟁을 즐기는 문화를 만듭니다.</div>
          </Grid>
        </Grid>
      </div>
      <div className="aboutus_content">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="flex-start">
            <Grid item xs={12} className="aboutus_content_title">
              우리의 핵심 가치
            </Grid>
            <Grid item xs={12} sm={10} lg={6} className="aboutus_content_subtitle">
              개인에 맞춘 운동 콘텐츠를 통해 당신의 건강한 운동 생활을 지원하고 '나에게 맞는 더 나은 미래'를 만들 것입니다.
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12} lg={4} className="aboutus_content_item">
              <img src={iconAutonomy} className="icons"/>
              <p>자율 (AUTONOMY)</p>
              <span>일방적인 통제와 지시보다는 자신의 역할 안에서 스스로 일을 선택하고 해나갑니다.</span>
            </Grid>
            <Grid item xs={12} lg={4} className="aboutus_content_item">
              <img src={iconCommunication} className="icons"/>
              <p>소통 (COMMUNICATION)</p>
              <span>모든 업무 관련 소통은 협업 툴을 통해서 자유롭게 할 수 있고 자유롭게 의견을 제시합니다.</span>
            </Grid>
            <Grid item xs={12} lg={4} className="aboutus_content_item">
              <img src={iconGrowth} className="icons"/>
              <p>성장 (GROWTH)</p>
              <span>당장은 뛰어나지 않아도 회사의 성장과 함께 자신의 실력을 키워나갈 수 있습니다.</span>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="aboutus_content">
        <Grid container justify="center">
          <Grid item container xs={12} sm={10} lg={8} justify="space-between" alignItems="center">
            <Grid item xs={12} className="aboutus_content_title">
              만드는 사람들
            </Grid>
            <Grid item xs={12} className="aboutus_content_subtitle">
              핏데이터는 운동을 사랑하고 목표를 위해 즐거운 열정을 가지고 일합니다.
            </Grid>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
            <Grid item xs={10} sm={2} className="aboutus_content_item2">
              <div style={{backgroundImage: `url(${profileCeo})`}} />
              <p>김경민</p>
              <span>CEO</span>
            </Grid>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
            <Grid item xs={10} sm={2} className="aboutus_content_item2">
              <div style={{backgroundImage: `url(${profileLeadDeveloper})`}} />
              <p>최재형</p>
              <span>Lead Developer</span>
            </Grid>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
            <Grid item xs={10} sm={2} className="aboutus_content_item2">
              <div style={{backgroundImage: `url(${profileBusinessSupport})`}} />
              <p>김기현</p>
              <span>Business Support</span>
            </Grid>
            <Hidden smUp>
              <Grid item xs={1} ></Grid>
            </Hidden>
          </Grid>
        </Grid>
      </div>
      <div className="aboutus_content2">
        <div className="aboutus_content2_title">
          지금 다운로드 하세요!
        </div>
        <div className="aboutus_content2_subtitle">
          <Grid container justify="center">
            <Grid item container xs={12} sm={10} lg={8} justify="center" alignItems="center">
              핏데이터는 다양한 스포츠 정보를 얻고, 운동 기록을 기록하고 비슷한 취미를 가진 사람들과 자유롭게 소통할 수 있는 공간을 제공합니다. 앱 서비스를 통해 더 즐거운 운동 생활을 즐겨보세요.
            </Grid>
          </Grid>
        </div>
        <div className="aboutus_content2_button">
          <button onClick={() => window.open('https://play.google.com/store/apps/details?id=com.fitdata.fitdata')}>앱 다운로드</button>
        </div>
      </div>
    </>
    )
};

export default CompanyPresenter;