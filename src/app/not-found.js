// app/not-found.jsx
export const dynamic = "force-static"; // ✅ static build

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
        </div>
    );
}
