import React,{Component} from "react";
import {Router,Scene,Stack,Tabs} from "react-native-router-flux";

//Authentication
import Login from "../screens/login";
import Register from "../screens/register";

import Home from "../screens/home";
import EditProfile from "../screens/editProfile";
import Sidebar from "../screens/register";
import PostTicket from "../screens/postTicket";


class RouteComponent extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar>
                    <Stack key="auth">
                   
                        <Scene key="login" component={Login}/>
                        <Scene key="register" component={Register} />
                    </Stack>
                    <Stack key="app" hideNavBar panHandler={null}>
                        <Tabs>
                            <Scene key="home" component={Home} title="Home"/>
                            <Scene key="postTicket" component={PostTicket} title="Post Ticket"/> 
                            <Scene key="editProfile"  component={EditProfile} title="Edit Profile"/>
                        </Tabs>
                        <Scene key="sidebar" component={Sidebar} title="Sidebar"/>
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

export default RouteComponent;