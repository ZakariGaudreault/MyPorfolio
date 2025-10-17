"use client";
import FunFacts from "@/components/funFacts";
import PersonalPresentation from "@/components/personalPresentation";
import ProfessionalCareer from "@/components/professionalCareer";
import TechnicalSkills from "@/components/technicalSkills";

export default function Home() {
  return (
    <>
      <PersonalPresentation />
      <ProfessionalCareer />
      <TechnicalSkills />
      <FunFacts />
    </>
  );
}
