import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  text-center">
      <h2 className="text-2xl font-bold text-gray-100 mb-2">Not Found</h2>
      <p className="text-gray-100 mb-4">
        Could not find the requested resource
      </p>
      <Link
        href="/videos"
        className="text-blue-400 text-primary hover:underline text-lg font-medium"
      >
        Return Home
      </Link>
    </div>
  );
}
