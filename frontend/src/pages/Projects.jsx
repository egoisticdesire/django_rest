import React from 'react';
import {Link} from "react-router-dom";
import {Button, Table, Input, Space} from "antd";
import {BackBtn, NewProjectBtn} from "../components/Buttons";
import {CloseCircleOutlined, SearchOutlined} from "@ant-design/icons";
import Highlighter from 'react-highlight-words';
import {motion, AnimatePresence} from "framer-motion";


class ProjectsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
        };

    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => {
                            this.handleReset(clearFilters);
                            confirm({closeDropdown: false});
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            })
                        }
                        }
                        size="small"
                        style={{width: 90}}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined
            style={{padding: '0 0.5rem', color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    render() {
        const {projects, deleteProject} = this.props

        projects.map((item) => item.key = item.id)
        const positionPagination = {
            top: 'topRight',
            bottom: 'bottomRight',
        }

        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                width: '40%',
                ...this.getColumnSearchProps('title'),
                render: (project) => <Link to={`${project}`}>{project}</Link>,
            },
            {
                title: 'Link',
                dataIndex: 'link',
                key: 'link',
                width: '53%',
            },
            {
                title: 'Action',
                key: 'action',
                width: '7%',
                render: (item) => (<Button
                    type="link"
                    danger
                    style={{width: '100%'}}
                    onClick={() => deleteProject(item.id)}
                    icon={<CloseCircleOutlined/>}
                />)
            },
        ]
        const variants = {
            visible: {
                opacity: 1,
                y: 0,
            },
            hidden: {
                opacity: 0,
                y: 100,
            },
        }
        return (
            <>
                <BackBtn/>
                <AnimatePresence>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={variants}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                        }}
                    >
                        <Table
                            size="small"
                            columns={columns}
                            dataSource={projects}
                            pagination={{
                                position: [
                                    positionPagination.top,
                                    positionPagination.bottom
                                ],
                                hideOnSinglePage: true,
                                defaultPageSize: 10,
                            }}
                        />
                        <NewProjectBtn/>
                    </motion.div>
                </AnimatePresence>
            </>)
    }
}


// const ProjectsList = ({projects, deleteProject, searchProject}) => {
//     projects.map((item) => item.key = item.id);
//
//     const positionPagination = {
//         top: 'topRight',
//         bottom: 'bottomRight',
//     }
//     const navigate = useNavigate();
//     const columns = [
//         {
//             title: 'Title',
//             dataIndex: 'title',
//             key: 'title',
//             width: '40%',
//
//             render: (project) => <Link to={`${project}`}>{project}</Link>,
//         },
//         {
//             title: 'Link',
//             dataIndex: 'link',
//             key: 'link',
//             width: '53%',
//         },
//         {
//             title: 'Action',
//             key: 'action',
//             width: '7%',
//             render: (item) => (<Button
//                 type="link"
//                 danger
//                 style={{width: '100%'}}
//                 onClick={() => deleteProject(item.id)}
//                 icon={<CloseCircleOutlined/>}
//             />)
//         },
//     ]
//     const {Search} = Input;
//
//     // const [search, setSearch] = useState(projects)
//
//
//     // useEffect(() => {
//     //     // такая конструкция предотвращает перезапись стейта при поиске
//     //     if (typeof search !== 'object' && projects.length > 0) {
//     //         console.log('pr ' + projects);
//     //         setSearch(projects);
//     //     }
//     // });
//     //
//     // const onSearch = value => {
//     //     console.log('search: ' + value);
//     //     projects = projects.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
//     //     setSearch(projects);
//     // }
//
//
//     return (
//         <>
//             <BackBtn/>
//
//             {/*<Search*/}
//             {/*    placeholder="input search text"*/}
//             {/*    allowClear={handleReset}*/}
//             {/*    onSearch={handleSearch}*/}
//             {/*    // onSearch={(title) => searchProject(title)}*/}
//             {/*    style={{*/}
//             {/*        width: '100%',*/}
//             {/*        marginBottom: '1rem',*/}
//             {/*    }}*/}
//             {/*/>*/}
//
//             {<SearchProject/>}
//
//             <Table
//                 size="small"
//                 columns={columns}
//                 dataSource={projects}
//                 pagination={{
//                     position: [
//                         positionPagination.top,
//                         positionPagination.bottom
//                     ],
//                     hideOnSinglePage: true,
//                     defaultPageSize: 10,
//                 }}
//             />
//             <Button
//                 type="primary"
//                 style={{width: '100%'}}
//                 onClick={() => navigate('/projects/create')}
//             >
//                 New Project
//             </Button>
//         </>
//     )
// }


// const ProjectItem = ({project}) => {
//     return (
//         <tr>
//             <td><Link to={`${project.title}`}>{project.title}</Link></td>
//             <td>{project.link}</td>
//             <td>{project.users}</td>
//         </tr>
//     )
// }
//
// const ProjectsList = ({projects}) => {
//     return (
//         <table>
//             <thead>
//             <tr>
//                 <th>Title</th>
//                 <th>Link</th>
//                 <th>Users</th>
//             </tr>
//             </thead>
//             <tbody>
//             {projects.map((item) => <ProjectItem project={item}/>)}
//             </tbody>
//         </table>
//     )
// }

export {ProjectsList};
