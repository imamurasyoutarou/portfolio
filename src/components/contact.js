import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h3>Syoutaoru Imamura</h3>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ITbO8HeQcxa5yhjeacxErtvsy3ibzYzp90k0ogLA_17c7Jw"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            I'm imamura age:24
                           <p></p> I'm looking forward to hearing from you.<p></p>
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>

                                <ListItem>
                                    <ListItemContent className='phone'>
                                        <i className="fa fa-phone-square" aria-hidden="ture" style={{ fontSize: 50 }} />
                                        (080-8364-5815)
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className='mail' >
                                        <i className="fas fa-envelope-square" aria-hidden="ture" style={{ fontSize: 50 }} />
                                        imasyou718@icloud.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent className='skype' style={{ fontFamily: 'Anton' }}>
                                        <i className="fab fa-skype" aria-hidden="ture" />
                                        live:cad6fb31ff8b2754
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div >
        )
    }
}
export default Contact;