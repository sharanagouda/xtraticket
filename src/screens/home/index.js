import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,DrawerLayoutAndroid,Platform,SafeAreaView} from "react-native";
import styles from "./styles";
import Toolbar from "../../components/toolbar";
import Sidebar from "../sidebar";

// const propTypes = {
//     onbackPress: PropTypes.func,
//     toolbarTitle: PropTypes.string,
//     renderContent: PropTypes.element
// };

// const defaultProps = {
//     onbackPress: () => {},
//     toolbarTitle: "",
//     renderContent: <Text>Content</Text>
// };


class Home extends Component {

    openDrawer = () => {
        this.drawer.openDrawer();
    }


    render() {
        const navigationView = (<Sidebar/>);
        if(Platform.OS=="android"){
            return (
                <DrawerLayoutAndroid
                id="drwaer"
                 drawerWidth={300}
                 ref={node => this.drawer = node}
                 drawerPosition={DrawerLayoutAndroid.positions.Left}
                 renderNavigationView={() => navigationView}>
                <View style={styles.appContainer}>
                <Toolbar openDrawer={this.openDrawer} toolbarName="Home"/>
                    <View style={styles.bodyContent}>
                        {this.props.renderContent}
                        <Text>skdjf</Text>
                    </View>
                </View>
                </DrawerLayoutAndroid>
            );
        }
        else{
            return (
                <React.Fragment>
                    <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                    <SafeAreaView style={styles.appContainer}>
                        <Toolbar openDrawer={this.openDrawer} toolbarName="Basic components"/>
                        <View style={styles.bodyContent}>
                            {this.props.renderContent}
                            <Text>skdjf</Text>
                        </View>
                    </SafeAreaView>
                </React.Fragment>
                   
            );
        }
       
    }
}

// Home.defaultProps = defaultProps;

// Home.propTypes = propTypes;

export default Home;