import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  aws,
  cloudant,
  css3,
  dart,
  electron,
  firebase,
  firestore,
  flutter,
  hapiJs,
  html5,
  ibmCloud,
  javascript,
  jest,
  mariadb,
  mongoDb,
  nodeJs,
  pnpm,
  postgreSql,
  react,
  redux,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Frameworks',
      skills: [
        react({
          level: 5,
          description: "React is a JavaScript library for building user interfaces. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.",
        }),
        redux({
          level: 5,
          description: 'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React for building user interfaces.',
        }),
        flutter({
          level: 4,
          description: 'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for multiple platforms from a single codebase.',
        }),
        hapiJs({
          level: 4,
          description: 'Hapi.js is a rich framework for building applications and services in Node.js, providing a powerful plugin system and a large set of plugins.',
        }),
        nodeJs({
          level: 5,
          description: 'Node.js is a back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        }),
        jest({
          level: 4,
          description: 'Jest is a delightful JavaScript testing framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue, and more.',
        }),
        electron({
          level: 3,
          description: 'Electron is a framework for developing native applications with web technologies like JavaScript, HTML, and CSS.',
        }),
      ],
    },
    {
      title: 'Coding languages',
      skills: [
        typescript({
          level: 5,
          description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and maintainability.',
        }),
        javascript({
          level: 5,
          description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.',
        }),
        dart({
          level: 4,
          description: 'Dart is developed by Google and is used to build mobile, desktop, server, and web applications.',
        }),
        html5({
          level: 4,
          description: 'HTML5 is the latest major version of HTML, focusing on multimedia, graphical features, and performance improvements.',
        }),
        css3({
          level: 3,
          description: 'CSS3 introduces new capabilities like transitions, animations, and responsive design techniques for enhancing visual aesthetics.',
        }),
      ],
    },
    {
      title: 'Cloud Platforms',
      skills: [
        aws({
          level: 5,
          description: 'AWS provides a broad set of products and services including computing, storage, networking, database, analytics, application services, deployment, management, and more.',
        }),
        firebase({
          level: 4,
          description: 'Firebase is a platform by Google for developing mobile and web applications, which provides functionalities like analytics, databases, messaging, and crash reporting.',
        }),
        ibmCloud({
          level: 3,
          description: 'IBM Cloud offers a wide range of services including IaaS, PaaS, and SaaS which are cloud-based, aimed at providing various solutions for enterprises.',
        }),
      ],
    },
    {
      title: 'Databases',
      skills: [
        postgreSql({
          level: 4,
          description: 'PostgreSQL is a powerful, open-source object-relational database system with an emphasis on extensibility and standards compliance.',
        }),
        mongoDb({
          level: 3,
          description: 'MongoDB is a NoSQL database that uses JSON-like documents with schemas, providing high performance and easy scalability.',
        }),
        mariadb({
          level: 3,
          description: 'MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system.',
        }),
        firestore({
          level: 4,
          description: 'Cloud Firestore is a flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud.',

        }),
        cloudant({
          level: 4,
          description: 'Cloudant is a NoSQL JSON document store that is optimized for handling heavy workloads of concurrent reads and writes.',
        }),
      ],
    },
    {
      title: 'Package Managers',
      skills: [
        {
          icon: 'fa6-brands:npm',
          name: 'npm',
          level: 5,
          description: 'npm is the world’s largest software registry that includes public and private packages, making it easy for developers to publish and share source code.',
          iconColor: '#CB3837'
        },
        pnpm({
          level: 4,
          description: 'pnpm is a fast, disk space efficient package manager for JavaScript that helps manage project dependencies.',
        }),
      ],
    },
    {
      title: 'Languages',
      skills: [
        { icon: 'circle-flags:au', name: 'English' },
        { icon: 'circle-flags:in', name: 'Hindi' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
