import Avatar from "../Avatar";
import Button from "../Button";
import Rating from "../Rating";
import IReviewCardProps from "./ReviewCard";
import {
  ReviewCardDiv,
  UserContainerDiv,
  UserDetailDiv,
  UserNameDiv,
  UserEmailDiv,
  ReviewContainerDiv,
  ReviewRatingDiv,
  ButtonContainer,
  ReviewDescriptionDiv,
} from "./styles";
//36px
const ReviewCard = (props: IReviewCardProps) => {
  const { user, description, ratings, onUpdate, onDelete } = props;
  return (
    <ReviewCardDiv>
      <UserContainerDiv>
        <Avatar name="review" background="orange">
          {user.name[0]}
        </Avatar>
        <UserDetailDiv>
          <UserNameDiv>{user.name}</UserNameDiv>
          <UserEmailDiv>{user.email}</UserEmailDiv>
        </UserDetailDiv>
      </UserContainerDiv>
      <ReviewContainerDiv>
        <ReviewRatingDiv>
          <Rating size="medium" value={ratings} />
        </ReviewRatingDiv>
        <ReviewDescriptionDiv>{description}</ReviewDescriptionDiv>
      </ReviewContainerDiv>
      <ButtonContainer>
        <Button kind="primary" onClick={onUpdate}>
          Update
        </Button>
        <Button kind="primary" onClick={onDelete}>
          Delete
        </Button>
      </ButtonContainer>
    </ReviewCardDiv>
  );
};

export default ReviewCard;
