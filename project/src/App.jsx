import { GlobalStyle } from "./common/GlobalStyle";
import { Wrapper } from "./styled.app";
import { Layout } from "./component/layout/Layout";
import { About } from "./component/about/About";
export const App = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Layout>
                <About />
            </Layout>
        </Wrapper>
    );
};
