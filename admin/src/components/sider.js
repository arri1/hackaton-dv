import React, {useRef} from 'react'
import {Layout, Menu, Popconfirm} from 'antd'
import {useApolloClient} from '@apollo/react-hooks'
import {UploadOutlined, UserOutlined} from '@ant-design/icons'
import {useHistory} from 'react-router-dom'
import {BUSINESS} from '../gql/business/query'

const {Sider: AntSider} = Layout
const Sider = () => {
    const history = useHistory()
    const apollo = useApolloClient()
    const exitEl = useRef(null)
    const logOut = () => {
        localStorage.setItem('token', '')
        apollo.writeQuery({query: BUSINESS, data: {business: null}})
        history.replace('/')
    }
    return (
        <AntSider>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]}>
                <Menu.Item
                    onClick={() => {
                        history.push('/authorized/home')
                    }}
                    key='/authorized/home'
                    icon={<UserOutlined/>}>
                    Главная
                </Menu.Item>
                <Menu.Item
                    key="/authorized/products"
                    onClick={() => {
                        history.push('/authorized/products')
                    }}
                    icon={<UploadOutlined/>}>
                    Мои товары
                </Menu.Item>
                <Menu.Item
                    key='/authorized/addProducts'
                    icon={<UploadOutlined/>}
                    onClick={() => {
                        history.push('/authorized/addProducts')
                    }}
                >
                    Добавить товары
                </Menu.Item>
                <Menu.Item
                    key='/authorized/orders'
                    icon={<UploadOutlined/>}
                    onClick={() => {
                        history.push('/authorized/orders')
                    }}
                >
                    Заказы
                </Menu.Item>


                <Menu.Item
                    key="exit"
                    onClick={() => {
                        exitEl.current.onClick()
                    }}
                    icon={<UserOutlined/>}>
                    <Popconfirm
                        ref={exitEl}
                        onConfirm={logOut}
                        title="Вы уверены"
                        okText="Да"
                        cancelText="Нет">
                        Выйти
                    </Popconfirm>
                </Menu.Item>

            </Menu>
        </AntSider>
    )
}

export default Sider
