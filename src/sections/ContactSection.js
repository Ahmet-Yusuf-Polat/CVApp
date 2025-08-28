// src/sections/ContactSection.js
import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import Section from './Section';
import { useCardStyles } from '../theme/useCardStyles';

const toStr = v => (typeof v === 'string' ? v : v == null ? '' : String(v));
const safeOpen = (url) => Linking.openURL(url).catch(() => {});

export default function ContactSection({ style, title = 'CONTACT', contact }) {
  const { colors, subText } = useCardStyles();

  const email     = toStr(contact?.email);
  const phone     = toStr(contact?.phone);
  const linkedin0 = toStr(contact?.linkedin);
  const github0   = toStr(contact?.github);
  const linkedin  = linkedin0 && (linkedin0.startsWith('http') ? linkedin0 : `https://${linkedin0}`);
  const github    = github0   && (github0.startsWith('http')   ? github0   : `https://${github0}`);
  const language  = toStr(contact?.language);
  const location  = toStr(contact?.location);
  const drivers   = toStr(contact?.drivers_license);
  const military  = toStr(contact?.military);
  const marital   = toStr(contact?.marital);

  const rows = [
    email    && { label: 'Email',    value: email,    onPress: () => safeOpen(`mailto:${email}`) },
    phone    && { label: 'Phone',    value: phone,    onPress: () => safeOpen(`tel:${phone.replace(/\s/g,'')}`) },
    linkedin && { label: 'LinkedIn', value: linkedin, onPress: () => safeOpen(linkedin) },
    github   && { label: 'GitHub',   value: github,   onPress: () => safeOpen(github) },
    location && { label: 'Location', value: location },
    language && { label: 'Language', value: language },
    drivers  && { label: "Driver’s Licence", value: drivers },
    military && { label: 'Military Status', value: military },
    marital  && { label: 'Marital Status', value: marital },
  ].filter(Boolean);

  return (
    <Section title={title} style={style}>
      {rows.length === 0 ? (
        <Text style={[styles.line, { color: subText }]}>No contact info found.</Text>
      ) : (
        rows.map((row, idx) => (
          <Text
            key={idx}
            style={[styles.line, { color: row.onPress ? colors.text : subText }]}
            onPress={row.onPress}
            numberOfLines={1}
          >
            <Text style={{ fontWeight: '700' }}>{row.label}: </Text>
            {row.value}
          </Text>
        ))
      )}
    </Section>
  );
}

const styles = StyleSheet.create({
  line: { fontSize: 12, marginVertical: 6 },
});
