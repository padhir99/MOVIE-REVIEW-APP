import IFooterProps from "./Footer";
import { device } from "../../constants/constants";
import styled from "styled-components";

export const FooterContainerDiv = styled.div<IFooterProps>`
  display: grid;
  text-align: center;
  place-content: center;
  background-color: orange;

  @media ${device.mobile1} {
    padding: 4px 6px;
    font-size: 8px;
  }
  @media ${device.mobile2} {
    padding: 6px 12px;
    font-size: 10px;
  }
  @media ${device.tablet} {
    padding: 8px 18px;
    font-size: 12px;
  }
  @media ${device.laptop} {
    padding: 8px 24px;
    font-size: 16px;
  }
  @media ${device.desktop} {
    padding: 8px 30px;
    font-size: 20px;
  }
`;
