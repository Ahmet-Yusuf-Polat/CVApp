// src/sections/ExperienceSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { EXPERIENCE as data } from '../info/experience';

export default function ExperienceSection({ style }) {
  const { colors, subText } = useCardStyles();

  return (
    <Section title="PROFESSIONAL EXPERIENCE" style={style}>
      {/* ÜST SATIR: Rol —— Tarih */}
      <View style={styles.row}>
        <Text style={[styles.role, { color: colors.text }]} numberOfLines={1}>
          {data.role}
        </Text>
        <Text style={[styles.date, { color: subText }]} numberOfLines={1}>
          {data.date}
        </Text>
      </View>

      {/* ALT SATIR: Şirket */}
      <Text style={[styles.company, { color: subText }]} numberOfLines={1}>
        {data.company}
      </Text>

      {/* Maddeler */}
      <View style={styles.list}>
        {data.bullets.map((line, idx) => (
          <View key={idx} style={styles.bulletRow}>
            <Text style={[styles.bullet, { color: colors.text }]}>•</Text>
            <Text style={[styles.bulletText, { color: colors.text }]}>{line}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' },
  role: { fontSize: 15, fontWeight: '800', flexShrink: 1, paddingRight: 8 },
  date: { fontSize: 12 },
  company: { marginTop: 6, fontSize: 13, fontWeight: '700' },
  list: { marginTop: 10 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  bullet: { width: 16, lineHeight: 20, textAlign: 'center' },
  bulletText: { flex: 1, fontSize: 14, lineHeight: 20 },
});
