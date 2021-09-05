import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import './TopBar.css';

const url = 'https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

const TopBar = () => {
    return (
			<div className='topbar'>
				<div className='topbarWrapper'>
					<div className='topLeft'>
						<span className='logo'>thang@admin</span>
					</div>
					<div className='topRight'>
						<div className='topbarIconContainer'>
							<NotificationsNone />
							<span className='topIconBadge'>2</span>
						</div>
						<div className='topbarIconContainer'>
							<Language />
							<span className='topIconBadge'>2</span>
						</div>
						<div className='topbarIconContainer'>
							<Settings />
						</div>
						<img
							src={url}
							alt=''
							className='topAvatar'
						/>
					</div>
				</div>
			</div>
		);
}

export default TopBar;
