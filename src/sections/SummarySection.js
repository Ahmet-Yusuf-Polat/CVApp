// src/sections/SummarySection.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import summaryText from '../info/summary';

export default function SummarySection({ text = summaryText, style }) {
  const { colors } = useCardStyles();
  return (
    <Section title="SUMMARY" style={style}>
      <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
    </Section>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
});
