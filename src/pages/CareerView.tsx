import React from 'react'
import { Career } from '../types';
import { Table } from '../components';

type CareerViewProps = {
  careers: Career[];
}

const CareerView: React.FC<CareerViewProps> = ({ careers }) => {
  return (
    <div>
      <div className="big purple italic ts">Careers</div>

      <br />
      <div className="info ts">경력</div>
      <hr />
      <Table
        columnName={["번호", "구분", "내용", "기간"]}
        columnClass={["num", "class", "", "period"]}
        data={careers}
        dataKey={["idx", "class", "description", "period"]}
        rowClass={["", "", "description", ""]} />
    </div>
  );
};

export default CareerView;