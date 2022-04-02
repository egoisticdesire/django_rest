import React from 'react';
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {RegistrationForm} from "./RegisterForm";
import {NormalLoginForm} from "./LoginForm";


class LoginDrawerForm extends React.Component {
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button
                    style={{
                        margin: '10px',
                        float: 'right',
                    }}
                    type="ghost"
                    onClick={this.showDrawer}
                >
                    Login
                </Button>
                <Drawer
                    title="Login"
                    width={480}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{paddingBottom: 80}}
                    extra={
                        <Space>
                            <Button onClick={this.onClose}>Cancel</Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                            </Button>
                        </Space>
                    }
                >
                    <NormalLoginForm/>

                </Drawer>
            </>
        );
    }
}

export {LoginDrawerForm}