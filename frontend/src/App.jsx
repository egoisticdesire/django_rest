import React from 'react';
import axios from "axios";
import 'antd/dist/antd.dark.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Homepage} from "./pages/Home";
import {UsersList} from './pages/Users';
import {ProjectsList} from './pages/Projects';
import {ToDoList} from './pages/Todos';
import {NotFoundPage} from "./pages/NotFound";
import {SingleUser} from "./pages/SingleUser";
import {SingleProject} from "./pages/SingleProject";
import {SingleToDo} from "./pages/SingleTodo";
import {LayoutRoute} from './components/Layout';
import {TodoForm} from "./components/TodoForm";
import {ProjectForm} from "./components/ProjectForm";
import {LoginForm} from "./components/LoginForm";
import {localhost} from "./components/_Localhost";
import {message} from 'antd';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'todos': [],
            'token': '',
        }
    }

    deleteTodo(id) {
        const headers = this.getHeaders()
        axios.delete(`${localhost}/todos/${id}/`, {headers})
            .then(response => {
                this.setState({todos: this.state.todos.filter((item) => item.id !== id)})
            })
            .catch((error) => message.error({
                content: `${error}`,
                duration: '3',
                className: 'custom-class',
                style: {
                    marginTop: '2.5%',
                    textAlign: 'right',
                }
            }))
    }

    deleteProject(id) {
        const headers = this.getHeaders()

        axios.delete(`${localhost}/projects/${id}/`, {headers})
            .then(response => {
                this.setState({projects: this.state.projects.filter((item) => item.id !== id)})
            })
            .catch((error) => message.error({
                content: `${error}`,
                duration: '3',
                className: 'custom-class',
                style: {
                    marginTop: '2.5%',
                    textAlign: 'right',
                }
            }))
    }

    createTodo(title, project, user) {
        const headers = this.getHeaders()
        const data = {title: title, project: project, users: user}

        console.log(data)

        axios.post(`${localhost}/todos/`, data, {headers})
            .then(response => {
                let new_todo = response.data;
                const project = this.state.projects.filter((item) => item.id === new_todo.project)[0];
                new_todo.project = project;
                this.setState({todos: [new_todo, ...this.state.todos]});

            })
            .catch(error => console.log(error))
    }

    createProject(title, user) {
        const headers = this.getHeaders()
        const data = {title: title, users: user}

        // console.log(user)

        axios.post(`${localhost}/projects/`, data, {headers})
            .then(response => {
                this.setState({projects: [...this.state.projects, response.data]})
            })
            .catch(error => console.log(error))
    }

    setToken(token) {
        localStorage.setItem('token', token)
        this.setState({'token': token}, () => this.loadData())
    }

    isAuthenticated() {
        return this.state.token !== ''
    }

    logout() {
        this.setToken('', '')
    }

    getTokenFromStorage() {
        const token = localStorage.getItem('token')
        this.setState({'token': token}, () => this.loadData())
    }

    getToken(username, password) {
        axios.post(`${localhost}/auth/`, {username: username, password: password})
            .then(response => {
                this.setToken(response.data['token'],
                    message.success({
                        content: 'Успешная авторизация!',
                        duration: '3',
                        className: 'custom-class',
                        style: {
                            marginTop: '2.5%',
                            textAlign: 'right',
                        }
                    }))
            })
            .catch(() => message.error({
                content: 'Неверный логин или пароль!',
                duration: '3',
                className: 'custom-class',
                style: {
                    marginTop: '2.5%',
                    textAlign: 'right',
                }
            }))
    }

    getHeaders() {
        const headers = {
            'Content-Type': 'application/json'
        }
        if (this.isAuthenticated()) {
            headers['Authorization'] = `Token ${this.state.token}`
        }
        return headers
    }

    loadData() {
        const headers = this.getHeaders()

        axios.get(`${localhost}/users/`, {headers})
            .then(response => {
                this.setState({users: response.data.results,})
                // console.log(response.data.results)
            })
            .catch(error => {
                console.log(error)
                this.setState({users: []})
            });

        axios.get(`${localhost}/projects/`, {headers})
            .then(response => {
                this.setState({projects: response.data.results,})
            })
            .catch(error => {
                console.log(error)
                this.setState({projects: []})
            });

        axios.get(`${localhost}/todos/`, {headers})
            .then(response => {
                this.setState({todos: response.data.results,})
            })
            .catch(error => {
                console.log(error)
                this.setState({todos: []})
            });
    }

    componentDidMount() {
        this.getTokenFromStorage()
    }

    render() {
        const {users, projects, todos} = this.state

        return (<>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<LayoutRoute
                            isAuthenticated={() => this.isAuthenticated()}
                            logout={() => this.logout()}
                        />}
                    >
                        <Route
                            index
                            element={<Homepage/>}
                        />
                        <Route
                            path='*'
                            element={<NotFoundPage/>}
                        />
                        <Route
                            path='auth'
                            element={<LoginForm
                                getToken={(username, password) => this.getToken(username, password)}
                            />}
                        />
                        <Route
                            path='users'
                            element={<UsersList
                                users={users}
                            />}
                        />
                        <Route
                            path='users/:username'
                            element={<SingleUser
                                users={users}
                            />}
                        />
                        <Route
                            path='projects'
                            element={<ProjectsList
                                projects={projects}
                                deleteProject={(id) => this.deleteProject(id)}
                            />}
                        />
                        <Route
                            path='projects/:title'
                            element={<SingleProject
                                projects={projects}
                            />}
                        />
                        <Route
                            path='projects/create'
                            element={<ProjectForm
                                projects={projects}
                                users={users}
                                createProject={(title, user) => this.createProject(title, user)}
                            />}
                        />
                        <Route
                            path='todos'
                            element={<ToDoList
                                todos={todos}
                                deleteTodo={(id) => this.deleteTodo(id)}
                            />}
                        />
                        <Route
                            path='todos/:title'
                            element={<SingleToDo
                                todos={todos}
                            />}
                        />
                        <Route
                            path='todos/create'
                            element={<TodoForm
                                projects={projects}
                                users={users}
                                createTodo={(title, project, user) => this.createTodo(title, project, user)}
                            />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>)
    }
}

export default App;
