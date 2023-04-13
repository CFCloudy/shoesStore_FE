import { LayoutProps } from "@/models/common";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { MainLayoutStyled } from "./main-layout-styled";
import { Layout } from "antd";
const { Content } = Layout;

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <MainLayoutStyled>
      <Header />
      <Content className="contentWarper"> {children}</Content>
      <Footer />
    </MainLayoutStyled>
  );
};
