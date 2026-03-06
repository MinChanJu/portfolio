import { useEffect, useState } from "react";

type InlineSvgProps = {
  src: string;
  alt?: string;
  className?: string;
};

const InlineSvg = ({ src, alt, className = "" }: InlineSvgProps) => {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        if (text.includes("<svg")) {
          setSvgContent(text);
        }
      })
      .catch(() => {});
  }, [src]);

  if (!svgContent) {
    return <img src={src} alt={alt} className={className} />;
  }

  return (
    <div
      className={`[&>svg]:h-auto [&>svg]:w-full ${className}`}
      role="img"
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
};

export default InlineSvg;
