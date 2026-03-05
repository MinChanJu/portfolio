import React from "react";

import { ImageSlider, Table } from "../components";
import { Certificate, Prize } from "../types";
import { getImages } from "../utils/Image";

type AwardViewProps = {
  prizes: Prize[];
  certificates: Certificate[];
};

const AwardView: React.FC<AwardViewProps> = ({ prizes, certificates }) => {
  return (
    <div>
      <div className="text-start text-5xl font-bold text-purple-600 italic">Prizes and Certificates</div>

      <br />
      <div className="text-start text-2xl font-bold">수상</div>
      <hr />
      <br />
      <Table
        columnName={["번호", "대회명", "수상명", "주관", "수상일"]}
        columnClass={["num", "", "", "", "date"]}
        data={prizes}
        dataKey={["idx", "name", "rank", "host", "date"]}
      />

      <br />
      <div className="text-start text-2xl font-bold">자격증</div>
      <hr />
      <br />
      <Table
        columnName={["번호", "자격증명", "점수/급수", "발급처", "취득일"]}
        columnClass={["num", "", "", "", "date"]}
        data={certificates}
        dataKey={["idx", "name", "score", "issuer", "date"]}
      />

      <br />
      <div className="text-start text-2xl font-bold">증명자료</div>
      <hr />
      <br />
      <ImageSlider images={getImages("certification")} imageName={true} />
    </div>
  );
};

export default AwardView;
