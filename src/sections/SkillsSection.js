import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';

// skills: string (tek satır) veya string[] gelebilir
function normalizeSkills(src) {
  if (!src) return [];
  if (Array.isArray(src)) {
    return src.map(s => String(s).trim()).filter(Boolean);
  }
  const s = String(src).trim();

  // önce klasik ayraçlar: virgül, satır sonu, madde işaretleri
  let parts = s.split(/,|\n|·|•|\|/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1) return parts;

  // sadece boşlukla yazılmışsa çok-kelimeli terimleri koruyarak böl
  const phrases = [
    'React Native', 'RESTful APIs', 'Redux Toolkit', 'React Hooks',
    'Expo & EAS', 'App Store / Play Console', 'OneSignal / FCM',
    'React Navigation', 'GitHub (CI/CD)'
  ];
  let temp = ` ${s} `;
  phrases.forEach(p => {
    const re = new RegExp(`\\s${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s`, 'g');
    temp = temp.replace(re, ` ${p.replace(/ /g, '_')} `);
  });
  parts = temp.trim().split(/\s+/).map(x => x.replace(/_/g, ' ')).filter(Boolean);
  return parts;
}

function splitInto3(items) {
  const cols = [[], [], []];
  items.forEach((it, i) => cols[i % 3].push(it));
  return cols;
}

export default function SkillsSection({ style, title = 'SKILLS', skills }) {
  const { colors, chipBg, borderColor } = useCardStyles();
  const items = normalizeSkills(skills);
  const [c1, c2, c3] = splitInto3(items);

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
    <Section title={title} style={style}>
      <View style={styles.columns}>
        <Col items={c1} />
        <Col items={c2} />
        <Col items={c3} />
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
