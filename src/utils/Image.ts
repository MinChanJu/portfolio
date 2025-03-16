const allImages = import.meta.glob("../assets/image/*/*.{png,jpg,jpeg,svg}", { eager: true, import: "default" });

// 폴더별로 이미지를 분류
const categorizedImages: { [key: string]: string[] } = {};

Object.entries(allImages).forEach(([path, image]) => {
  const folderName = path.split("/")[3]; // ../assets/image/{folder_name}/image.png
  if (!categorizedImages[folderName]) {
    categorizedImages[folderName] = [];
  }
  categorizedImages[folderName].push(image as string);
});

export const getImages = (key: string): string[] => {
  return categorizedImages[key] ?? [];
};