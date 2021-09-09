import { useState } from "react";
import { LandingContainer } from "./baseStyles"   

export const Landing = () => {
    const text = ["Notes", "To-Do's", "Organisation"]
    const [headerBannerText, setHeaderBannerText] = useState<string[]>(text)

    return <LandingContainer>Landing</LandingContainer>
}