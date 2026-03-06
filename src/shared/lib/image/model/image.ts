const allImages = import.meta.glob("/src/shared/assets/image/*/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const categorizedImages: { [key: string]: string[] } = {};

Object.entries(allImages).forEach(([path, image]) => {
  const folderName = path.split("/")[5];
  if (!categorizedImages[folderName]) {
    categorizedImages[folderName] = [];
  }
  categorizedImages[folderName].push(image as string);
});

export const getImages = (key: string): string[] => {
  const images = categorizedImages[key];
  return images ? images : [];
};
