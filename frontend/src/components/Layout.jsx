import React from "react";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {
    Button,
    Col,
    Row,
    Divider,
    Layout,
} from 'antd';
import {RegisterDrawerForm} from "./RegisterDrawer";
import {LoginDrawerForm} from "./LoginDrawer";


const LayoutRoute = () => {
    const {Header, Footer, Content} = Layout;
    return (
        <>
            <Layout>
                <Row>
                    <Col span={24}>
                        <Header
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <NavLink style={{margin: '0 20px'}} to='/'>
                                <Button type="dashed" shape='round'>home</Button>
                            </NavLink>
                            <NavLink style={{margin: '0 20px'}} to='/users'>
                                <Button type="dashed" shape='round'>users</Button>
                            </NavLink>
                            <NavLink style={{margin: '0 20px'}} to='/projects'>
                                <Button type="dashed" shape='round'>projects</Button>
                            </NavLink>
                            <NavLink style={{margin: '0 20px'}} to='/tasks'>
                                <Button type="dashed" shape='round'>todolist</Button>
                            </NavLink>
                        </Header>
                    </Col>
                </Row>

                <Row>
                    <Col
                        xs={{span: 24}}
                        lg={{span: 16, offset: 4}}
                    >
                        <Content>
                            <RegisterDrawerForm/>
                            <LoginDrawerForm/>
                            <Outlet/>
                            <Divider/>
                        </Content>
                    </Col>
                </Row>

                <Row>
                    <Col span={24}>
                        <Footer
                            style={{
                                // backgroundColor: '#1f1f1f',
                                textAlign: 'center',
                            }}
                        >
                            &copy;2022
                        </Footer>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export {LayoutRoute};