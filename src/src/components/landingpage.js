import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ITbO8HeQcxa5yhjeacxErtvsy3ibzYzp90k0ogLA_17c7Jw"
                            alt="avatar"
                            className="avater-img"
                        />
                        <div className="banner-text">
                            <h1>Front Engineer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | React | UI/UX </p>
                            <div className="social-links">

                                {/* GidHub */}
                                <a href="https://github.com/imamurasyoutarou" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true"></i>
                                </a>
                                {/* Twitter */}
                                <a href="https://twitter.com/imasyou718" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-twitter-square" aria-hidden="true"></i>
                                </a>
                                {/* facebook */}
                                <a href="https://www.facebook.com/profile.php" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-facebook-square" aria-hidden="true"></i>
                                </a>
                                {/* mail */}
                                <a href="mailto:imasyou718@icloud.com" rel="noopener noreferrer" target="_blank">
                                    <i className="far fa-envelope" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;