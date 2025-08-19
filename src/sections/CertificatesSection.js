// src/sections/CertificatesSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { CERTIFICATES as data } from '../info/certificates';

export default function CertificatesSection({ style }) {
  const { colors, subText } = useCardStyles();

  return (
    <Section title="CERTIFICATES" style={style}>
      {data.map((c, idx) => (
        <View key={idx} style={styles.item}>
          {/* ÜST SATIR: Başlık (bold) —— Tarih (sağda) */}
          <View style={styles.row}>
            <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
              {c.title}
            </Text>
            <Text style={[styles.date, { color: subText }]} numberOfLines={1}>
              {c.date}
            </Text>
          </View>

          {/* ALT SATIRLAR: Provider ve Qualification ID */}
          <Text style={[styles.sub, { color: subText }]} numberOfLines={1}>
            {c.provider}
          </Text>
          <Text style={[styles.sub, { color: subText }]} numberOfLines={1}>
            Qualification ID: {c.qualificationId}
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
  title: { fontSize: 15, fontWeight: '800', flexShrink: 1, paddingRight: 8 },
  date: { fontSize: 12, flexShrink: 0 },
  sub: { marginTop: 6, fontSize: 13, fontWeight: '700' },
});
