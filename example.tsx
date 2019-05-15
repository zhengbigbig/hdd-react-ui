import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import {Layout, Content, Header, Footer, Sider} from './lib/index';
import './example.less';
const logo = require('./hddlogo.png')

ReactDOM.render(
  <Router>
    <Layout style={{border: '1px solid red'}}>
      <Header style={{border: '1px solid red'}}>
        <div className="logo">
          <img src={logo} alt=""/>
          HDD
        </div>

      </Header>
      <Layout style={{border: '1px solid red'}}>
        <Sider style={{border: '1px solid red'}}>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog</Link>
            </li>
            <li>
              <Link to="/layout">Layout</Link>
            </li>
          </ul>
        </Sider>
        <Content style={{border: '1px solid red'}}>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer style={{border: '1px solid red'}}>xxx</Footer>
    </Layout>
  </Router>
  , document.querySelector('#root'));
