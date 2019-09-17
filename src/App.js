import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom'
import Pdf from './resume.pdf'

class App extends Component {
  render() {
    return (
      <div>
      {/* Uses a transparent header that draws on top of the layout's background */}
      <div style={{height: '300px', position: 'relative'}}>
        <Layout style={{background: 'black'}}>
          <Header transparent title="phuuvle" style={{color: 'white'}}>
            <Navigation>
              <Link to="/">Home</Link>
              {/* <Link to="/projects">Projects</Link>
              <Link to="/photos">Photos</Link> */}
              <a href={Pdf} target="_blank">Resume</a>
            </Navigation>
          </Header>
          <Content>
            <h3 className="banner-text">HI, I'M PHU.</h3>
          </Content>
        </Layout>
      </div>
      <Main />
      </div>
    );
  }
}

export default App;
