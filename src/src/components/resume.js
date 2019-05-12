import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ITbO8HeQcxa5yhjeacxErtvsy3ibzYzp90k0ogLA_17c7Jw"
                                alt="avater"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h3 style={{ paddingTop: '2em' }}>Syoutaoru Imamura</h3>
                        <h4 style={{ color: 'grey' }}>Programmer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>i'm imamura</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>福岡県福岡市博多区榎田1-2-38</p>
                        <p>ウイングコートD館 301号室</p>

                        <h5>Phone</h5>
                        <p>080-8364-5815</p>

                        <h5>Email</h5>
                        <p>imasyou718@icloud.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="久留米大学"
                            schoolDescription="サッカー部 在籍"
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="G's ACADEMY FUKUOKA"
                            schoolDescription="LAB1期 4月〜現在"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear={2018}
                            jobName="北九州青果株式会社"
                            jobDescription="担当品目のルート営業"
                        />

                        <Experience
                            startYear={2018}
                            endYear={2018}
                            jobName="LINE株式会社"
                            jobDescription="キャッシュレスサービスの加盟店営業 9月〜10月"
                        />

                        <Experience
                            startYear={2019}
                            endYear={2019}
                            jobName="SEREAL"
                            jobDescription="UI/UXデザイン 4月〜現在"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="javascript"
                            progress={75} />
                        <Skills
                            skill="HTML/CSS"
                            progress={75} />
                        <Skills
                            skill="React"
                            progress={50} />
                        <Skills
                            skill="UI/UX"
                            progress={15} />
                    </Cell>
                </Grid>
            </div >
        )
    }
}
export default Resume;