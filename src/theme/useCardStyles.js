// src/theme/useCardStyles.js
import { useMemo } from 'react';
import { useThemeMode } from './ThemeMode';

export const useCardStyles = () => {
  const { scheme, colors } = useThemeMode();

  const values = useMemo(() => {
    const cardBg = scheme === 'dark' ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.45)';
    const borderColor = scheme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)';
    const subText = scheme === 'dark' ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.75)';
    const chipBg = scheme === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.05)';
    return { scheme, colors, cardBg, borderColor, subText, chipBg };
  }, [scheme, colors]);

  return values;
};
