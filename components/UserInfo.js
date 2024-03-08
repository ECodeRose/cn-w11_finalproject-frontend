import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const UserInfo = () => {
    const history = useHistory();
    const handleHomeClick = () => {
        //Replace '/' with the actual path to your home page
        history.push('/')
    
};
const handleLikesClick = () => {
//Code to handle navigation to likes page 
alert('Hello, Test!');

};
///const handleHelloTestClick = () => {
    //Code to handle hello test functionality
    //alert('Hello, Test');
//};
const handleLogoutClick = () => {
    //Code to handle user logout
    alert('Logging out...');
    //Replace '/login' with the actual path to your login page
    history.push('/login');

};

return (
    <div>
        <button onClick={handleHomeClick}>Home</button>
        <Link to="/likes">Likes</Link>
        <button onClick={handleLikesClick}>Likes</button>
        //<button onClick={handleHelloTestClick}>Hello Test</button>
        <button onClick={handleLogoutClick}>Logout</button>

    </div>
);
};
export default UserInfo;

