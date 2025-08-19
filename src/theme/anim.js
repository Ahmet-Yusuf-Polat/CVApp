// src/theme/anim.js
import { Platform, UIManager, LayoutAnimation } from 'react-native';

export const enableLayoutAnimations = () => {
  if (Platform.OS !== 'android') return;

  // Fabric (New Architecture) algılama:
  const isFabric = !!global?.nativeFabricUIManager;

  // Sadece eski mimaride etkinleştir; Fabric’te çağırma (yoksa uyarı verir)
  if (!isFabric && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
};

export const animateNext = (preset = LayoutAnimation.Presets.easeInEaseOut) => {
  LayoutAnimation.configureNext(preset);
};
