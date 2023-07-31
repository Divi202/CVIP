import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="review-container mt-4">
      <p className="review-text">"{props.review}"</p>
      <p className="customer-name">~ {props.customerName}</p>
    </div>
  );
}

export default Reviews;
