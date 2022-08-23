
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default class BottomNavigator extends Component {
  toggleOpen = () => {};

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
        }}
      >
        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'white',
            width: 70,
            height: 70,
            borderRadius: 35,
            bottom: 35,
            zIndex: 10,
          }}
        >
          <TouchableWithoutFeedback onPress={this.toggleOpen}>
            <View style={[styles.button, styles.actionBtn]}>
            <Image source={require("../assets/button.png")} style={{width:60}}/>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            border: 2,
            radius: 3,
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {
              height: 3,
              width: 3,
            },
            x: 0,
            y: 0,
            style: { marginVertical: 5 },
            bottom: 0,
            width: '100%',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}
            >
            <MaterialCommunityIcons name="home-outline" size={26} color="#34A853" />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center',color:"#34A853" }}>
              Home
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginStart: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}
            >
            <Octicons name="search" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center' }}>
              search{' '}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginStart: 85,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}
            >
            <Ionicons name="notifications-outline" size={24} color="black" />
              
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center'}}>
              Notifications
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Alert.alert('click');
              }}
            >
            <Ionicons name="ios-settings-outline" size={24} color="black" />
             
            </TouchableOpacity>
            <Text style={{ justifyContent: 'center', alignItems: 'center',marginLeft:10 }}>
              Setting
            </Text>
          </View>

          {/* </View> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
  },
  actionBtn: {
    backgroundColor: '#34A853',
    padding: 20,
  },
});
