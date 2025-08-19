import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Background from '../theme/Background';
import HeaderCard from '../ui/HeaderCard';
import { PROFILE } from '../constant/profile';
import ContactSection from '../sections/ContactSection';
import SummarySection from '../sections/SummarySection';
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';
import { SAFE_TOP } from '../constant/dimensions';
import EducationSection from '../sections/EducationSection';
import ProjectsSection from '../sections/ProjectsSection';
import CertificatesSection from '../sections/CertificatesSection';

export default function HomeScreen() {
  return (
    <Background>
      <SafeAreaView style={[styles.safe, { paddingTop: SAFE_TOP }]}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <HeaderCard name={PROFILE.name} title={PROFILE.title} avatar={PROFILE.avatar} />

          <ContactSection style={{ marginTop: 14 }} />
          <SummarySection style={{ marginTop: 14 }} />
          <ExperienceSection style={{ marginTop: 14 }} />
          <SkillsSection style={{ marginTop: 14 }} />
          <ProjectsSection style={{ marginTop: 14 }} />
          <EducationSection style={{ marginTop: 14 }} />
          <CertificatesSection style={{ marginTop: 14 }} />

        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { paddingHorizontal: 16, paddingBottom: 16 },
});
