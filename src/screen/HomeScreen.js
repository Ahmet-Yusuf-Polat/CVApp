import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, ActivityIndicator, Text } from 'react-native';
import Background from '../theme/Background';
import HeaderCard from '../constant/HeaderCard';
import { PROFILE } from '../constant/profile';
import ContactSection from '../sections/ContactSection';
import SummarySection from '../sections/SummarySection';
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';
import EducationSection from '../sections/EducationSection';
import ProjectsSection from '../sections/ProjectsSection';
import CertificatesSection from '../sections/CertificatesSection';
import HobbiesSection from '../sections/HobbiesSection';
import { SAFE_TOP } from '../constant/dimensions';

import useResumeFS from '../hooks/useContactAndLabelsFS';

export default function HomeScreen() {
  const { data, loading, error } = useResumeFS('ahmet-yusuf-polat');

  if (loading) {
    return (
      <Background>
        <SafeAreaView style={[styles.safe, { paddingTop: SAFE_TOP, alignItems:'center', justifyContent:'center' }]}>
          <ActivityIndicator />
        </SafeAreaView>
      </Background>
    );
  }
  if (error || !data) {
    return (
      <Background>
        <SafeAreaView style={[styles.safe, { paddingTop: SAFE_TOP, paddingHorizontal:16 }]}>
          <Text style={{ color: '#fff' }}>{String(error || 'Document not found')}</Text>
        </SafeAreaView>
      </Background>
    );
  }

  const labels = data.labels || {};     // { summary, contact, ... }
  const contact = data.contact || null; // { email, phone, ... }
  const skills  = data.info?.skills; 

   const info = data.info || {};
  const certItems =
    info['certificates & courses'] ??
    info.certificates_and_courses ??
    info.certificates ??
    info.courses ??
    null;


  return (
    <Background>
      <SafeAreaView style={[styles.safe, { paddingTop: SAFE_TOP }]}>
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <HeaderCard name={PROFILE.name} title={PROFILE.title} avatar={PROFILE.avatar} />

          {/* Buton/başlıklar Firestore'dan, contact verisi prop ile */}
          <ContactSection      style={{ marginTop: 14 }} title={labels.contact || 'CONTACT'}       contact={contact} />
        <SummarySection
  style={{ marginTop: 14 }}
  title={(data.labels && data.labels.summary) || 'SUMMARY'}
  summary={data.info?.summary}
/>
          <ExperienceSection   style={{ marginTop: 14 }} title={labels.experience || 'EXPERIENCE'} />
              <SkillsSection
      style={{ marginTop: 14 }}
      title={labels.skills || 'SKILLS'}
      skills={skills}                   // ⬅️ direkt geçiriyoruz
    />
          <ProjectsSection     style={{ marginTop: 14 }} title={labels.projects || 'PROJECTS'} />
          <EducationSection    style={{ marginTop: 14 }} title={labels.education || 'EDUCATION'} />

       <CertificatesSection
            style={{ marginTop: 14 }}
            title={labels.certificates || 'CERTIFICATES'}
            items={certItems}
          />
    <HobbiesSection      style={{ marginTop: 14 }} title={labels.hobbies || 'HOBBIES'} />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { paddingHorizontal: 16, paddingBottom: 16 },
});
