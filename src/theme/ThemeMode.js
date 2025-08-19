import { useEffect, useMemo, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';

const GRADIENTS = {
  light: ['#2196F3', '#FF9800'], // mavi → turuncu
  dark:  ['#8A2BE2', '#FF1744'], // mor  → kırmızı
};

export function useThemeMode() {
  // 1) RN hook: 'light' | 'dark' | null
  const schemeFromHook = useColorScheme();

  // 2) İç state (hem hook hem olay dinleyicisi ile senkron)
  const [scheme, setScheme] = useState(schemeFromHook ?? 'light');

  // Hook değiştiğinde state'i güncelle
  useEffect(() => {
    if (schemeFromHook && schemeFromHook !== scheme) {
      setScheme(schemeFromHook);
    }
  }, [schemeFromHook, scheme]);

  // Ek güvence: sistem tema değişimini dinle
  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      setScheme(colorScheme ?? 'light');
    });
    return () => sub?.remove?.();
  }, []);

  // Şu anki şemaya göre renkler
  const gradient = useMemo(
    () => (scheme === 'dark' ? GRADIENTS.dark : GRADIENTS.light),
    [scheme]
  );

  const colors = useMemo(() => (
    scheme === 'dark'
      ? { text: '#FFFFFF', background: '#000000' }
      : { text: '#0B0B0C', background: '#FFFFFF' }
  ), [scheme]);

  return { scheme, gradient, colors };
}

export { GRADIENTS };
