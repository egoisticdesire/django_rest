import React from 'react';
import axios from "axios";
import 'antd/dist/antd.dark.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Homepage} from "./pages/Home";
import {UsersList} from './pages/Users';
import {ProjectsList} from './pages/Projects';
import {ToDoList} from './pages/Tasks';
import {NotFoundPage} from "./pages/NotFound";
import {SingleUser} from "./pages/SingleUser";
import {SingleProject} from "./pages/SingleProject";
import {SingleToDo} from "./pages/SingleTask";
import {LayoutRoute} from './components/Layout';
import {LoginForm} from "./components/LoginForm";
import {localhost} from "./components/_Localhost";
import {message} from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [], 'projects': [], 'tasks': [], 'token': '',
        }
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
        axios.post(`${localhost}/auth/`, {username: username, password: password}).then(response => {
            this.setToken(response.data['token'],
                message.success({
                    content: 'Успешная авторизация!',
                    duration:'3',
                    className: 'custom-class',
                    style: {
                        marginTop: '2.5%',
                        textAlign: 'right',
                    }
                }))
        }).catch(() => message.error({
            content: 'Неверный логин или пароль!',
            duration:'3',
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
                this.setState({'users': response.data.results,})
            }).catch(error => {
            console.log(error)
            this.setState({users: []})
        });

        axios.get(`${localhost}/projects/`, {headers})
            .then(response => {
                this.setState({'projects': response.data.results,})
            }).catch(error => {
            console.log(error)
            this.setState({projects: []})
        });

        axios.get(`${localhost}/todos/`, {headers})
            .then(response => {
                this.setState({'tasks': response.data.results,})
            }).catch(error => {
            console.log(error)
            this.setState({tasks: []})
        });
    }

    componentDidMount() {
        this.getTokenFromStorage()
    }

    render() {
        return (<>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LayoutRoute
                        isAuthenticated={() => this.isAuthenticated()}
                        logout={() => this.logout()}
                    />}>
                        <Route index element={<Homepage/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                        <Route path='auth' element={<LoginForm
                            getToken={(username, password) => this.getToken(username, password)}
                        />}/>
                        <Route path='users' element={<UsersList users={this.state.users}/>}/>
                        <Route path='users/:username' element={<SingleUser users={this.state.users}/>}/>
                        <Route path='projects' element={<ProjectsList projects={this.state.projects}/>}/>
                        <Route path='projects/:title' element={<SingleProject projects={this.state.projects}/>}/>
                        <Route path='tasks' element={<ToDoList tasks={this.state.tasks}/>}/>
                        <Route path='tasks/:title' element={<SingleToDo tasks={this.state.tasks}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>)
    }
}

export default App;
