import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';
import { height } from '@mui/system';
import React, {useState, useEffect} from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails } from '../../services/FetchService';

const FetchExample = () => {

    const [users,setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages,setPages] = useState(2)
    const [usersPerPage,setUsersPerPage] = useState(6)
    const [selectedUser,setSelectedUser] = useState({})

 useEffect(() => {
        obtainUsers();
    }, []);


    const obtainUsers = () => {
        getAllUsers()
            .then((response) => {
                console.log('All Users', response.data)
                setUsers(response.data)
                setPages(response.total_pages)
                setTotalUsers(response.total)
                setUsersPerPage(response.per_page)
            })
            .catch((error) => {
                alert(`Error while retreiving the users: ${error}`)
            })
            .finally(() => {
                console.log('Ended obtaining users:')
                console.table(users)
            })
    }

    const obtainPagedUsers = (page) => {
        getAllPagedUsers(page)
        .then((response) => {
            console.log('All Paged Users', response.data)
            setUsers(response.data)
            setPages(response.total_pages)
            setTotalUsers(response.total)
            setUsersPerPage(response.per_page)
        })
        .catch((error) => {
            alert(`Error while retreiving the users: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaining users:')
            console.table(users)
        })

    }

    const obtainUserDeatails = (id) => {
        getUserDetails(id)
        .then((response) => {
            console.log('selected Users', response.data)
            setSelectedUser(response.data)
            
        })
        .catch((error) => {
            alert(`Error while retreiving the user: ${error}`)
        })
        .finally(() => {
            console.log('Ended obtaining user:')
            console.table(users)
        })

    }


    return (
        <div>
            <h2>
                Users:
            </h2>
            {users.map( (user,index) => (
                <p key={index} onClick={() => obtainUserDeatails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>
                )
            )}
            
            <p>Showing {usersPerPage} users of {totalUsers}</p>
            
                <button onClick={() => obtainPagedUsers(1)}>
                    Users page 1
                </button>
                <button onClick={() => obtainPagedUsers(2)}>
                   Users page 2
                </button>
                <div>
                    <h3>
                        User details
                    </h3>
                    
                    {selectedUser && (
                        <div>
                            <p>Name: {selectedUser.first_name}</p>
                            <p>Last Name: {selectedUser.last_name}</p>
                            <p>Email: {selectedUser.email}</p>
                            <img alt='avatar' src={selectedUser.avatar} style={{height: '50px', width: '50px'}}/>
                        </div>
                    )}
                </div>
            
        </div>
    );
}

export default FetchExample;