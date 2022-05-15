import React from 'react';
import {Button, Form, Input, Select} from "antd"


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', project: props.projects, user: props.users[0]?.uid}
    }

    handleSubmit = (values) => {
        const {createTodo} = this.props

        // console.log(values.title)
        // console.log(values.project)
        // console.log(values.user)

        createTodo(values.title, values.project, values.user)
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
        const {Option} = Select;

        return (
            <Form
                {...layout}
                size="large"
                initialValues={{
                    remember: false,
                }}
                onFinish={(event) => this.handleSubmit(event)}
            >
                <Form.Item name="title">
                    <Input
                        placeholder="Title"
                    />
                </Form.Item>
                <Form.Item name="project">
                    <Select
                        placeholder='Select a project'
                        allowClear
                        showArrow
                    >
                        {this.props.projects.map((item) =>
                            <Option
                                value={item.id}
                                key={item.id}
                            >
                                {item.title}
                            </Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="user">
                    <Select
                        placeholder='Select a person'
                        mode='multiple'
                        allowClear
                        showArrow
                    >
                        {this.props.users.map((item) =>
                            <Option
                                value={item.uid}
                                key={item.uid}
                            >
                                {item.username}
                            </Option>)}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{width: '100%'}}
                    >
                        Create Todo
                    </Button>
                </Form.Item>
            </Form>


            // <form
            //     onSubmit={(event) => this.handleSubmit(event)}>
            //     <div className="form-group">
            //         <label htmlFor="login">title</label>
            //         <input type="text"
            //                className="form-control"
            //                name="title"
            //                value={this.state.title}
            //                onChange={(event) => this.handleChange(event)}/>
            //     </div>
            //     <div className="form-group">
            //         <label htmlFor="project">project</label>
            //         <input type="text"
            //                className="form-control"
            //                name="project"
            //                value={this.state.project}
            //                onChange={(event) => this.handleChange(event)}/>
            //     </div>
            //     <div className="form-group">
            //         <label htmlFor="user">user</label>
            //         <input type="url" // number
            //                className="form-control"
            //                name="user"
            //                value={this.state.user}
            //                onChange={(event) => this.handleChange(event)}/>
            //     </div>
            //     <input type="submit" className="btn btn-primary" value="Save"/>
            // </form>
        )
    }
}

export {TodoForm}
