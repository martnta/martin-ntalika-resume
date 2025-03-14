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
        <Text>Full-Stack Engineer</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Summary</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in designing and developing web, desktop and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions. Specializes in 
          microservices design, and implementing scalable, secure IT infrastructure 
          with expertise in containerization, continuous integration, and network optimization.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <View style={styles.skillList}>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>Dart</Text>
          <Text style={styles.skill}>C#</Text>
          <Text style={styles.skill}>React.js</Text>
          <Text style={styles.skill}>Rust</Text>
          <Text style={styles.skill}>Next.js</Text>
          <Text style={styles.skill}>Flutter</Text>
          <Text style={styles.skill}>Node.js</Text>
          <Text style={styles.skill}>PostgreSQL</Text>
          <Text style={styles.skill}>MongoDB</Text>
          <Text style={styles.skill}>MySQL</Text>
          <Text style={styles.skill}>SQL Server</Text>
          <Text style={styles.skill}>Git</Text>
          <Text style={styles.skill}>Docker</Text>
          <Text style={styles.skill}>Kafka</Text>
          <Text style={styles.skill}>Networking</Text>
          <Text style={styles.skill}>Laravel</Text>
          <Text style={styles.skill}>Network Protocols</Text>
          <Text style={styles.skill}>Linux Networking</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Awards</Text>
        <Text>
          Experienced freelance full-stack engineer with a strong background in developing web and mobile applications
          using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
          practices. Adept at collaborating with clients and delivering high-quality solutions.
        </Text>
      </View>

   <View style={styles.section}>
     <Text style={styles.heading}>Referees</Text>
     <Text>
       <strong>Noel Phiri</strong> - Senior Developer at Malawi Liverpool Trust
       {'\n'}Contact: 0885 73 98 05

     </Text>
     <Text>
       <strong>Joel Kavinya</strong> - Project Manager at Hivemasters
       {'\n'}Contact: 0884 84 98 79

     </Text>
     <Text>
       <strong>Craig Kakatera</strong> - Lead Developer at Elizabeth Glaser Pediatric AIDS Foundation
       {'\n'}Contact: 0997 74 70 90
     
     </Text>
   </View>
    </Page>
  </Document>
);

export default ResumePDF;