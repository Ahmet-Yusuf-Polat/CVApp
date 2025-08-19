// src/sections/ContactSection.js
import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import dataDefault from '../info/personalInfo';

export default function ContactSection({ data = dataDefault, style }) {
  const { colors, subText } = useCardStyles();

  const rows = [
    { label: 'Email', value: data.email, onPress: () => Linking.openURL(`mailto:${data.email}`) },
    { label: 'Phone', value: data.phone, onPress: () => Linking.openURL(`tel:${data.phone.replace(/\s/g, '')}`) },
    {
      label: 'LinkedIn',
      value: data.linkedin,
      onPress: () => Linking.openURL(data.linkedin.startsWith('http') ? data.linkedin : `https://${data.linkedin}`),
    },
    { label: 'Location', value: data.location },
    { label: 'Language', value: data.language },
    { label: 'Driver’s Licence', value: data.driversLicense },
    { label: 'Military Status', value: data.militaryStatus },
    { label: 'Marital Status', value: data.maritalStatus },
  ];

  return (
    <Section title="CONTACT" style={style}>
      {rows.map((row, idx) => (
        <Text
          key={idx}
          style={[styles.line, { color: row.onPress ? colors.text : subText }]}
          onPress={row.onPress}
          numberOfLines={1}
        >
          <Text style={{ fontWeight: '700' }}>{row.label}: </Text>
          {row.value}
        </Text>
      ))}
    </Section>
  );
}

const styles = StyleSheet.create({
  line: { fontSize: 14, marginVertical: 6 },
});
