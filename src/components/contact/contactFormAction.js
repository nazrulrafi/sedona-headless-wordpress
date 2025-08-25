export async function submitContactForm(formData) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/custom/v1/contact-form-info-post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });

    if (!res.ok) {
        throw new Error('Failed to submit contact form');
    }

    const data = await res.json();
    return data;
}
