import React,{ useContext} from 'react'
import { Link, Switch, Route, BrowserRouter, useHistory } from "react-router-dom"
import ChangePass from "./components/ChangePass.js"
import ChangeName from "./components/ChangeName.js"
import DeleteAccount from "./components/DeleteAccount"
import Navbar from "../navbar/Navbar"
import LeftSideBar from "../leftSideBar/LeftSideBar"
import RightSideBar from "../rightSideBar/RightSideBar"
import { UserContext } from '../../contexts/UserContext';


const Settings = () => {
    const { state, dispatch } = useContext(UserContext)
    return (
        <>
            <Navbar />
            <div className="layout-container">
                {(state) ? <LeftSideBar /> : null}

                {(state) ? <RightSideBar /> : null}
            </div>
            <div className="settings-container">

                <div className="settings-link-container">

                    <Link to="/settings/change-name" className="settings-link">Change Name</Link>
                    <Link to="/settings/change-password" className="settings-link">Change Password</Link>
                    <Link to="/settings/delete-account" className="settings-link">Delete Account</Link>

                </div>

                <div className="settings-each-container">

                    <Switch>
                        <Route path="/settings/change-password" exact component={ChangePass} />
                        <Route path="/settings/change-name" exact component={ChangeName} />
                        <Route path="/settings/delete-account" exact component={DeleteAccount} />

                    </Switch>

                </div>

            </div>
        </>
    )
}

export default Settings
