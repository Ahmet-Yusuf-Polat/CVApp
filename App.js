// App.js
import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import { useEffect } from 'react';
import { enableLayoutAnimations } from './src/theme/anim';

export default function App() {
  useEffect(() => {
    enableLayoutAnimations();
  }, []);

  return <HomeScreen />;
}
