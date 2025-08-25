"use client";
import React, { useState } from "react";
import { submitComment } from "./commentFormAction";

function CommentForm({ postId }) {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());
        formData.postId = postId;

        setLoading(true);
        try {
            const res = await submitComment(formData);
            setMessage(res.message || "Comment submitted successfully!");
            e.target.reset();
        } catch (err) {
            console.error(err);
            setMessage("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="comment-wrapper">
            <div id="respond" className="comment-respond">
                <h5 className="h3 mb-24">Leave your comment</h5>
                <form className="comment-form material" onSubmit={handleSubmit}>
                    <div className="comment-form-comment material__form-group form-group">
            <textarea
                id="comment"
                className="form-input material__input"
                name="comment"
                rows="7"
                required
            ></textarea>
                        <label htmlFor="comment" className="material__label">
                            Comment <abbr title="required" className="required">*</abbr>
                        </label>
                        <span className="material__underline"></span>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                className="form-input material__input"
                                required
                            />
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-input material__input"
                                required
                            />
                        </div>
                        <div className="col-lg-4">
                            <input
                                type="text"
                                name="website"
                                placeholder="Website"
                                className="form-input material__input"
                            />
                        </div>
                    </div>

                    <p className="comment-form-submit">
                        <input
                            type="submit"
                            className="btn btn--lg btn--color btn--button"
                            value={loading ? "Submitting..." : "Post Comment"}
                            disabled={loading}
                        />
                    </p>
                </form>

                {message && (
                    <div
                        style={{
                            color: message.includes("success") ? "green" : "red",
                            marginTop: "10px",
                        }}
                    >
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CommentForm;
