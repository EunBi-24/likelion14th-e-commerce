import { useParams } from "react-router";

import useFetchProduct from "../../hooks/useFetchProduct";
import useFetchReview from "../../hooks/useFetchReview";

import styles from "./ProductDetail.module.css"

const ProductDetail = () => {
    const { productId } = useParams();

    const { product, isProductLoading, isProductError } = useFetchProduct(productId);
    const { reviews, isReviewsLoading, isReviewsError } = useFetchReview(productId);

    if(isProductLoading || isReviewsLoading) {
        return <div>Loading...</div>;
    }
    
    if(isProductError || isReviewsError) {
        return <div>Error!!!</div>
    }

    return (
        <div>
            <div className={styles.productContainer}>
                <img src={product.image} />
                <div className={styles.productInfo}>
                    <div className={styles.productCategory}>{product.category}</div>
                    <h2>{product.name}</h2>
                    <div className={styles.productPrice}>{product.price.toLocaleString()}원</div>
                    <button>구매하기</button>
                </div>
            </div>
            <hr />
            <p className={styles.productDesc}>
                {product.description} 
            </p>
            <h3>리뷰 ({reviews.length})</h3>
            <hr />
            {reviews.length > 0 ? (
                reviews.map((review) => {
                return (
                <div key={review.id} className={styles.reviewItem}>
                    <div className={styles.reviewHeader}>
                        <div>{review.username}</div>
                        <div>({review.rating}/5)</div>
                    </div>
                    <div className={styles.text}>
                        {review.text}
                    </div>
                </div>
                );
                })
            ) : (
                <div className={styles.emptyReview}>아직 작성된 리뷰가 없습니다.</div>
            )}
        </div>
    );
};

export default ProductDetail;