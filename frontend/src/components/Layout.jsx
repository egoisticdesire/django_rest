import React from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {Col, Row, Divider, Layout, Menu, PageHeader, Button, Space,} from 'antd';
import {RegisterDrawerForm} from "./RegisterDrawer";
import {LoginDrawerForm} from "./LoginDrawer";
import Text from "antd/es/typography/Text";
import {
    FundProjectionScreenOutlined, HomeOutlined, LoginOutlined, LogoutOutlined, SnippetsOutlined, UserOutlined
} from "@ant-design/icons";
import {message} from 'antd';


const LayoutRoute = (props) => {
    const {Footer, Content} = Layout;
    const navigate = useNavigate();
    return (<>
        <Layout>
            <Row>
                <Col xs={24}>

                    <Menu
                        style={{display: 'flex', justifyContent: 'center'}}
                        mode="horizontal"
                    >
                        <Menu.Item key="main" icon={<HomeOutlined/>}>
                            <Link to='/'>Главная</Link>
                        </Menu.Item>
                        <Menu.Item key="projects" icon={<FundProjectionScreenOutlined/>}>
                            <Link to='/projects'>Проекты</Link>
                        </Menu.Item>
                        <Menu.Item key="tasks" icon={<SnippetsOutlined/>}>
                            <Link to='/tasks'>Заметки</Link>
                        </Menu.Item>
                        <Menu.Item key="users" icon={<UserOutlined/>}>
                            <Link to='/users'>Пользователи</Link>
                        </Menu.Item>
                    </Menu>
                    <PageHeader style={{float: 'right'}}>
                        <Space>
                            {props.isAuthenticated() ?
                                <Button type="ghost" shape="dashed" icon={<LogoutOutlined/>}
                                        onClick={() => {
                                            props.logout()
                                            navigate('/')
                                            message.info({
                                                content: 'Вы вышли из учетной записи!',
                                                duration: '3',
                                                className: 'custom-class',
                                                style: {
                                                    marginTop: '2.5%',
                                                    textAlign: 'right',
                                                }
                                            })
                                        }}>Выйти
                                </Button> :
                                <Button type="ghost" shape="dashed" icon={<LoginOutlined/>}
                                        onClick={() => navigate('/auth')}>
                                    Войти
                                </Button>}
                        </Space>
                    </PageHeader>
                </Col>
            </Row>

            <Row>
                <Col
                    xs={{span: 24}}
                    lg={{span: 14, offset: 5}}
                >
                    <Content>
                        {/*<RegisterDrawerForm/>*/}
                        {/*<LoginDrawerForm/>*/}
                        <Outlet/>
                        <Divider/>
                    </Content>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Footer>
                        <Divider/>
                        <Text>
                            <center>&copy;2022</center>
                        </Text>
                    </Footer>
                </Col>
            </Row>
        </Layout>
    </>);
}


export {LayoutRoute};