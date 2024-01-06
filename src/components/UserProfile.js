import { useState, useEffect } from 'react';
import { userProfile } from '../utils/constants';
import { useParams } from 'react-router-dom';



const UserProfile = () => {
    const [userData, setUserData] = useState([]);
    const { userId } = useParams();

    useEffect(() => {
        getUserProfileInfo();
    }, []);

    const getUserProfileInfo = async () => {
        try {
            const data = await fetch(userProfile);
            const userProfileInfo = await data.json();
            console.log('User Profile Data:', userProfileInfo);

            setUserData(userProfileInfo);
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    }

    if (userData.length === 0) {
        return <h1>User Profile Data Loading</h1>;
    }

    console.log('User Profile:', userData);

    return (
        <div className="flex justify-start items-start h-screen p-0">
        <div className="bg-purple-100 p-8 rounded-lg shadow-lg w-2/4 h-2/5">
            <h4 className="text-lg mb-4">Name: {userData[userId].name}</h4>
            <h4 className="text-lg mb-4">Username: {userData[userId].username}</h4>
            <h4 className="text-lg mb-4">Email: {userData[userId].email}</h4>
            {/* Other properties */}
        </div>
    </div>
    );
}

export default UserProfile;
