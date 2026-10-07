import { memo, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { counters } from "./perf";
import type { Recipe } from "./recipes-api";
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
 
export function RecipeCard({ recipe }: { recipe: Recipe }) {
  useEffect(() => {
    counters.mounted = counters.mounted + 1;
    return () => {
      counters.mounted = counters.mounted - 1;
    };
  }, []);
 
  return (
    <View style={styles.card}>
      <View style={[styles.badge, { backgroundColor: `hsl(${(recipe.minutes * 4) % 360}, 70%, 60%)` }]} />
      <Image
        style={styles.image}
        source={`https://picsum.photos/seed/${recipe.id}/200/200`}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={300}
        recyclingKey={recipe.id}
      />
      <View>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.meta}>{recipe.minutes} min</Text>
      </View>
    </View>
  );
}
 
export const MemoRecipeCard = memo(RecipeCard);
 
const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 12 },
  badge: { width: 48, height: 48, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "600" },
  meta: { fontSize: 13, color: "#666" },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: '#0553',
  },
});