import React, {useEffect, useState, useMemo} from 'react';
// axios
import axios from 'axios';

// Components
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

import './Home.css';
import WidgetsSmall from '../../components/widgetsSmall/WidgetsSmall';
import WidgetsLarge from '../../components/widgetsLarge/WidgetsLarge';

const Home = () => {
    const Months = useMemo(
        () => [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        [],
    );

    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await axios.get('/users/stats', {
                    headers: {
                        token:
                            'Hello eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjg5OTQwYjEzOWRhMzdlYTE3NTc4MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMDMxMTM0NywiZXhwIjoxNjMwOTE2MTQ3fQ.1TJMjCHxXZPZzHaFjCtF4kGfa9Tm5CpKPOLc2ItC5aM',
                    },
                });
                const statsList = res.data.sort(function(a, b) {
                    return a._id - b._id;
                })
                statsList.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: Months[item._id - 1], 'New User': item.total },
                    ]),
                );
            } catch (error) {
                console.log(error);
            }
        };
        getStats();
    }, [Months]);
    
    return (
			<div className='home'>
				<FeaturedInfo />
            <Chart data={userStats} title='User Analytics' grid dataKey='New User' />
            <div className="homeWidgets">
                <WidgetsSmall />
                <WidgetsLarge />
            </div>
			</div>
		);
}

export default Home;
