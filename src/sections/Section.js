// src/sections/Section.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, LayoutAnimation, StyleSheet as RNStyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeMode } from '../theme/ThemeMode';
import { BUTTON_PALETTES } from '../theme/buttonPalette';

export default function Section({
  title,
  children,
  style,
  initiallyOpen = false,
  buttonVariant = 'ocean',
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const { scheme, colors } = useThemeMode();
  const palette = BUTTON_PALETTES[buttonVariant] ?? BUTTON_PALETTES.ocean;
  const grad = scheme === 'dark' ? palette.dark : palette.light;

  const onToggle = () => {
    try { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); } catch (_) {}
    setOpen(v => !v);
  };

  // İçerik için hafif yarı saydam zemin ve ayraç
  const divider = scheme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)';
  const bodyBg  = scheme === 'dark' ? 'rgba(0,0,0,0.18)'     : 'rgba(255,255,255,0.20)';

  return (
    <View style={style}>
      <View style={styles.container}>
        {/* Gradyan tüm kutunun arkaplanı; yükseklik artınca genişler */}
        <LinearGradient
          colors={grad}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[RNStyleSheet.absoluteFill, { borderRadius: 16 }]}
          pointerEvents="none"
        />

        {/* Başlık satırı (buton gibi) */}
        <Pressable
          onPress={onToggle}
          android_ripple={{ color: 'rgba(255,255,255,0.2)' }}
          style={styles.header}
        >
          <Text style={styles.title}>{typeof title === 'string' ? title : 'SECTION'}</Text>
          <Text style={styles.chev}>{open ? '⌃' : '⌄'}</Text>
        </Pressable>

        {/* İçerik: aynı kutunun İÇİNDE görünür (buton büyür) */}
        {open && (
          <View style={[styles.body, { borderTopColor: divider, backgroundColor: bodyBg }]}>
            <View style={{ paddingVertical: 12 }}>
              {/* Çocuklar kendi renklerini theme’den alıyor; metinler okunaklı */}
              <View>{children}</View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderRadius: 16, overflow: 'hidden' },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Metin kırpma yaşamayın diye çok kalın kullanmıyoruz
  title: { color: '#fff', fontSize: 16, fontWeight: '400' },
  chev:  { color: '#fff', fontSize: 16, marginLeft: 8 },
  body:  { borderTopWidth: 1, paddingHorizontal: 14 },
});
