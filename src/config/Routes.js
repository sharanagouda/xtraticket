import React,{Component} from "react";
import {Router,Scene,Stack,Tabs} from "react-native-router-flux";

//Authentication
import Login from "../screens/login";
import Register from "../screens/register";

import Home from "../screens/home";
import EditProfile from "../screens/editProfile";
import Sidebar from "../screens/register";
import PostTicket from "../screens/postTicket";

import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeIcon = () => <Icon name="home" size={25} />;
const ExploreIcon = () => <Ionicons name="md-search" size={25} />;
const AddPostIcon = () => <EvilIcons name="plus" size={25} />;
const ProfileIcon = () => <Icon name="user" size={25} />;

class RouteComponent extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar>
                {/*    <Stack key="auth">
                    
                        <Scene key="login" component={Login}/>
                        <Scene key="register" component={Register} />
        </Stack>*/}
                    <Stack key="app" hideNavBar panHandler={null}>
                        <Tabs>
                            <Scene key="home" component={Home} title="Home" hideNavBar={true} icon={HomeIcon}/>
                            <Scene key="postTicket" component={PostTicket} hideNavBar={true} title="Post Ticket" icon={AddPostIcon}/> 
                            <Scene key="editProfile" component={EditProfile} hideNavBar={true} title="Edit Profile" icon={ProfileIcon}/>
                        </Tabs>
                        <Scene key="sidebar" component={Sidebar} title="Sidebar"/>
                    </Stack>
                </Stack>
            </Router>
        )
    }
}

export default RouteComponent;