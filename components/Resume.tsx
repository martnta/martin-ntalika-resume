'use client'
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiDart,
  SiCsharp,
  SiReact,
  SiRust,
  SiNextdotjs,
  SiFlutter,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiMicrosoftsqlserver,
  SiGit,
  SiDocker,
  SiApachekafka,
  SiCisco,
  SiWireshark,
  SiLinux,
  SiLaravel,
} from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-3xl"
      >
        <h1 className="text-4xl font-bold mb-4">Martin Ntalika</h1>
        <p className="text-gray-600 mb-8">Full-Stack Software Engineer</p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p>
            Experienced freelance full-stack engineer with a strong background in designing and developing web, desktop and mobile applications
            using a variety of technologies. Proficient in front-end and back-end development, databases, and DevOps
            practices. Adept at collaborating with clients and delivering high-quality solutions. Specializes in 
            microservices design, and implementing scalable, secure IT infrastructure 
            with expertise in containerization, continuous integration, and network optimization.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Technical Skills</h2>
          <div className="flex flex-wrap items-center">
            <div className="flex items-center mr-4 mb-2">
              <SiJavascript className="text-yellow-400 mr-2" size={24} />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiDart className="text-blue-500 mr-2" size={24} />
              <span>Dart</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiCsharp className="text-purple-500 mr-2" size={24} />
              <span>C#</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiReact className="text-blue-500 mr-2" size={24} />
              <span>React.js</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiRust className="text-orange-700 mr-2" size={24} />
              <span>Rust</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiNextdotjs className="text-gray-700 mr-2" size={24} />
              <span>Next.js</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiFlutter className="text-blue-400 mr-2" size={24} />
              <span>Flutter</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiNodedotjs className="text-green-500 mr-2" size={24} />
              <span>Node.js</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiPostgresql className="text-blue-600 mr-2" size={24} />
              <span>PostgreSQL</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiMongodb className="text-green-500 mr-2" size={24} />
              <span>MongoDB</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiMysql className="text-orange-600 mr-2" size={24} />
              <span>MySQL</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiMicrosoftsqlserver className="text-red-700 mr-2" size={24} />
              <span>SQL Server</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiGit className="text-red-600 mr-2" size={24} />
              <span>Git</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiDocker className="text-blue-500 mr-2" size={24} />
              <span>Docker</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiApachekafka className="text-blue-600 mr-2" size={24} />
              <span>Kafka</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <FaNetworkWired className="text-green-600 mr-2" size={24} />
              <span>Networking</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiLaravel className="text-red-500 mr-2" size={24} />
              <span>Laravel</span>
            </div>
            <div className="flex items-center mr-4 mb-2">
              <SiLinux className="text-gray-800 mr-2" size={24} />
              <span>Linux </span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold">Freelance Full-Stack Engineer</h3>
            <p className="text-gray-600">Jan 2018 - Present</p>
            <ul className="list-disc list-inside">
              <li>Developed and maintained web applications for various clients using React.js, Node.js, and PostgreSQL.</li>
              <li>Built mobile applications using Flutter and Dart for both iOS and Android platforms.</li>
              <li>Implemented real-time features using WebSockets and Kafka for seamless data streaming.</li>
              <li>Optimized database queries and implemented caching strategies to improve application performance.</li>
              <li>Containerized applications using Docker for consistent deployment across environments.</li>
              <li>Collaborated with clients to gather requirements, design solutions, and deliver high-quality features.</li>
              <li>Currently working on a personal payment gateway project.</li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div>
            <h3 className="text-xl font-bold">Diploma in Information Technology</h3>
            <p className="text-gray-600">National College of Information Technology (2017 - 2018)</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Certifications</h2>
          <ul className="list-disc list-inside">
            <li>Linux admin -  (2020)</li>
            {/*<li>Docker Certified Associate (2020)</li>*/}
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Projects</h2>
          <ul className="list-disc list-inside">
            <li>Contributed to open-source projects, including a popular React component library.</li>
            <li>Built a personal portfolio website using Next.js and deployed it on a serverless platform.</li>
            <li>Personal payment gateway project (ongoing).</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Referees</h2>
          <ul className="list-disc list-inside">
            <li>Name: John Doe - Position: Senior Developer - Contact: john.doe@example.com</li>
            <li>Name: Jane Smith - Position: Project Manager - Contact: jane.smith@example.com</li>
            <li>Name: Emily Johnson - Position: Tech Lead - Contact: emily.johnson@example.com</li>
          </ul>
        </div>

      {/*  <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Awards and Achievements</h2>
          <ul className="list-disc list-inside">
            <li>Recipient of the `Best Hack` award at a local hackathon for developing an innovative solution (2019).</li>
          </ul>
  </div>*/}
      </motion.div>
    </div>
  );
};

export default Resume;