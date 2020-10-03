import React from 'react'
import { Layout, Menu } from 'antd'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'

const { Sider: AntSider } = Layout
const Sider = () => {
    return (
        <AntSider
            onBreakpoint={broken => {
                console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Главная
                </Menu.Item>
                <Menu.Item key="2" icon={<UploadOutlined />}>
                    Мои товары
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    Добавить товары
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    Профиль
                </Menu.Item>
            </Menu>
        </AntSider>
    )
}

export default Sider
