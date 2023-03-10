import styled from "styled-components";
import { device } from "../../constants/constants";

export const StyledSpan = styled.div`
  font-size: 20px;
  &.checked {
    color: orange;
  }
`;

export const ReviewCardDiv = styled.div`
  padding: 0px 16px 8px;
  border-bottom: 1px solid;
  background-color: #e8e7e7;
`;

export const UserContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const UserDetailDiv = styled.div`
  text-align: left;
  width: 100%;
`;

export const UserNameDiv = styled.div`
  font-weight: bold;

  @media ${device.mobile1} {
    font-size: 16px;
  }
  @media ${device.mobile2} {
    font-size: 16px;
  }
  @media ${device.desktop} {
    font-size: 20px;
  }
`;

export const UserEmailDiv = styled.div`
  @media ${device.mobile1} {
    font-size: 14px;
  }
  @media ${device.mobile2} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const ReviewContainerDiv = styled.div`
  text-align: left;
  padding: 4px 8px 8px 50px;
  @media ${device.mobile1} {
    font-size: 14px;
  }
  @media ${device.mobile2} {
    font-size: 14px;
  }
  @media ${device.desktop} {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  padding: 4px 8px 0px 50px;
  display: flex;
  gap: 16px;
`;

export const ReviewRatingDiv = styled.div``;

export const ReviewDescriptionDiv = styled.div``;
