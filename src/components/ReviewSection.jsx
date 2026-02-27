

export default function ReviewSection({ reviews }) {
    return (
        <>
            <div className="reviews mt-5">

                {reviews ? reviews.map(review => (
                    <div key={review.id} className="border mb-3 me-3 border-primary bg-primary-subtle">
                        <h6>{review.name}</h6>
                        <strong>Vote:</strong><span> {review.vote}</span>
                        <p>{review.text}</p>

                    </div>
                ))
                    : <p>RENDERING ERROR</p>}
            </div>

            <div className="reviews-form">

            </div>

        </>
    )
}