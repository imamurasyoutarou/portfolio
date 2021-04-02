import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/ cover",
              }}
            >
              マイカグ
            </CardTitle>
            <CardText>ReactNative firebaseで開発</CardText>
            <CardActions border>
              <a href="https://github.com/imamurasyoutarou/Mykagu">
                <Button colored>Gidhub</Button>
              </a>
              <a href="https://apps.apple.com/us/app/%E3%83%9E%E3%82%A4%E3%82%AB%E3%82%B0/id1482771246">
                <Button colored>ios</Button>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.firebaseapp.react_naitive.Mykagu&hl=ja">
                <Button colored>Android</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/*  project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/ cover",
              }}
            >
              管理画面
            </CardTitle>
            <CardText>React firebase簡易管理画面</CardText>
            <CardActions border>
              <a href="https://github.com/imamurasyoutarou/Management">
                <Button colored>Gidhub</Button>
              </a>
              <Button colored>CodePen</Button>
              <Button colored>Livedemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center/ cover",
              }}
            >
              My portfolio
            </CardTitle>
            <CardText>SPAのポートフォリオです！レスポンシブ対応</CardText>
            <CardActions border>
              <a href="https://github.com/imamurasyoutarou/Myportfplio">
                <Button colored>Gidhub</Button>
              </a>
              <Button colored>CodePen</Button>
              <Button colored>Livedemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          {" "}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(data:data:image/jpeg;base64,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",
              }}
            >
              SPA お問い合わせフォーム
            </CardTitle>
            <CardText>リアルタイム バリデーションなど</CardText>
            <CardActions border>
              <a href="https://github.com/imamurasyoutarou/formVue">
                <Button colored>Gidhub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Other</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="tategory-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Vuejs</Tab>
          <Tab>Other</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content"> {this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
