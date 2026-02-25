

export default function ReviewSection({ reviews }) {
    return (
        <div className="reviews mt-5">

            {reviews ? reviews.map(review => (
                <div key={review.id}>
                    <h6>{review.name}</h6>
                    <strong>Vote:</strong><span> {review.vote}</span>
                    <p>{review.text}</p>

                </div>
            ))
                : <p>RENDERING ERROR</p>}

        </div>
    )
}