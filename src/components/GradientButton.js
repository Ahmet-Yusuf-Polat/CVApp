import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeMode } from '../theme/ThemeMode';
import { BUTTON_PALETTES } from '../theme/buttonPalette';

const SIZE_MAP = {
  sm: { minHeight: 40, padV: 10, fontSize: 12 },
  md: { minHeight: 48, padV: 12, fontSize: 13 },
  lg: { minHeight: 56, padV: 16, fontSize: 14 },
  xl: { minHeight: 64, padV: 18, fontSize: 16 },
};

export default function GradientButton({
  title,
  onPress,
  style,
  variant = 'ocean',
  size = 'xl',
}) {
  const { scheme } = useThemeMode();
  const palette = BUTTON_PALETTES[variant] ?? BUTTON_PALETTES.ocean;
  const colors = scheme === 'dark' ? palette.dark : palette.light;
  const S = SIZE_MAP[size] ?? SIZE_MAP.xl;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.touch,
        { minHeight: S.minHeight, borderRadius: 16 },
        pressed && { opacity: 0.95 },
        style,
      ]}
      android_ripple={{ color: 'rgba(255,255,255,0.15)' }}
    >
      {/* Gradyan arkaplan */}
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[StyleSheet.absoluteFill, { borderRadius: 16 }]}
      />
      <Text style={[styles.label, { fontSize: S.fontSize, paddingVertical: S.padV }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    overflow: 'hidden',        // ripple + köşe
    alignItems: 'center',
    justifyContent: 'center',
    // hafif yükselti
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '800',
    letterSpacing: 0.5,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
});
