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
                <div style={{ textAlign: "center" }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img.jpg`}
                    alt="avatar"
                    className="avater-img"
                  />
                </div>
                <div className="social-links">
                  {/* GidHub */}
                  <a
                    href="https://github.com/imamurasyoutarou"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github-square" aria-hidden="true"></i>
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/imasyou718"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-twitter-square" aria-hidden="true"></i>
                  </a>
                  {/* facebook */}
                  <a
                    href="https://www.facebook.com/profile.php"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i
                      className="fab fa-facebook-square"
                      aria-hidden="true"
                    ></i>
                  </a>
                  {/* mail */}
                  <a
                    href="https://note.mu/imasyou718"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="far fa-sticky-note" aria-hidden="true"></i>
                  </a>
                </div>
                <h3 style={{ paddingTop: "1em" }}>Syoutaoru Imamura</h3>
                <h4 style={{ color: "grey" }}>Front-end engineer</h4>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <p>
                  フロントエンドとUI/UXデザイナーとして働いた経験があります
                  ReactNativeでアプリのリリースまでの開発経験もあり
                </p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
                <h5>Address</h5>
                <p>福岡県福岡市</p>

                <h5>Phone</h5>
                <p>080-8364-5815</p>

                <h5>Email</h5>
                <p>syoutarouimamura@gmail.com</p>
                <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              </Cell>
              <Cell className="resume-right-col" col={8}>
                <h2>Experience</h2>

                <Experience
                  startYear={2019.4}
                  endYear={2019.8}
                  jobName="SEREAL株式会社"
                  jobDescription="UI/UXデザイナーのインターンとして勤務。スタートアップメインにデザインの改善業務を行う"
                />

                <Experience
                  startYear={2019.9}
                  endYear={2019.11}
                  jobName="マイカグ"
                  jobDescription="個人アプリ「マイカグ」をリリース。 言語 ReactNative firebase"
                />
                <Experience
                  startYear={2019.12}
                  endYear={2020.1}
                  jobName="株式会社ajike"
                  jobDescription="フロントエンドとして業務委託で勤務。Next.js firebaseで開発を経験"
                />
                <Experience
                  startYear={2020.1}
                  endYear={"現在"}
                  jobName="株式会社ヤマップ"
                  jobDescription="フロントエンドとして正社員で勤務中。Nuxt.jsで開発を経験。SEOの経験もしています。"
                />
                <hr style={{ borderTop: "3px solid #e22947" }} />
                <h2>Skills</h2>
                <Skills skill="HTML/CSS" progress={75} />
                <Skills skill="javascript" progress={75} />

                <Skills skill="React" progress={60} />
                <Skills skill="Vue" progress={50} />
              </Cell>
            </Grid>
          </div>
        );
    }
}
export default Resume;