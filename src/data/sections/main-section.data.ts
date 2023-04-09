import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Sanchit Dang',
  role: 'Senior Full Stack Engineer',
  details: [

    { label: 'Email', value: 'sanchitd5@live.com', url: 'mailto:sanchitd5@live.com' },
    { label: 'From', value: 'Geelong, Australia' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'sanchitd5@live.com', url: 'mailto:sanchitd5@live.com' },
    { label: 'LinkedIn', value: '/in/sanchitd5', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/sanchitd5', url: 'https://github.com' },
    { label: 'Website', value: 'sanchitdang.com', url: '/', fullRow: true },
  ],
  description:
    'Experienced Full Stack Engineer with expertise in developing user-friendly and innovative web and mobile applications using various programming languages. Proficient in application performance tuning, usability, and automation.',
  tags: [{
    name: 'AWS Certified Solution Architect Associate', icon: 'fa6-brands:aws'
  }, {
    name: 'Full Stack Engineer', icon: 'fa6-solid:code'
  },],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Sanchit-Dang-' + Date.now() + '.pdf',
  },
  links: [github({ url: 'https://github.com/sanchitd5' }), linkedin({ url: 'https://linkedin.com/in/sanchitd5' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
