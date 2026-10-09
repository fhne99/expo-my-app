import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
 
import { CameraSection } from "@/components/labo/CameraSection";
 
const SECTIONS = [{ key: "camera", label: "Caméra", Component: CameraSection }];
 
export default function LaboScreen() {
  const [current, setCurrent] = useState(SECTIONS[0].key);
  const { Component } = SECTIONS.find((section) => section.key === current) ?? SECTIONS[0];
 
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={styles.menu}>
        {SECTIONS.map(({ key, label }) => (
          <Pressable
            key={key}
            onPress={() => setCurrent(key)}
            style={[styles.tab, key === current && styles.tabActive]}
          >
            <Text style={key === current && styles.labelActive}>{label}</Text>
          </Pressable>
        ))}
      </View>
      <Component />
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  container: { flex: 1 },
  menu: { flexDirection: "row", gap: 8, padding: 12 },
  tab: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 16, backgroundColor: "#e5e5ea" },
  tabActive: { backgroundColor: "#208AEF" },
  labelActive: { color: "white", fontWeight: "600" },
});