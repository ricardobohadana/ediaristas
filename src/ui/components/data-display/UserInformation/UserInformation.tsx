import React, { ReactElement } from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  RatingStyled,
  AvatarStyled,
} from "./UserInformation.style";

interface UserInformationProps {
  picture?: string;
  name: string;
  rating: number;
  description?: string;
}

function UserInformation({
  name,
  picture,
  rating,
  description,
}: UserInformationProps): ReactElement {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
}

export default UserInformation;
