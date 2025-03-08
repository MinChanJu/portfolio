export const ROUTES = {
  HOME: '/',
  INTRO: '/intro',
  SKILL: '/skill',
  PROJECCT_ID: (projectId: number) => `/project/${projectId}`,
  AWARD: '/award',
  CARRER: '/carrer',
  LINK: '/link',

  NOT_FOUND: '*',
  
  PROJECT: '/project/:projectId',
};