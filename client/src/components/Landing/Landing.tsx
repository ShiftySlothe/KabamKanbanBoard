import { useState } from "react";
import {
  LandingContainer,
  Banner,
  BannerHeading,
  BannerParagraph,
  BannerBtn,
} from "./styles";

export const Landing = () => {
  const text = ["Notes", "To-Do's", "Organisation"];
  const [headerBannerText, setHeaderBannerText] = useState<string[]>(text);

  return (
    <LandingContainer>
      <Banner>
        <BannerHeading></BannerHeading>
        <BannerParagraph>Lorem ipsum dolor sit amet.</BannerParagraph>
        <BannerBtn>Lorem, ipsum.</BannerBtn>
      </Banner>
    </LandingContainer>
  );
};
