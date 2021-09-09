import { BrowserRouter, Route } from "react-router-dom";
import { AppContainer } from "./baseStyles";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Landing } from "./Landing";


export const App = () => {
    return (
        <BrowserRouter>
            <AppContainer>
                <Header />
                <Route exact path="/" component={Landing} />
                <Footer />
            </AppContainer>
        </BrowserRouter>
    )
}