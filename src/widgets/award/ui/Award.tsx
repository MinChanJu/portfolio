import { ImageSlider } from "@features/image-slider";

import { CERTIFICATES, CertCard } from "@entities/certificate";
import { PRIZES, PrizeCard } from "@entities/prize";

import { getImages } from "@shared/lib/image";
import { SectionLayout, SectionTitle } from "@shared/ui";

const Award = () => {
  return (
    <SectionLayout caption="Awards" title="Prizes & Certificates">
      <div className="flex flex-col gap-3">
        <SectionTitle title="🏆 수상" />
        {PRIZES.map((prize, i) => (
          <PrizeCard key={i} {...prize} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle title="📜 자격증" />
        {CERTIFICATES.map((cert, i) => (
          <CertCard key={i} {...cert} />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <SectionTitle title="🖼 증명자료" />
        <ImageSlider images={getImages("certification")} imageName={true} />
      </div>
    </SectionLayout>
  );
};

export default Award;
