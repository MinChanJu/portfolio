export const getLastPathParam = (path: string): string => {
  const segments = path.split("/").filter(Boolean);
  return segments.pop() || "";
};
