export const ROUTES = {
  HOME: '/',
  INTRO: '/intro',
  SKILL: '/skill',
  AWARD: '/award',
  CARRER: '/carrer',
  LINK: '/link',
  PROJECT: '/project/:projectId',
  PROJECCT_ID: (projectId: number) => `/project/${projectId}`,
  
  NOT_FOUND: '*',
};