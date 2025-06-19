export default function ErrorScreen({ message }) {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-red-500 text-lg font-semibold">
      Error: {message}
    </div>
  );
}
