import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data: users, isLoading, refetch} = useQuery('/users', ()=> fetch('https://guarded-hamlet-53272.herokuapp.com/user',{
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()));
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <div className="text-2xl">All users: {users.length}</div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                            key={user._id}
                            index={index}
                            refetch={refetch}
                            user={user}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;