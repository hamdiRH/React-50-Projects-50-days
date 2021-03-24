import I18 from "./I18";
import { IntlProvider } from "react-intl";
import Wrapper from "./Wrapper";
import "./I18.scss";

const Index = () => {
  return (
    <Wrapper>
      <I18 date={Date.now()} />
    </Wrapper>
  );
};

export default Index;
