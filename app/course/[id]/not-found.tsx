import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h1 className="text-red-600">Course not found!</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;
