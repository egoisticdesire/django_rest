import React from 'react';
import {Button, Form, Input, Select} from "antd"


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            users: props.users[0]?.uid,
        }
        // console.log(this.state)
    }

    handleSubmit = (values) => {
        const {createProject} = this.props
        createProject(values.title, values.user)
        // console.log(this.state.users)
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
                    remember: true,
                }}
                onFinish={(event) => this.handleSubmit(event)}
            >
                <Form.Item name="title">
                    <Input
                        placeholder="Title"
                    />
                </Form.Item>

                <Form.Item name="user">
                    <Select
                        placeholder='Select a person'
                        // defaultValue={this.state.users}
                        showSearch={false}
                        mode='multiple'
                        allowClear
                        showArrow
                    >
                        {this.props.users.map((item) =>
                            <Option
                                value={
                                    item.uid
                                    // item.username
                                }
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
                        Create Project
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

export {ProjectForm}
