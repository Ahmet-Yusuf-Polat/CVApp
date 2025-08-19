// src/sections/EducationSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { EDUCATION as data } from '../info/education';

// "Bachelor … — School (10/2023 – Now)" biçimini parçalar
function parseEduLine(line) {
  // em dash (—) veya normal '-' destekle, sonundaki parantez içi tarihi al
  const m = line.match(/^(.*?)\s[—-]\s(.*?)\s\((.+)\)$/);
  if (m) {
    return { degree: m[1].trim(), school: m[2].trim(), date: m[3].trim() };
  }
  // Fallback: sondaki parantezi bul
  const open = line.lastIndexOf('(');
  const close = line.lastIndexOf(')');
  const date = open !== -1 && close !== -1 ? line.slice(open + 1, close).trim() : '';
  const left = open !== -1 ? line.slice(0, open).trim() : line;
  // "degree — school" veya "degree - school"
  const parts = left.split(/ [—-] /);
  const degree = parts[0]?.trim() || left;
  const school = parts[1]?.trim() || '';
  return { degree, school, date };
}

export default function EducationSection({ style }) {
  const { colors, subText } = useCardStyles();

  const items = (data.bullets || []).map(parseEduLine);

  return (
    <Section title="EDUCATION" style={style}>
      {items.map((it, idx) => (
        <View key={idx} style={styles.item}>
          {/* Üst satır: Üniversite (bold) —— Tarih (sağda) */}
          <View style={styles.row}>
            <Text style={[styles.school, { color: colors.text }]} numberOfLines={1}>
              {it.school}
            </Text>
            <Text style={[styles.date, { color: subText }]} numberOfLines={1}>
              {it.date}
            </Text>
          </View>

          {/* Alt satır: Derece */}
          <Text style={[styles.degree, { color: colors.text }]}>
            {it.degree}
          </Text>
        </View>
      ))}
    </Section>
  );
}

const styles = StyleSheet.create({
  item: { marginBottom: 10 },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 8,
  },
  school: {
    fontSize: 15,
    fontWeight: '800', // üniversite adı bold
    flexShrink: 1,
    paddingRight: 8,
  },
  date: { fontSize: 12, flexShrink: 0 },
  degree: { marginTop: 6, fontSize: 13, fontWeight: '400' },
});
