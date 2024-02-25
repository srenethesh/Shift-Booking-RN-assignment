import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Myshifts from "./Myshifts";
import Availableshifts from "./Availableshifts";

const HomeName = "My shifts";
const AvailableShifts = "Available shifts";

const Tab = createBottomTabNavigator();

function Navigationbar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 18,
          paddingBottom: 13,
        },
        tabBarActiveTintColor: "#004FB4",
        tabBarInactiveTintColor: "#CBD2E1",
        tabBarStyle: {
          backgroundColor: "#F1F4F8",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tab.Screen
        name={HomeName}
        component={Myshifts}
        options={{
          tabBarIcon: () => null,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name={AvailableShifts}
        component={Availableshifts}
        options={{
          tabBarIcon: () => null, 
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigationbar;
