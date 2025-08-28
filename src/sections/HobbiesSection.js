// src/sections/HobbiesSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { HOBBIES as data } from '../info/hobbies';

export default function HobbiesSection({ style, buttonVariant, buttonSize }) {
  const { colors } = useCardStyles();

  return (
    <Section title="HOBBIES" style={style} buttonVariant={buttonVariant} buttonSize={buttonSize}>
      <View style={styles.list}>
        {data.map((line, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={[styles.dot, { color: colors.text }]}>•</Text>
            <Text style={[styles.text, { color: colors.text }]}>{line}</Text>
          </View>
        ))}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  list: { marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  dot: { width: 16, lineHeight: 20, textAlign: 'center' },
  text: { flex: 1, fontSize: 14, lineHeight: 20 },
});
