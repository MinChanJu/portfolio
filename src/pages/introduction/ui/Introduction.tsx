import profile from "@shared/assets/image/profile.png";
import { URL } from "@shared/config/url";
import { Card, CustomLink, PageHeader, SectionTitle } from "@shared/ui";

import { EDU_ROWS, INFO_ROWS, paragraphs } from "../model/info.constants";
import InfoTable from "./InfoTable";

const Introduction = () => {
  return (
    <div className="flex flex-col gap-10 pb-10">
      <PageHeader
        caption="About Me"
        title={
          <div className="mt-5 flex items-center justify-start gap-5">
            <img className="w-40 rounded-2xl border" src={profile} alt="프로필 사진" />
            <div className="flex flex-col gap-2">
              <div>안녕하세요,</div>
              <div>주니어 개발자 주민찬입니다.</div>
            </div>
          </div>
        }
      />

      <Card className="flex flex-col gap-4 px-6 py-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed whitespace-pre-wrap text-slate-600">
            {"\t" + p}
          </p>
        ))}
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card className="flex flex-col gap-3 px-5 py-4">
          <SectionTitle>📋 Info</SectionTitle>
          <InfoTable
            rows={[
              ...INFO_ROWS,
              {
                label: "GitHub",
                value: <CustomLink href={URL.GITHUB} />,
              },
            ]}
          />
        </Card>
        <Card className="flex flex-col gap-3 px-5 py-4">
          <SectionTitle>🎓 학력</SectionTitle>
          <InfoTable rows={EDU_ROWS} />
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
