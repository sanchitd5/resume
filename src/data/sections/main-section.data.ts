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
    { label: 'From', value: 'Melbourne, Australia' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'sanchitd5@live.com', url: 'mailto:sanchitd5@live.com' },
    { label: 'LinkedIn', value: 'sanchitd5', url: 'https://linkedin.com/in/sanchitd5' },
    { label: 'GitHub', value: 'sanchitd5', url: 'https://github.com/sanchitd5' },
    { label: 'Website', value: 'sanchitdang.com', url: 'http://www.sanchitdang.com', fullRow: true },
  ],
  description:
    `Senior Software Engineer with expertise in developing scalable applications using cloud services and robust database management, I lead the Australia Development Team at OneView Commerce. My role involves overseeing release management, collaborating on architectural decisions for new features, managing development efforts and timelines, handling deployments, and troubleshooting production issues and enhancements. I coordinate with cross-functional teams to drive project deliverables and enhance client interactions and satisfaction.`,
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
