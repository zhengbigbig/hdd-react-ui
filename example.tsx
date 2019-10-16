import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import FormExample from './lib/form/form.example';
import AffixExample from './lib/affix/affix.example';
import {Layout, Content, Header, Footer, Sider} from './lib/index';

import './example.less';

const logo = require('./hddlogo.png');
const logoText = require('./logo.png');

ReactDOM.render(
  <Router>
    <Layout className="pageWrapper">
      <Header className="headerWrapper">
        <div className="logo">
          <div><img src={logo} alt="" height="48"/></div>
          <div><img src={logoText} alt="" height="28"/></div>
        </div>
        <div className="headerContent"></div>
      </Header>
      <Layout className="layoutWrapper">
        <Sider className="siderWrapper">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">Icon</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form</NavLink>
            </li>
            <li>
              <NavLink to="/affix">Affix</NavLink>
            </li>
          </ul>
        </Sider>
        <Layout className="mainWrapper">
          <div className="mainInner">
            <Content className="contentWrapper">
              <Route path="/icon" component={IconDemo}/>
              <Route path="/button" component={ButtonExample}/>
              <Route path="/dialog" component={DialogExample}/>
              <Route path="/layout" component={LayoutExample}/>
              <Route path="/form" component={FormExample}/>
              <Route path="/affix" component={AffixExample}/>
            </Content>
            <Footer className="footerWrapper">&copy; zhengbigbig</Footer>
          </div>
        </Layout>
      </Layout>
    </Layout>
  </Router>
  , document.querySelector('#root'));
