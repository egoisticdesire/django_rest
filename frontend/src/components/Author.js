import React from 'react'

const AuthorItem = ({author}) => {
    return (
        <tr>
            <td>
                <span>{author.username}</span>
            </td>
            <td>
                <span>{author.firstname}</span>
            </td>
            <td>
                <span>{author.lastname}</span>
            </td>
            <td>
                <span>{author.email}</span>
            </td>
        </tr>
    )
}

const AuthorList = ({authors}) => {
    return (
        <table class="users__table">
            <th>Username</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            {authors.map((author) => <AuthorItem author={author}/>)}
        </table>
    )
}

export default AuthorList