import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      institution: 'Amazon Web Services',
      image: import('@/assets/logos/aws-logo.png'),
      dates: [new Date('2022.12.23'), null],
      description: 'AWS Certified Solutions Architect - Associate',
      links: [website({ url: 'https://www.credly.com/badges/d7bbb69c-7672-4f2a-bbb6-a2fd553bfaa9/public_url' })],
    },
    {
      title: 'Masters of Information Technology (Professional)',
      institution: 'Deakin University, Australia',
      image: import('@/assets/logos/deakin-logo.png'),
      dates: [new Date('2017.06'), new Date('2019.06')],
      description: 'Master degree. Specialization in Networking and Cyber Security.',
      links: [website({ url: 'https://www.deakin.edu.au' })],
    },
    {
      title: 'Bachelor of Computer Applications',
      institution: 'Chitkara University, India',
      image: import('@/assets/logos/chitkara-logo.png'),
      dates: [new Date('2014.04'), new Date('2017.05')],
      description: "Bachelor's degree. Specialization in Application Development.",
      links: [website({ url: 'https://www.chitkara.edu.in' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
