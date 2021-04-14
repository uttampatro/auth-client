import React from 'react';
import { useHistory } from 'react-router-dom';
import "./Dashboard.css"

function Dashboard() {
  const history = useHistory();


    const goToHome = () => {
        history.push("/");
    }

    return (
        <div className="dashboard">
            <button onClick={goToHome} className="dashboard_button">Logout</button>
        </div>
    )
}

export default Dashboard
