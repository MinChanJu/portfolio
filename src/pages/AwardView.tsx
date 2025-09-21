import React from 'react'
import { Certificate, Prize } from '../types';
import { ImageSlider, Table } from '../components';
import { getImages } from '../utils/Image';

type AwardViewProps = {
  prizes: Prize[];
  certificates: Certificate[];
}

const AwardView: React.FC<AwardViewProps> = ({ prizes, certificates }) => {
  return (
    <div>
      <div className="big purple italic ts">Prizes and Certificates</div>

      <br />
      <div className="info ts">수상</div>
      <hr />
      <Table
        columnName={["번호", "대회명", "수상명", "주관", "수상일"]}
        columnClass={["num", "", "", "", "date"]}
        data={prizes}
        dataKey={["idx", "name", "rank", "host", "date"]} />

      <br />
      <div className="info ts">자격증</div>
      <hr />
      <Table
        columnName={["번호", "자격증명", "점수/급수", "발급처", "취득일"]}
        columnClass={["num", "", "", "", "date"]}
        data={certificates}
        dataKey={["idx", "name", "score", "issuer", "date"]} />

      <br />
      <div className="info ts">증명자료</div>
      <hr />
      <ImageSlider images={getImages("certification")} imageName={true} />
    </div>
  );
};

export default AwardView;