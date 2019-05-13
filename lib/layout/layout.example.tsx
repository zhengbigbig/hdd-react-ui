import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Sider from "./sider";

export default function () {
  return (
    <div>
      <div>
        <h1>One</h1>
        <Layout className="x" style={{color:'#fff'}}>
          <Header style={{background:'#7dbcea'}}>header</Header>
          <Content style={{background:'rgba(16, 142, 233, 1)'}}>content</Content>
          <Footer style={{background:'#7dbcea'}}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Tow</h1>
        <Layout style={{color:'#fff'}}>
          <Header style={{background:'#7dbcea'}}>Header</Header>
          <Layout>
            <Sider style={{background:'#9DEDEF'}}>Sider</Sider>
            <Content style={{background:'rgba(16, 142, 233, 1)'}}>Content</Content>
          </Layout>
          <Footer style={{background:'#7dbcea'}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Three</h1>
        <Layout style={{color:'#fff'}}>
          <Header style={{background:'#7dbcea'}}>Header</Header>
          <Layout>
            <Content style={{background:'rgba(16, 142, 233, 1)'}}>Content</Content>
            <Sider style={{background:'#9DEDEF'}}>Sider</Sider>
          </Layout>
          <Footer style={{background:'#7dbcea'}}>Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>Four</h1>
        <Layout style={{color:'#fff'}}>
          <Sider style={{background:'#9DEDEF'}}>Sider</Sider>
          <Layout>
            <Header style={{background:'#7dbcea'}}>Header</Header>
            <Content style={{background:'rgba(16, 142, 233, 1)'}}>Content</Content>
            <Footer style={{background:'#7dbcea'}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}

