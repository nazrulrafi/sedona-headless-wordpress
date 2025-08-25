const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// Submit a new comment
export async function submitComment(formData) {
    const res = await fetch(`${API_BASE}/wp-json/custom/v1/comment-submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

    if (!res.ok) {
        throw new Error("Failed to submit comment");
    }

    return await res.json(); // { success: true, message: "..."}
}


