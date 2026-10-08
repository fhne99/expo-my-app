import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="(accueil)" options={{ title: 'Accueil', headerShown: false }} />
      <Tabs.Screen name="explore" options={{ title: 'Explorer' }} />
    </Tabs>
  );
}