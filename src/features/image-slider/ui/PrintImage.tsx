interface PrintImageProps {
  title?: string;
  images: string[];
}

const PrintImage = ({ title, images }: PrintImageProps) => {
  return (
    <div className="hidden print:block">
      <div className="mb-2 text-center text-sm text-slate-500"></div>
      <div className="mb-3 flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <h2 className="text-xl font-bold text-slate-700">{`${title ? title + " " : ""}사진 (${images.length}장)`}</h2>
        <div className="h-px flex-1 bg-slate-200" />
      </div>
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
