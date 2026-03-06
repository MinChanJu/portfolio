import { CareerFilter, useCareerFilter } from "@features/filter-career";

import { SectionLayout } from "@shared/ui";

import Timeline from "./Timeline";

const Career = () => {
  const { selectedCareerTypes, filteredCareers, toggleCareerType } = useCareerFilter();

  return (
    <SectionLayout caption="Timeline" title="Careers">
      <CareerFilter selectedCareerTypes={selectedCareerTypes} onToggle={toggleCareerType} />
      <Timeline items={filteredCareers} />
    </SectionLayout>
  );
};

export default Career;
