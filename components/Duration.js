import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
;

const Duration = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Add', value: 'add' },
    { label: 'Subtract', value: 'sub' },
    { label: 'Stop', value: 'stop' },
  ]);
  const [alarmTimes, setAlarmTimes] = useState([]);

  const timeList = () => {
    let x = 15; //minutes interval
    let times = []; // time array
    let tt = 0; // start time
    let ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i = 0; tt < 24 * 60; i++) {
      var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
      var mm = tt % 60; // getting minutes of the hour in 0-55 format
      times[i] = {
        value: i,
        label:
          ('0' + (hh % 12)).slice(-2) +
          ':' +
          ('0' + mm).slice(-2) +
          ap[Math.floor(hh / 12)],
      }; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }
    setAlarmTimes(times);
  };
  useEffect(() => {
    timeList();
  }, []);

  console.log(alarmTimes);
  return (
    <View
      style={{
        paddingRight: '5%',
        paddingLeft: '5%',
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons
          name="alarm"
          size={24}
          color="black"
          style={{ paddingRight: 10 }}
        />
       
        <TouchableOpacity style={{borderWidth:1.7, width:80, borderRadius:7,height:30}}>
        <View style={{marginLeft:5, marginTop:5}}>
        <Text>12.00AM</Text>
        </View>
        
        </TouchableOpacity>
        
        <Text> - </Text>
        <TouchableOpacity style={{borderWidth:1.7, width:80, borderRadius:7,height:30}}>
        <View style={{marginLeft:10, marginTop:5, }}>
        <Text >1.00PM</Text>
        </View>
       
        </TouchableOpacity>
        
        <TouchableOpacity style={{borderWidth:1.7, width:80, borderRadius:7, height:35, marginLeft:20, backgroundColor:"#FDB8B8"}}>
        <View style={{marginLeft:5, marginTop:5}}>
        <Text>1hr:00:00</Text>
        </View>
       
        </TouchableOpacity>
       
        </View>
      <View
        style={{
          zIndex: 50,
          elevation: 3,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 50,
        }}
      >
       
      </View>
    </View>
  );
};

export default Duration;

const styles = StyleSheet.create({});
