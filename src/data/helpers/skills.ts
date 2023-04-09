import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/


export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

// aws
export const aws = createSkillFactory({
  name: 'AWS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/',
});

// IBMCloud
export const ibmCloud = createSkillFactory({
  name: 'IBM Cloud',
  icon: 'simple-icons:ibmcloud',
  iconColor: '#FF9900',
  url: 'https://www.ibm.com/cloud',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

// mysql
export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

// mariadb
export const mariadb = createSkillFactory({
  name: 'MariaDB',
  icon: 'simple-icons:mariadb',
  iconColor: '#003545',
  url: 'https://mariadb.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

// javascript
export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

// html5
export const html5 = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
});

// css3
export const css3 = createSkillFactory({
  name: 'CSS3',
  icon: 'simple-icons:css3',
  iconColor: '#1572B6',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
});

// angularJS
export const angularJS = createSkillFactory({
  name: 'AngularJS',
  icon: 'simple-icons:angularjs',
  iconColor: '#DD0031',
  url: 'https://angularjs.org/',
});

// reduxJS
export const redux = createSkillFactory({
  name: 'ReduxJS',
  icon: 'simple-icons:redux',
  iconColor: '#764ABC',
  url: 'https://redux.js.org/',
});

// HapiJS
export const hapiJs = createSkillFactory({
  name: 'HapiJS',
  icon: 'simple-icons:express',
  iconColor: '#C0C0C0',
  url: 'https://hapi.dev/',
});


// Flutter
export const flutter = createSkillFactory({
  name: 'Flutter',
  icon: 'simple-icons:flutter',
  iconColor: '#02569B',
  url: 'https://flutter.dev/',
});

// Dart
export const dart = createSkillFactory({
  name: 'Dart',
  icon: 'simple-icons:dart',
  iconColor: '#0175C2',
  url: 'https://dart.dev/',
});

// Electron
export const electron = createSkillFactory({
  name: 'Electron',
  icon: 'simple-icons:electron',
  iconColor: '#47848F',
  url: 'https://www.electronjs.org/',
});

// NodeJS
export const nodeJs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#339933',
  url: 'https://nodejs.org/',
});

// ExpressJS
export const expressJs = createSkillFactory({
  name: 'Express.js',
  icon: 'simple-icons:express',
  iconColor: '#000000',
  url: 'https://expressjs.com/',
});

// AWS Lambda
export const awsLambda = createSkillFactory({
  name: 'AWS Lambda',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/lambda/',
});

// AWS S3
export const awsS3 = createSkillFactory({
  name: 'AWS S3',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/s3/',
});

// AWS SQS
export const awsSqs = createSkillFactory({
  name: 'AWS SQS',
  icon: 'simple-icons:amazonaws',
  iconColor: '#FF9900',
  url: 'https://aws.amazon.com/sqs/',
});

// BLE
export const ble = createSkillFactory({
  name: 'BLE',
  icon: 'simple-icons:bluetooth',
  iconColor: '#0080FF',
  url: 'https://www.bluetooth.com/',
});

// android
export const android = createSkillFactory({
  name: 'Android',
  icon: 'simple-icons:android',
  iconColor: '#3DDC84',
  url: 'https://developer.android.com/',
});

// iOS
export const ios = createSkillFactory({
  name: 'iOS',
  icon: 'simple-icons:apple',
  iconColor: '#000000',
  url: 'https://developer.apple.com/ios/',
});

// Material-UI | MUI
export const materialUi = createSkillFactory({
  name: 'Material-UI',
  icon: 'simple-icons:materialui',
  iconColor: '#0081CB',
  url: 'https://mui.com/',
});

export default {
  eslint,
  firebase,
  jest,
  mongoDb,
  pnpm,
  postgreSql,
  prettier,
  react,
  typescript,
  redux,
  flutter,
  dart,
  electron,
  nodeJs,
  expressJs,
  awsLambda,
  awsS3,
  awsSqs,
  ble,
}