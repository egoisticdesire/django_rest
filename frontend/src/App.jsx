import React from 'react';
import axios from 'axios';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {Homepage} from "./pages/Home";
import {UsersList} from './pages/User';
import {ProjectsList} from './pages/Projects';
import {ToDoList} from './pages/Tasks';
import {NotFoundPage} from "./pages/NotFound";
import {SingleUser} from "./pages/SingleUser";
import {Layout} from './components/Layout'
import {SingleProject} from "./pages/SingleProject";
import {SingleToDo} from "./pages/SingleTask";

const localhost = 'http://127.0.0.1:8000/api';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'tasks': [],
        }
    }

    componentDidMount() {

        axios.get(`${localhost}/users/`)
            .then(response => {
                const users = response.data.results;
                this.setState(
                    {
                        'users': users,
                    }
                )
            }).catch(error => console.log(error));

        axios.get(`${localhost}/project/`)
            .then(response => {
                const projects = response.data.results;
                this.setState(
                    {
                        'projects': projects,
                    }
                )
            }).catch(error => console.log(error));

        axios.get(`${localhost}/todo/`)
            .then(response => {
                const tasks = response.data.results;
                this.setState(
                    {
                        'tasks': tasks,
                    }
                )
            }).catch(error => console.log(error));
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Layout/>}>
                            <Route index element={<Homepage/>}/>
                            <Route path='*' element={<NotFoundPage/>}/>
                            <Route path='users' element={<UsersList users={this.state.users}/>}/>
                            <Route path='users/:username' element={<SingleUser users={this.state.users}/>}/>
                            <Route path='projects' element={<ProjectsList projects={this.state.projects}/>}/>
                            <Route path='projects/:title' element={<SingleProject projects={this.state.projects}/>}/>
                            <Route path='tasks' element={<ToDoList tasks={this.state.tasks}/>}/>
                            <Route path='tasks/:title' element={<SingleToDo tasks={this.state.tasks}/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}

export default App;
