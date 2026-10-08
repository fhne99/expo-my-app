import { Stack } from 'expo-router';

export default function AccueilLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="lieu/[id]" options={{ title: 'Lieu' }} />
    </Stack>
  );
}