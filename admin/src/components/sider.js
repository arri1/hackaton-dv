import React from 'react'
import { Layout, Menu, Popconfirm } from 'antd'
import { useApolloClient } from '@apollo/react-hooks'
import { UploadOutlined, UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { BUSINESS } from '../gql/business/query'

const { Sider: AntSider } = Layout
const Sider = () => {
    const history = useHistory()
    const apollo = useApolloClient()
    const logOut = () => {
        localStorage.setItem('token', '')
        apollo.writeQuery({ query: BUSINESS, data: { business: null } })
        history.replace('/')
    }
    return (
        <AntSider
            onBreakpoint={broken => {
                console.log(broken)
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type)
            }}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item
                    onClick={() => {
                        history.push('/authorized/home')
                    }}
                    key="1"
                    icon={<UserOutlined />}>
                    Главная
                </Menu.Item>
                <Menu.Item
                    key="2"
                    icon={<UploadOutlined />}>
                    Мои товары
                </Menu.Item>
                <Menu.Item
                    key="3"
                    icon={<UploadOutlined />}
                    onClick={() => {
                        history.push('/authorized/addProducts')
                    }}
                >

                    Добавить товары
                </Menu.Item>

                <Menu.Item
                    key="4"
                    icon={<UserOutlined />}>
                    <Popconfirm
                        onConfirm={logOut}
                        title="Вы уверены？" okText="Да" cancelText="Нет">
                        Выйти
                    </Popconfirm>
                </Menu.Item>
            </Menu>
        </AntSider>
    )
}

export default Sider
