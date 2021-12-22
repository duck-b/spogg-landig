import React from 'react'
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import logo_1boon from 'img/logo_1boon.png';
import logo_facebook from 'img/logo_facebook.png';
import logo_instagram from 'img/logo_instagram.png';
import logo_naverpost from 'img/logo_naverpost.png';
import logo_naverblog from 'img/logo_naverblog.png';

const Footer = (props) => {
    return(        
        <div className="footer">
            <Grid container justify="center">
                <Grid item container xs={12} sm={10} lg={8} justify="space-between" alignItems="flex-start">
                    <Grid item xs={12} sm={8} lg={6} className="footer_company">
                        <p>주식 회사 핏데이터</p>
                        <p>대표자 : 김경민</p>
                        <p>사업자등록번호 : 889-87-10970</p>
                        <p>주소 : 부산광역시 동천로 116, 3층 304호 주식회사 핏데이터</p>
                        <p>전화 : 010-2239-6702</p>
                        <p>이메일 : info@spo.gg</p>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={6} className="footer_sns">
                        <a href="https://www.instagram.com/spo.gg/" target="_blank"><img src={logo_instagram} alt="instagram"/></a>
                        <a href="https://www.facebook.com/spoggcom" target="_blank"><img src={logo_facebook} alt="facebook"/></a>
                        <a href="https://blog.naver.com/fitdata0630" target="_blank"><img src={logo_naverblog} alt="naverblog"/></a>
                        <a href="javascript:;" target="_blank"><img src={logo_1boon} alt="1boon"/></a>
                        <a href="javascript:;" target="_blank"><img src={logo_naverpost} alt="naverpost"/></a>
                    </Grid>
                    <Grid item xs={12} className="footer_copyrights">© 2020 - 2021 FITDATA Inc. All Rights Reserved.</Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default withRouter(Footer)