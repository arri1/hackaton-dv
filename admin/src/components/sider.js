import React from 'react'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'

const { Sider } = Layout;

const SiderStyle = styled.div`
    background-color:white;
`

const Logo = styled.div`
    display:flex;
    align-items: center;
    background-color: #222222;
    height:15vh;
    width:20.5vh;
`
const Lider = () => {
    return(
    <SiderStyle>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}>

      <div/>
      <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
        <Logo></Logo>
        <Menu.Item key="1" icon={<UserOutlined />}>
        Главная
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        Редактировать
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
        Мои товары
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
        Заказы
        </Menu.Item>
      </Menu>
    </Sider>
    </SiderStyle>
    )
}

export default Lider;