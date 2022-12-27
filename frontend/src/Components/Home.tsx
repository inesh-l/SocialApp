import React from 'react';
import '../styles.css';
import {Navigate} from 'react-router-dom';
function Home({user}: { user: String }) {
    if (!user) {
        return <Navigate to={"landing"}></Navigate>
    }
    return (
        <p>Home page</p>
    );
}
export default Home;