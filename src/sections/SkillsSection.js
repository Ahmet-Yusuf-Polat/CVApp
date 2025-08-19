// src/sections/SkillsSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { SKILLS as data } from '../info/skills';

export default function SkillsSection({ style }) {
  const { colors, chipBg, borderColor } = useCardStyles();

  const Col = ({ items }) => (
    <View style={styles.col}>
      {items.map((t, i) => (
        <View key={i} style={[styles.chip, { backgroundColor: chipBg, borderColor }]}>
          <Text style={[styles.chipText, { color: colors.text }]} numberOfLines={2}>{t}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <Section title="SKILLS" style={style}>
      <View style={styles.columns}>
        <Col items={data.col1} />
        <Col items={data.col2} />
        <Col items={data.col3} />
      </View>
    </Section>
  );
}

const GAP = 8;
const styles = StyleSheet.create({
  columns: { flexDirection: 'row', gap: GAP },
  col: { flex: 1 },
  chip: { paddingVertical: 8, paddingHorizontal: 10, borderRadius: 10, borderWidth: 1, marginBottom: GAP },
  chipText: { fontSize: 12, fontWeight: '700' },
});
