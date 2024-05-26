import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  eslint,
  firebase,
  pnpm,
  react,
  typescript,
  aws,
  ibmCloud,
  jest,
  mongoDb,
  postgreSql,
  prettier,
  redux,
  flutter,
  dart,
  electron,
  nodeJs,
  expressJs,

} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior Full Stack Engineer',
      company: 'OneView Commerce | Australia Post',
      image: import('@/assets/logos/australia-post-logo.jpeg'),
      dates: [new Date('2021-11'), null],
      description: `
      - Improve OVC's proprietary calculation logic, achieving an 800% improvement in basket calculation times, significantly enhancing performance and efficiency.
      - Lead the Australia Development Team at OneView Commerce, focusing on headless application solutions for Australia Post's Post+ POS, ensuring optimal integration and performance.
      - Engineer OneView Commerce’s POS Software Development Kit and UI, utilized by clients such as Molten Brown, ForeverNew, and Kroger to deliver tailored retail solutions.
      - Develop business logic for Australia Post's Post+ POS software, leveraging ReduxJS, AWS Serverless, and Google Cloud Functions to enhance functionality and integration.
      - Implement an event-based logging solution using AWS SQS and SNS, streamlining data handling and improving system responsiveness.
      - Translate mock-ups and wireframes into functional front-end code with ReactJS, ReduxJS, and AngularJS, ensuring high fidelity to design specifications.
      - Contribute to technical architecture and designs in collaboration with the Solution Architect, shaping strategic direction and technological frameworks.
      - Coordinate with cross-functional teams in the US to ensure seamless delivery and client satisfaction, maintaining high standards in client interactions and project deliverables.
      - Maintain product repositories, conduct code reviews, and provide mentorship to peer developers, fostering a collaborative and quality-focused development environment.
      - Conduct comprehensive requirements and code analysis, identifying key metrics, assessing system risks, and ensuring software reliability.
      - Employ Agile and SCRUM methodologies effectively to consistently deliver high-quality projects on schedule, enhancing team productivity and project outcomes.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), redux(), nodeJs(), electron(), typescript(), aws(), firebase(), jest(), pnpm(), prettier(), eslint(), ibmCloud(), mongoDb(), postgreSql()],
      },
      links: [
        {
          url: 'https://www.oneviewcommerce.com/',
          icon: 'fa6-solid:globe',
          name: 'Onview Commerce'
        },
        {
          url: 'https://www.transparency.gov.au/annual-reports/australian-postal-corporation/reporting-year/2019-20-43',
          icon: 'fa6-solid:globe',
          name: 'POST+ Program'
        }
      ],
    },
    {
      role: 'Full Stack Engineer',
      company: 'Deakin University',
      image: import('@/assets/logos/deakin-logo.png'),
      dates: [new Date('2019-05'), new Date('2021-11')],
      description: `
      - Led a multidisciplinary team to develop and integrate user-friendly web and cross-platform applications, enhancing collaborative efforts and project efficiency.
      - Employed Agile and SCRUM methodologies to ensure the timely delivery of high-quality projects, significantly improving team productivity and project outcomes.
      - Managed deployment of applications on Web servers, Google Play Store, and Apple App Store, significantly increasing user accessibility and engagement.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), flutter(), dart(), nodeJs(), expressJs(), typescript(), aws(), firebase(), jest(), pnpm(), prettier(), eslint(), ibmCloud()],
      },
      links: [],
    },

    {
      role: 'Mobile Application Developer',
      company: 'Faktum Bauprodukte GmbH (Contract Role)',
      image: import('@/assets/logos/faktum-logo.webp'),
      dates: [new Date('2020-06'), new Date('2020-09')],
      description: `
      - Created cross-platform ordering application for the tiling trade deployed on Google Play Store and
      Apple App Store.
      - Maintained overall user experience and design of the project.
      - Development of the Dashboard using ReactJS deployed on Amazon AWS EC2.
      - Development of the backend using the HAPI framework on Node JS deployed on Amazon AWS EC2.
      - Development of the mobile application using Flutter and Dart.

      <br>

      The application is an innovative ordering tool for the tiling trade. As a Faktum customer, the user can
      easily order the products the user requires from a comprehensive product catalog tailored to user's
      specific needs. Users can compile project-related shopping baskets directly from the construction site
      and at the same time choose delivery options and many other services. A copy of your order will also be
      sent by e-mail to the address that user-specified for optimum organization.
      
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), flutter(), dart(), nodeJs(), aws(), mongoDb(), expressJs(), jest()],
      },
      links: [],
    },
    {
      role: 'Intern | Jn. Software Engineer',
      company: 'Deakin University',
      image: import('@/assets/logos/deakin-logo.png'),
      dates: [new Date('2018-10'), new Date('2019-05')],
      description: `
      • Maintaining the overall User Experience and Interface around all the applications being developed
      • Worked on the frontend for the applications in the company
      • Creating and maintaining Wireframes and Prototypes for providing better requirement clarity to fellow
      developers
      • Run Design Thinking sessions to achieve solutions.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nodeJs(), eslint(), mongoDb(), expressJs()],
      },
      links: [],
    }
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
