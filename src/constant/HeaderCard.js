// src/ui/HeaderCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useThemeMode } from '../theme/ThemeMode';
import { AVATAR } from '../constant/dimensions';

export default function HeaderCard({ name, title, avatar, style }) {
  const { scheme, colors } = useThemeMode();
  const cardBg = scheme === 'dark' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.45)';
  const borderColor = scheme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)';
  const subText = scheme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)';

  return (
    <View style={[styles.card, { backgroundColor: cardBg, borderColor }, style]}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.textCol}>
        <Text style={[styles.name, { color: colors.text }]} numberOfLines={1}>{name}</Text>
        <Text style={[styles.title, { color: subText }]} numberOfLines={1}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 12, borderRadius: 18, borderWidth: 1 },
  avatar: {
    width: AVATAR, height: AVATAR, borderRadius: AVATAR / 2,
    borderWidth: 2, borderColor: 'rgba(255,255,255,0.7)',
  },
  textCol: { flex: 1, marginLeft: 12, minWidth: 0 },
  name: { fontSize: 22, fontWeight: '900' ,marginTop: 4},
  title: { fontSize: 14, fontWeight: '700', marginTop: 4 },
});
