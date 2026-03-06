import { CERTIFICATES, CertCard } from "@entities/certificate";
import { PRIZES, PrizeCard } from "@entities/prize";

import { getImages } from "@shared/lib/image";
import { ImageSlider, SectionLayout, SectionTitle } from "@shared/ui";

const Award = () => {
  return (
    <SectionLayout caption="Awards" title="Prizes & Certificates">
      <div className="flex flex-col gap-3">
        <SectionTitle>🏆 수상</SectionTitle>
        {PRIZES.map((prize, i) => (
          <PrizeCard key={i} {...prize} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle>📜 자격증</SectionTitle>
        {CERTIFICATES.map((cert, i) => (
          <CertCard key={i} {...cert} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle>🖼 증명자료</SectionTitle>
        <ImageSlider images={getImages("certification")} imageName={true} />
      </div>
    </SectionLayout>
  );
};

export default Award;
