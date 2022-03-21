const req = require("express/lib/request");
const db = require("../models");
const Review = db.reviews;
const Op = db.Sequelize.Op;

// Create a Review
exports.createReview = (req, res) => {
    // Validate the request
    if (!req.body.Comment) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Review object
    const review = {
        Comment: req.body.Comment,
        Instructor: req.body.Instructor,
        Semester: req.body.Semester,
        Date: req.body.Date,
        HelpfulCount: req.body.HelpfulCount,
        CourseID: req.body.CourseID
    }

    // Save this review to the database
    Review.create(review)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Review."
        });
    });
};

// Delete a Review
exports.deleteReview = (req, res) => {
    const id = req.params.ID;

    Review.destroy({
        where: {
            ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Review was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Review with ID = ${id}. Maybe Review was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Review with ID = " + id
        });
    });
};

// Update a Review
exports.updateReview = (req, res) => {
    const id = req.params.id;

    Review.update(req.body, {
        where: {
            ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Review was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Review with ID = ${id}. Maybe Review was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Review with ID = " + id
        });
    });
};

// Delete a Review
exports.deleteReview = (req, res) => {
    const id = req.params.id;

    Review.destroy({
        where: {
            ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Review was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Review with ID = ${id}. Maybe Review was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Review with ID = " + id
        });
    });
};

// Get all Reviews of a specific Course
exports.findReviewbyCourse = (req, res) => {
    const courseID = req.params.courseID;

    Review.findAll({
        where: {
            CourseID: courseID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Reviews by CourseID."
        });
    });
};