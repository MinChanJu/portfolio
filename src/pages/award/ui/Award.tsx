import { CERTIFICATES } from "@entities/certificate";
import { PRIZES } from "@entities/prize";

import { getImages } from "@shared/lib/image";
import { ImageSlider, PageHeader, SectionTitle } from "@shared/ui";

import CertCard from "./CertCard";
import PrizeCard from "./PrizeCard";

const Award = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <PageHeader caption="Awards" title="Prizes & Certificates" />

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
    </div>
  );
};

export default Award;
