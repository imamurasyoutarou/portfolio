import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

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
                <i className="fab fa-facebook-square" aria-hidden="true"></i>
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

            <h4>Skills</h4>
            <p>
              HTML / CSS / Sass / JavaScript / TypeScript / Vue / Nuxt / React /
              Next / ReactNative / Firebase / sketch / XD / Figma / Google
              analytics / Tag Manager / optimize
            </p>
            <p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <h4>Strength</h4>
              <p style={{ fontWeight: "bold" }}>
                ・デザインとエンジニアとして両方の視点を持っての開発
              </p>
              <p>
                デザイン会社でフロントエンドとデザイナーとして働いたこと経験があり、デザインとエンジニアリングの双方を意識した開発を円滑に行うことができます。デザイナーとエンジニアの架け橋に慣れるような人材を目指してます。
              </p>
              <p style={{ fontWeight: "bold" }}>
                ・ユーザー体験を深く意識し開発
              </p>
              <p>
                UI/UXデザイナーとUXデザイン会社、ヤマップでのユーザーデータを元にした開発をした経験を元にユーザーが何を求めてるかを考えた上でベストな選択ができると思ってます。これは個人開発で企画から実装まで全て自分で行いリリースまで行った経験も活きていると思います。
              </p>
              <p style={{ fontWeight: "bold" }}>
                ・スピード感を持ったリーン開発
              </p>
              動くものベースでの開発はとても得意としていますので早く検証をしたいプロトタイプ開発や検証などは得意です。マイカグや今自分が個人で開発中のバイクのアプリも課題インタビューを行った上でUIから実装までのプロトタイプを作って、改善を繰り替えることで身に着けることができました。
            </p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2019.4}
              endYear={2019.9}
              jobName="SEREAL株式会社"
              Skill="##使用技術
HTML CSS JavaScript sketch"
              jobDescription="上司の手伝い・仮想案件をしながらデザインツールの使用方法、UIの考え方を身に着けることができました。スタートアップ をメインに低単価でUI改善を行う新規事業の営業資料を作成し、自分で営業を行いその営業資料のデザインに対してのターゲットユーザーの反応をみた上でブラッシュアップを繰り返し、新規事業の立ち上げにコミットしました"
            />
            <Experience
              startYear={2019.9}
              endYear={2019.11}
              jobName="マイカグ"
              Skill="##使用技術
ReactNative Firebase expo"
              jobDescription="知り合いのオーダー家具職人と共に今のオーダー家具業界の課題を解決するために開発しました。企画からアプリのUI、デザイン全般、開発まで行いました。
オーダー家具の現段階の課題として、オーダーをしたはいいものの家具ができるまで
制作背景が見えない上に、オーダーをお願いした業者と職人で話を通す時に認識の違いが生まれ、届いた時には思い描いたものと違うという課題がありました。
それを解決するにはコミュニケーションを密にとることが不可欠だと思いましたので
家具職人、業者、顧客の三者が常に連絡が取れるようなタスク別チャット機能、制作背景が常に見れるように日記機能などを付けました。"
            />
            <Experience
              startYear={2019.12}
              endYear={2020.1}
              jobName="株式会社アジケ 業務委託"
              Skill="##使用技術
Next.js TypeScript  Firebase"
              jobDescription="フリーランスとして北九州拠点の一人目のエンジニアとして勤務しました。新規事業の立ち上げをお手伝いして、部分的な機能開発に努めました。
担当した機能一つ一つユーザーとって何が最適なUXかを考えて実装、
UXを強く意識している会社なのでユーザーやチームのUXを常に意識した行動を心がけていました。
また社内、社外で行われているUXの勉強会に積極的に参加させてもらいました"
            />
            <Experience
              startYear={2020.1}
              endYear={2020.8}
              jobName="株式会社ヤマップ"
              Skill="##使用技術
HTML CSS Sass JavaScript Nuxt Vue
GoogleAnalytics Google タグマネージャー Google Optimize"
              jobDescription="デザイナーと密にコミュニケーションをとりながら主にデザイン改善に着手
今までのデザイン会社で働いてきたことを活かしてデザイナーの考えること、デザインの意図を深く理解しながらデザインとコードの運用面のこと考えながら開発を行いました。
またSEO、コンバージョン改善pjtにも参加
A/Bテスト、アプリバナーの配置改善などユーザーの行動データを元に施策を考え、様々な対策を行いました。"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
