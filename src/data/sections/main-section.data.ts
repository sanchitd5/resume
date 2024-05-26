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
    { label: 'LinkedIn', value: 'sanchitd5', url: 'https://linkedin.com/in/sanchitd5' },
    { label: 'GitHub', value: 'sanchitd5', url: 'https://github.com/sanchitd5' },
    { label: 'Website', value: 'sanchitdang.com', url: 'http://www.sanchitdang.com', fullRow: true },
  ],
  description:
    `Senior Software Engineer with expertise in developing scalable application solutions using cloud-based services and robust database management. At OneView Commerce, I am responsible for the Australia Development Team, focusing on the headless application solutions for Australia Post's Post+ POS, ensuring optimal integration and performance. My role involves coordinating with other developers and QAs under the guidance of the Client Lead, driving project deliverables and enhancing client interactions.`,
  tags: [{
    name: 'Solution Architect (Associate)', icon: 'fa6-brands:aws'
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
