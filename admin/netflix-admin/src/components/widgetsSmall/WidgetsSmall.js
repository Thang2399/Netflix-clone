import React, {useState, useEffect} from 'react';
// axios
import axios from 'axios';

import { Visibility } from '@material-ui/icons';
import './WidgetsSmall.css';

const imgURL = 'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg';

const WidgetsSmall = () => {
    const [newUsers, setNewUsers] = useState([]);
    
    console.log(newUsers);
    
    useEffect(() => {
        const getNewUsers = async () => {
            try {
            const res = await axios.get('/users?new=true', {
                headers: {
                    token:
                        'Hello eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg5OTQwYjEzOWRhMzdlYTE3NTc4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDkxODIzOCwiZXhwIjoxNjMxNTIzMDM4fQ.yDbA_iMgTta-LMYhKd1awj84P7F8sL2s4Suhu_MVva4',
                },
            });
            setNewUsers(res.data);
            } catch (error) {
            console.log(error);
        }};
        getNewUsers();
    }, []);

    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>New Join Members</span>
            <ul className='widgetSmList'>
                {newUsers.map((user) => {
                    return (
                        <li className='widgetSmListItem' key={user._id}>
                        <img
                            src={user.image || imgURL}
                            alt={user.name}
                            className='widgetSmImg'
                        />
                        <div className='widgetSmUser'>
                                <span className='widgetSmUsername'>
                                    {user.username}
                                </span>
                        </div>
                        <button className='widgetSmButton'>
                            <Visibility className='widgetSmIcon' />
                            Display
                        </button>
                    </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default WidgetsSmall;
