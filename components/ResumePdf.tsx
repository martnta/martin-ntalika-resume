'use client'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  skillList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  skill: {
    backgroundColor: '#3B82F6',
    color: '#FFFFFF',
    padding: '4px 8px',
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
});

const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.heading}>Martin Ntalika</Text>
        <Text>Freelance Full-Stack Engineer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <View style={styles.skillList}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>Dart</Text>
          <Text style={styles.skill}>C#</Text>
          {/* Add more skills */}
        </View>
      </View>

      {/* Add more sections like Experience, Education, Certifications, Projects, and Awards */}
    </Page>
  </Document>
);

export default ResumePDF;