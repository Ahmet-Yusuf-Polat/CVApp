// src/sections/ProjectsSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';
import { PROJECTS as data } from '../info/projects';

export default function ProjectsSection({ style }) {
  const { colors, subText } = useCardStyles();

  return (
    <Section title="PROJECTS" style={style}>
      {data.map((p, idx) => (
        <View key={idx} style={styles.item}>
          {/* Proje adı (koyu) */}
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
            {p.name}
          </Text>

          {/* Şirket */}
          <Text style={[styles.company, { color: subText }]} numberOfLines={1}>
            {p.company}
          </Text>

          {/* Açıklama (varsa) */}
          {p.description ? (
            <Text style={[styles.desc, { color: colors.text }]}>{p.description}</Text>
          ) : null}

          {/* Bullets (varsa) */}
          {!!p.bullets?.length && (
            <View style={styles.list}>
              {p.bullets.map((line, i) => (
                <View key={i} style={styles.bulletRow}>
                  <Text style={[styles.bullet, { color: colors.text }]}>•</Text>
                  <Text style={[styles.bulletText, { color: colors.text }]}>{line}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </Section>
  );
}

const styles = StyleSheet.create({
  item: { marginBottom: 10 },
  title: { fontSize: 16, fontWeight: '800' },
  company: { marginTop: 4, fontSize: 13, fontWeight: '700' },
  desc: { marginTop: 8, fontSize: 14, lineHeight: 20, fontWeight: '500' },

  list: { marginTop: 10 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 },
  bullet: { width: 16, lineHeight: 20, textAlign: 'center' },
  bulletText: { flex: 1, fontSize: 14, lineHeight: 20 },
});
