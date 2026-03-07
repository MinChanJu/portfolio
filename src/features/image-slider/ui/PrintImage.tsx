import { SectionTitle } from "@shared/ui";

interface PrintImageProps {
  title?: string;
  images: string[];
}

const PrintImage = ({ title, images }: PrintImageProps) => {
  return (
    <div className="hidden print:block">
      <SectionTitle title={`${title ? title + " " : ""}사진 (${images.length}장)`} titlePosition="center" />
      <div className="h-4" />
      <div className="flex flex-wrap gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            className="mx-auto max-h-50 max-w-[calc(50%-1rem)] rounded-lg object-contain"
            src={src}
            alt={`${title ? title + " " : ""}사진 ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PrintImage;
