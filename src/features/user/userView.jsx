import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () =>
{
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);

    useEffect( () =>
    {
        dispatch(fetchUsers());
    }, []);

    return (
    <div>
        <h2>List of users</h2>
        {users.loading && <p>Loading...</p>}
        {!users.loading && users.error ? <p>Error: {users.error}</p> : null}
        {!users.loading && users.users.length > 0 ? (
            <ul>
                {users.users.map((user) => <li key={user.id}>{user.name}  ({user.id})</li>)}
            </ul>
        ) : null}
    </div>
    );
}
