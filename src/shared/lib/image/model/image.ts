const allImages = import.meta.glob("/src/shared/assets/image/*/*.{png,jpg,jpeg,svg,webp}", {
  eager: true,
  import: "default",
});

const categorizedImages: { [key: string]: string[] } = {};

Object.entries(allImages).forEach(([path, image]) => {
  const fileName = path.split("/").pop() ?? "";
  if (fileName.startsWith("favicon")) return;

  const folderName = path.split("/")[5];
  if (!categorizedImages[folderName]) {
    categorizedImages[folderName] = [];
  }
  categorizedImages[folderName].push(image as string);
});

Object.keys(categorizedImages).forEach((folderName) => {
  categorizedImages[folderName].sort((a, b) => {
    const aName = a.split("/").pop() ?? "";
    const bName = b.split("/").pop() ?? "";
    return aName.localeCompare(bName, undefined, { numeric: true, sensitivity: "base" });
  });
});

export const getImages = (key: string): string[] => {
  const images = categorizedImages[key];
  return images ? images : [];
};
