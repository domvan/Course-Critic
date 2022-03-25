import http from "../http-common";
class ReviewDataService {
  getAll() {
    return http.get("http://localhost:8080/api/reviews");
  }
  create(data) {
    return http.post("http://localhost:8080/api/reviews", data);
  }
  getCourseReviews(id){
    return http.get("http://localhost:8080/api/reviews/courseID/" + id);
  }
  getCourseReviewsWRatings(id) {
    return http.get("http://localhost:8080/api/reviews/ratings/" + id);
  }

  updateHelpful(id, data) {
    return http.put("http://localhost:8080/api/reviews/" + id, data);
  }
  //reviews/:id/:helpfulCount
  
}
export default new ReviewDataService();
