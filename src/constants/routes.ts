export const ROUTES = {
  HOME: '/',
  INTRO: '/intro',
  SKILL: '/skill',
  AWARD: '/award',
  CAREER: '/career',
  LINK: '/link',
  PROJECT: '/project/:projectId',
  PROJECT_ID: (projectId: number) => `/project/${projectId}`,
  
  NOT_FOUND: '*',
};