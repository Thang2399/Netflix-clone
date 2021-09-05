import React from 'react';

// Components
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

// Data
import {userData} from '../../dummyData';

import './Home.css';
import WidgetsSmall from '../../components/widgetsSmall/WidgetsSmall';
import WidgetsLarge from '../../components/widgetsLarge/WidgetsLarge';

const Home = () => {
    return (
			<div className='home'>
				<FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
            <div className="homeWidgets">
                <WidgetsSmall />
                <WidgetsLarge />
            </div>
			</div>
		);
}

export default Home;
