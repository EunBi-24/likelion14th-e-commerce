import { useEffect, useState } from "react";

function useFetchReview(productId) {
    const [reviews, setReviews] = useState([]);
    const [isReviewsLoading, setIsReviewsLoading] = useState(true);
    const [isReviewsError, setisReviewsError] = useState(false);

    useEffect(() => {
    async function fetchReviews() {
            try {
                const response = await fetch(`http://localhost:3000/reviews?productId._eq=${productId}`);

                if(!response.ok) {
                    throw new Error("");
                }

                const json = await response.json();

                setReviews(json);
                setIsReviewsLoading(false);
            } catch {
                setisReviewsError(true);
                setIsReviewsLoading(false);
            }
        }

        fetchReviews();
    }, [productId]);

    return {
        reviews,
        isReviewsLoading,
        isReviewsError,
    };
}

export default useFetchReview;