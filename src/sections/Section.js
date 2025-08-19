import React, { useState } from 'react';
import { View, StyleSheet, LayoutAnimation } from 'react-native';
import GradientButton from '../components/GradientButton';
import { useCardStyles } from '../theme/useCardStyles';

export default function Section({
  title,
  children,
  style,
  initiallyOpen = false,
  buttonVariant,
  buttonSize = 'xl',
}) {
  const [open, setOpen] = useState(initiallyOpen);
  const { cardBg, borderColor } = useCardStyles();

  const toggle = () => {
    // Animasyon dene; başarısız olursa yine de state değişsin (içerik açılır)
    try {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } catch (_) {}
    setOpen(v => !v);
  };

  return (
    <View style={style}>
      <GradientButton title={title} onPress={toggle} variant={buttonVariant} size={buttonSize} />
      {open && <View style={[styles.card, { backgroundColor: cardBg, borderColor }]}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
