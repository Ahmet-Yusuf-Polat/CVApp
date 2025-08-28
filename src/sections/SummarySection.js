// src/sections/SummarySection.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';

export default function SummarySection({ style, title = 'SUMMARY', summary }) {
  const { colors } = useCardStyles();
  const text = typeof summary === 'string' ? summary : '';

  return (
    <Section title={title} style={style}>
      <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
    </Section>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 14, lineHeight: 22, fontWeight: '500' },
});
