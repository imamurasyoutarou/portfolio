import React, { Component } from "react";
import { Grid, Cell, List, Button, Textfield } from "react-mdl";

class Contact extends Component {
  Alert() {
    alert("今はバックエンド側の処理を作成中のため横のメールアドレスかSNSのDMからメッセージをお願いいたします");
  }
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h3 style={{ fontWeight: "bold" }}>Syoutaoru Imamura</h3>
            <hr />
            <img src={`${process.env.PUBLIC_URL}/img.jpg`} alt="avatar" className="avater-img-mini" />
            <p>▍自己紹介 福岡出身 １９９４年生まれ </p>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              ・職歴
              新卒で営業をしており、商品を売る上で商品の制作の過程を知るのに興味をもち、そのまま開発にハマって下記の経歴に至ります。
              ・実務経験 インターンから含めると約１年と半年です ・趣味バイクと来来亭と個人開発が好き
            </p>

            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>▍メールアドレス</p>
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>syoutarouimamrua@gmail.com</p>
          </Cell>
          <Cell col={6}>
            <h3 style={{ fontWeight: "bold" }}>Contact Me</h3>
            <hr />
            <p style={{ padding: "1em" }}>準備中</p>
            <div className="contact-list">
              <List>
                {/* <ListItem>
                  <ListItemContent className="phone">
                    080-8364-5815
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent className="mail">
                    syoutarouimamrua@gmail.com{" "}
                  </ListItemContent>
                </ListItem> */}
                <Textfield onChange={() => {}} label="名前..." floatingLabel />

                {/* Numeric Textfield with floating label */}
                <Textfield
                  onChange={() => {}}
                  pattern="-?[0-9]*(\.[0-9]+)?"
                  error="Input is not a number!"
                  label="メールアドレス..."
                  floatingLabel
                />
                <Textfield onChange={() => {}} label="内容..." rows={3} />
                <Button onClick={this.Alert} ripple raised colored style={{ margin: 60 }}>
                  Button
                </Button>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
