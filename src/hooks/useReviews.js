import { useEffect, useState } from "react";

const useReviews = () =>{
    const [review, setReview] = useState([]);

    useEffect(()=>{
        fetch('https://tranquil-dawn-10499.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    },[])

    return [review, setReview];
}
export default useReviews;