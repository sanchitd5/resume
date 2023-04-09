import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  aws,
  css3,
  dart,
  electron,
  firebase,
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
      title: 'Coding languages',
      skills: [
        javascript({
          level: 5,
          description:
            'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
        }),
        typescript({
          level: 4,
          description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.',
        }),
        nodeJs({
          level: 5,
          description:
            'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        }),
        dart({
          level: 4,
          description:
            'Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax. Dart can compile to either native code or JavaScript.',
        }),
        html5({
          level: 5,
          description:
            'HTML5 is the fifth and current major version of the HTML standard, and subsumes XHTML. It was first released in October 2014. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.',
        }),
        css3({
          level: 3,
          description:
            'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1. It brings a lot of long-awaited novelties, like rounded corners, shadows, gradients, transitions or animations, as well as new layouts like multi-columns, flexible box or grid layouts.',
        })
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        react({
          level: 5,
          description: "React is a JavaScript library for building user interfaces. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. React was first created by Jordan Walke, a software engineer working for Facebook.",
        }),
        flutter({ level: 4, description: 'Flutter is an open-source UI software development kit created by Google. It is used to develop applications for Android, iOS, Linux, Mac, Windows, Google Fuchsia, and the web from a single codebase.' }),
        redux({
          level: 4,
          description:
            'Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebooks Flux architecture, it was created by Dan Abramov and Andrew Clark.',
        }),
        jest({
          level: 4,
          description:
            'Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!',
        }),
        hapiJs({
          level: 4,
          description:
            'Hapi is a rich framework for building applications and services. It enables developers to focus on writing reusable application logic instead of spending time building infrastructure.',
          icon: 'simple-icons:javascript',
          iconColor: '#F7DF1E',
        }),
        {
          icon: 'simple-icons:swagger',
          name: 'Swagger UI',
          level: 3,
          description:
            'Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document, and consume REST APIs.',
          iconColor: '#85EA2D',
        },
        electron({
          level: 3,
          description:
            'Electron is an open-source software framework developed and maintained by GitHub. It allows for the development of desktop GUI applications using web technologies: it combines the Chromium rendering engine and the Node.js runtime.',
        }),
        {
          icon: 'simple-icons:mongodb',
          name: 'MongooseJS',
          level: 3,
          description:
            'Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.',
          iconColor: '#47A248',
        }

      ],
    },
    {
      title: 'Databases',
      skills: [
        mongoDb({ level: 4, description: 'MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.' }),
        {
          icon: 'simple-icons:firebase',
          name: 'Firestore',
          level: 3,
          description:
            'Cloud Firestore is a NoSQL document database built for automatic scaling, high performance, and ease of application development. Unlike traditional databases, Cloud Firestore is schemaless, so you can evolve your data model over time without downtime.',
          iconColor: '#FFCA28'
        },
        // ibm cloudant
        {
          icon: 'simple-icons:ibmcloud',
          name: 'IBM Cloudant',
          level: 3,
          description:
            'Cloudant is a cloud-based database service that is based on Apache CouchDB. It is a NoSQL database that uses JSON to store data, JavaScript as its query language using MapReduce, and regular HTTP for its API.',
          iconColor: '#FFCA28'
        },
        postgreSql({
          level: 3,
          description:
            'PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.',
        }),
        mariadb({
          level: 3,
          description:
            'MariaDB is an open-source relational database management system. It is a community-developed fork of the MySQL relational database management system intended to remain free under the GNU General Public License.',
        }),

      ],
    },
    {
      title: 'Cloud Platforms',
      skills: [
        aws({ level: 4, description: 'Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.' }),
        firebase({ level: 3, description: 'Firebase is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.' }),
        ibmCloud({ level: 3, description: 'IBM Cloud is a suite of cloud computing services offered by the American multinational technology company IBM. It is a public cloud platform, offering infrastructure as a service, platform as a service, and software as a service.' }),
      ]
    },
    {
      title: 'Package Managers',
      skills: [
        pnpm({ level: 4, description: 'pnpm is a fast, disk space efficient package manager. It is written in TypeScript and is available for Node.js and browsers.' }),
        {
          icon: 'fa6-brands:npm',
          name: 'npm',
          level: 5,
          description:
            'npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.',
          iconColor: '#CB3837'
        }
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
