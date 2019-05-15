import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Sider from "./sider";
import './layout.example.less'

export default function () {
  return (
    <div>
      <div>
        <h1>One</h1>
        <Layout className="container">
          <Header className="header">header</Header>
          <Content className="content">content</Content>
          <Footer className="footer">footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Tow</h1>
        <Layout className="container">
          <Header className="header">Header</Header>
          <Layout>
            <Sider className="sider x">Sider</Sider>
            <Content className="content">Content</Content>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Three</h1>
        <Layout className="container">
          <Header className="header">Header</Header>
          <Layout>
            <Content className="content">Content</Content>
            <Sider className="sider y">Sider</Sider>
          </Layout>
          <Footer className="footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Four</h1>
        <Layout className="container">
          <Sider className="sider z">Sider</Sider>
          <Layout>
            <Header className="header">Header</Header>
            <Content className="content">Content</Content>
            <Footer className="footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

