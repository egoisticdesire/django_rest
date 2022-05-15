import React from 'react';
import {Drawer, Button} from 'antd';
import {LoginForm} from "./LoginForm";


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
                >
                    <LoginForm/>

                </Drawer>
            </>
        );
    }
}

export {LoginDrawerForm}