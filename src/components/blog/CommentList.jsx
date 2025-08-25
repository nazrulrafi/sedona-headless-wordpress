// CommentList.jsx
import React from "react";

// Server component, no "use client"
async function fetchComments(postId) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/comments?post=${postId}`,
            { cache: "no-store" } // always fetch fresh data
        );

        if (!res.ok) throw new Error("Failed to fetch comments");
        return await res.json();
    } catch (err) {
        console.error(err);
        return [];
    }
}

export default async function CommentList({ postId }) {
    const comments = await fetchComments(postId);

    if (!comments.length) return <p>No comments yet.</p>;

    return (
        <div className="entry-comments">
            <h5 className="h3 mb-24">{comments.length} Comments</h5>
            <ul className="comment-list">
                {comments.map((comment) => (
                    <li key={comment.id} className="comment">
                        <div className="comment-body">
                            <div className="comment-avatar">
                                <img
                                    alt={comment.author_name}
                                    src={comment.author_avatar_urls?.["48"] || "/assets/img/blog/comment_1.png"}
                                />
                            </div>
                            <div className="comment-text">
                                <h6 className="comment-author">{comment.author_name}</h6>
                                <div className="comment-metadata">
                  <span className="comment-date">
                    {new Date(comment.date).toLocaleString()}
                  </span>
                                </div>
                                <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
                                <a href="#" className="comment-reply">
                                    Reply
                                </a>
                            </div>
                        </div>

                        {/* If you have replies, render them */}
                        {comment.replies && comment.replies.length > 0 && (
                            <ul className="children">
                                {comment.replies.map((reply) => (
                                    <li key={reply.id} className="comment">
                                        <div className="comment-body">
                                            <div className="comment-avatar">
                                                <img
                                                    alt={reply.author_name}
                                                    src={reply.author_avatar_urls?.["48"] || "/assets/img/blog/comment_2.png"}
                                                />
                                            </div>
                                            <div className="comment-text">
                                                <h6 className="comment-author">{reply.author_name}</h6>
                                                <div className="comment-metadata">
                          <span className="comment-date">
                            {new Date(reply.date).toLocaleString()}
                          </span>
                                                </div>
                                                <p dangerouslySetInnerHTML={{ __html: reply.content.rendered }} />
                                                <a href="#" className="comment-reply">
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
