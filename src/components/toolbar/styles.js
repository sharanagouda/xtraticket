import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    toolbarContainer: {
        height: 56,
        backgroundColor: "#ba102c",
        width: "100%",
        alignItems:'center',
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 4
    },

   sidebarIcon: {
       width: 35,
       height: 35,
       backgroundColor: "#ffef62",
       marginHorizontal: 8,
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 50
   },
   toolbarImage: {
       paddingTop:30,
       width: 150,
       height: 50
   },


   menubar: {
       height: 56,
       alignItems: "center",
       justifyContent: "center",
       width: 36,
       marginHorizontal: 16
   },

   iconImage: {
       width: 30,
       height: 30
   },
   menifestTextCont: {
       flexDirection: "column",
       marginHorizontal: 8
   },
   menifestTitle: {
       fontSize: 18,
       fontWeight: "500"
   },
   menifestSubtitle: {
       fontSize: 14
   },
   menifestDesc: {
       fontSize: 14
   },
   flexibleButton: {
       flex: 1,
       paddingVertical: 8,
       marginHorizontal: 4,
       borderRadius: 2
   },
  
   toolbarTitle:{
    
       flexDirection:'row',
       flex:1
   },
   textHeaderStyle:{
       fontSize:18,
       color:'#FFF',
       textAlign:"center"
   },
  
});


  export default styles;