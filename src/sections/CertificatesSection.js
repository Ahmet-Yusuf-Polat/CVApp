import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';

// String veya string[] gelebilir
function normalizeItems(src) {
  if (!src) return [];
  if (Array.isArray(src)) {
    return src.map(s => String(s).trim()).filter(Boolean);
  }
  const s = String(src).trim();
  // Önce özel ayraç: "-------"
  let parts = s.split(/-------/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1) return parts;
  // Sonra satır sonu, nokta-madde, dikey çizgi
  parts = s.split(/\n|·|•|\|/).map(x => x.trim()).filter(Boolean);
  if (parts.length > 1) return parts;
  // Son çare: iki veya daha fazla boşlukla ayırmayı dene
  parts = s.split(/\s{2,}/).map(x => x.trim()).filter(Boolean);
  return parts.length ? parts : [s];
}

export default function CertificatesSection({ style, title = 'CERTIFICATES', items }) {
  const { colors, subText, borderColor, chipBg } = useCardStyles();
  const list = normalizeItems(items);

  return (
    <Section title={title} style={style}>
      <View style={styles.wrap}>
        {list.map((t, i) => (
          <View key={i} style={[styles.row, { borderColor }]}>
            <Text style={[styles.bullet, { color: subText }]}>•</Text>
            <Text style={[styles.text, { color: colors.text }]} numberOfLines={2}>
              {t}
            </Text>
          </View>
        ))}
        {list.length === 0 && (
          <Text style={{ color: subText, fontStyle: 'italic' }}>No certificates/courses found.</Text>
        )}
      </View>
    </Section>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    paddingVertical: 6,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  bullet: { fontSize: 16, lineHeight: 20 },
  text: { flex: 1, fontSize: 13, fontWeight: '700', lineHeight: 20 },
});
