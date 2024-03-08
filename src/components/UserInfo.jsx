import { useContext, useEffect } from 'react';
import './UserInfo.css';
import { userContext } from '../common/contexts';

const UserInfo = () => {
    const {user, setUser} = useContext(userContext);

    const handleLogout = () => {
        setUser(null);
    };

    useEffect(() => {
        console.log(user);
    }, [user]);

    if (user) {
        console.log("user available");
        return (
            <div className="user-info-container">
                <div className="user-info-left">
                    {/* {profilePicture && <img src={profilePicture} alt="Profile" className="profile-picture" />} */}
                    <div>
                        <p className="user-greeting">Welcome {user.username}!</p>
                    </div>
                </div>
                <div className="user-info-right">
                    <button className="user-info-button" onClick={handleLogout}>Logout</button>
                </div>
            </div>
        );
    }
};

export default UserInfo;

