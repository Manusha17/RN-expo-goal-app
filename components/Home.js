import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Goal from "./Goal";
import CompletedGoals from "./CompletedGoals";
import { Octicons } from "@expo/vector-icons";

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Goal"
        component={Goal}
        options={{
          tabBarIcon: () => {
            return <Octicons name="list-unordered" size={24} color="black" />;
          },
        }}
      />
      <Tab.Screen
        name="CompletedGoals"
        component={CompletedGoals}
        options={{
          tabBarIcon: () => {
            return <Octicons name="checklist" size={24} color="black" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
