import { useState } from "react";
import { useEffect } from "react";

import Datatable from "~/components/datatable/Datatable";
import { ReviewService } from "../../services/review.service";
import { reviewProductColumns } from "../../ColumnsOfTable";

const ReviewsList= () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        ReviewService.getReviews().then((res) => {
            console.log(res.data);
            setReviews(res.data)
        })
    }, []);

   

    return (
        <div>
            <div>
                <Datatable
                    rows={reviews}
                    title=""
                    productColumns={reviewProductColumns}
                    type="review"
                />
            </div>
        </div>
    );
};

export default ReviewsList;
