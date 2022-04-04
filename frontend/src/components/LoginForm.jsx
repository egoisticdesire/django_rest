import React from 'react'
import {Button, Checkbox, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {username: '', password: ''}
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (values) => {
        // console.log(`login: ${values.username}; password: ${values.password}`)
        this.props.getToken(values.username, values.password)
    }

    render() {
        const layout = {
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16, offset: 4},
                md: {span: 14, offset: 5},
                lg: {span: 12, offset: 6},
            },
        };

        return (
            <Form
                {...layout}
                name="normal_login"
                className="login-form"
                size="large"
                initialValues={{
                    remember: true,
                }}
                onFinish={(event) => this.handleSubmit(event)}
            >
                <Form.Item
                    name="username"
                    rules={[{
                        required: true, message: 'Please input your Username!',
                    },]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon"/>}
                        placeholder="Username"
                        value={this.state.username}
                        onChange={(event) => this.handleChange(event)}
                    />

                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{
                        required: true, message: 'Please input your Password!',
                    },]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={(event) => this.handleChange(event)}
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

export {LoginForm}