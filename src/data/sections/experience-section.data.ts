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
      - Collaborate on the development of a user-friendly and uniform point-of-sale system called Post+, intended for the Australia Post Office network.
      - Develop and implement software design specifications
      - Conduct requirements and code analysis, risk assessment, and software reliability analysis
      - Optimize application performance, balancing, usability, and automation
      - Develop and maintain unit tests for new and existing code to ensure defect-free code delivery
      - Transform mock-ups and wireframes into functional front-end code
      - Participate in design and code reviews and ensure your code meets requirements
      - Collaborate with Product Owners and Scrum Masters to deliver requirements
      - Work together on technical architecture and design
      - Create simple and reliable applications.
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
      - Create user-friendly web and cross-platform applications using the following languages: JavaScript,
      React JS, Flutter, React Native, Node JS.
      - Lead a multidisciplinary team with backend and web developers to integrate a smooth functioning
      system.
      - Manage project repositories, doing code reviews and helping peer developers.
      - Deploy of the applications on Web servers, Google Play Store and Apple App Store.
      - Tactically use Agile and SCRUM methodologies to deliver high-quality projects on a timely basis
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
