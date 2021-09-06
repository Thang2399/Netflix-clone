import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { userRows } from '../../../dummyData';

import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import './UserList.css';

const UserList = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = ( id ) => {
        
        const specificUser = data.filter((user) => user.id !== id);
        setData(specificUser);
    };

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'username',
			headerName: 'User Name',
			width: 250,
			editable: true,
			renderCell: (params) => (
				<div className='userListUser'>
					<img
						src={params.row.avatar}
						alt={params.row.username}
						className='userListImg'
					/>
					{params.row.username}
				</div>
			),
		},
		{
			field: 'email',
			headerName: 'Email',
			width: 200,
			editable: true,
		},
		{
			field: 'status',
			headerName: 'Status',
			width: 140,
			editable: true,
		},
		{
			field: 'transaction',
			headerName: 'Transaction',
			description: 'This column has a value getter and is not sortable.',
			sortable: false,
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => (
				<>
					<Link to={`/user/${params.row.id}`}>
						<button className='userListEdit'>Edit</button>
					</Link>
					<DeleteOutline
						className='userListDelete'
						onClick={() => handleDelete(params.row.id)}
					/>
				</>
			),
		},
	];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}

export default UserList;
