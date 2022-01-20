import React, { Component } from "react";

import {
  Comment,
  CommentAuthor,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText,
  Rating,
  Segment,
  Label,
} from "semantic-ui-react";
import moment from "moment";
export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      reviews: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRate = this.handleRate.bind(this);
  }
  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });
  componentDidMount() {
    const commentsData = [
      {
        author: "Ahmad Mursal",
        comment:
          "Dr. Usman Javaid is incredible. He is lovely to speak with at every appointment. ",
        rating: 5,
        date: new Date("04/05/2020"),
      },
      {
        author: "Awais Ch.",
        comment:
          "Dr. Muhammad Usman is a great doctor! He’s very understanding and listens to your concerns. He takes time with the patient to help them with their health issues! ",
        rating: 5,
        date: new Date("02/07/2020"),
      },
      {
        author: "Junaid Iqbal",
        comment:
          "He explained everything to me in a very clear manner. He was also kind and friendly. All of the staff was great",
        rating: 5,
        date: new Date("05/07/2021"),
      },
    ];
    this.setState({ comments: commentsData });
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
    e.preventDefault();
  }

  render() {
    const { comments } = this.state;

    return (
      <Segment raised>
        <Label ribbon size="big" color="blue">
          Reviews
        </Label>
        <Segment padded="very">
          <CommentGroup>
            {comments &&
              comments.length > 0 &&
              comments
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(-3)
                .map((comment) => (
                  <Segment padded key={comment.date}>
                    <Comment>
                      <CommentContent>
                        <CommentAuthor>{comment.author}</CommentAuthor>
                        <Rating
                          maxRating={5}
                          rating={comment.rating}
                          size="large"
                          icon="star"
                          disabled
                        />
                        <CommentMetadata>
                          {getTime(comment.date)}
                        </CommentMetadata>
                        <CommentText>{comment.comment}</CommentText>
                      </CommentContent>
                    </Comment>
                  </Segment>
                ))}
          </CommentGroup>
        </Segment>
      </Segment>
    );
  }
}
function getTime(date) {
  return moment.utc(date).startOf("seconds").fromNow();
}
