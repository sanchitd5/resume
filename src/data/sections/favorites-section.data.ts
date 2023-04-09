import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: false,
  },
  books: {
    title: 'Books I read',
    data: [

    ],
  },
  people: {
    title: 'People I learn from',
    data: [

    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [

    ],
  },
  medias: {
    title: 'Media I follow',
    data: [

    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
