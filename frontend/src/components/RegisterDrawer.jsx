import React from 'react';
import {Drawer, Button, Space} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {RegistrationForm} from "./RegisterForm";


class RegisterDrawerForm extends React.Component {
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
                    icon={<PlusOutlined/>}
                >
                    New account
                </Button>
                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{paddingBottom: 80}}
                >
                    <RegistrationForm/>

                </Drawer>
            </>
        );
    }
}

export {RegisterDrawerForm}