import React from 'react';
  import { Pressable, Text, StyleSheet, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useThemeMode } from '../theme/ThemeMode';
import { BUTTON_PALETTES } from '../theme/buttonPalette';

const SIZE_MAP = {
  sm: { minHeight: 44, padV: 10, fontSize: 12 },
  md: { minHeight: 52, padV: 12, fontSize: 13 },
  lg: { minHeight: 60, padV: 16, fontSize: 15 },
  xl: { minHeight: 68, padV: 18, fontSize: 16 }, // yüksek buton
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
        {
          minHeight: S.minHeight,
          paddingVertical: S.padV,
          paddingHorizontal: 16,
          borderRadius: 16,
        },
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

      {/* Metin: lineHeight + küçük android payı */}
      <Text
        style={[
          styles.label,
          {
            fontSize: S.fontSize,
            lineHeight: Math.round(S.fontSize * 1.25),
            paddingTop: Platform.OS === 'android' ? 2 : 0,
            paddingBottom: Platform.OS === 'android' ? 2 : 0,
          },
        ]}
        // erişilebilirlik metin boyutunu kapatmak istersen (genelde önermem):
        // allowFontScaling={false}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  touch: {
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
      justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  label: {
    color: '#FFFFFF',
    fontWeight: '500',
    textAlign: 'center',
  },
});
