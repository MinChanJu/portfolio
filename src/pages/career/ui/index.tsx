import data from "@shared/assets/data.json";
import { Table } from "@shared/ui";

const CareerPage = () => {
  const { careers } = data;
  return (
    <div>
      <div className="text-start text-5xl font-bold text-purple-600 italic">Careers</div>

      <br />
      <div className="text-start text-2xl font-bold">경력</div>
      <hr />
      <br />
      <Table
        columnName={["번호", "구분", "내용", "기간"]}
        columnClass={["num", "class", "", "period"]}
        data={careers}
        dataKey={["idx", "class", "description", "period"]}
        rowClass={["", "", "description", ""]}
      />
    </div>
  );
};

export default CareerPage;
