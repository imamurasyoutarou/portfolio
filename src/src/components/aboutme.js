import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutavater">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ITbO8HeQcxa5yhjeacxErtvsy3ibzYzp90k0ogLA_17c7Jw"
                        alt="avater"
                        style={{ height: '300px' }}
                    />
                    <h2>Imamura Syoutaoru</h2>
                    <h5>いまむらしょうたろう</h5>
                </div>

                <div className="aboutprofil">
                    <p>福岡県 北九州市出身 24歳</p>
                    <p>G's ACADEMY LAB1期 在籍</p>
                    <p>趣味:サッカー 釣り 音楽（HIPHOP,REGGAE）</p>
                    <p>特に好きな言語React</p>
                </div>

            </div>
        )
    }
}
export default About;