import { SignedOut, SignInButton } from "@clerk/nextjs";

export default function ProtectedRoute() {
  return (
    <div className="font-semibold  gap-5 flex flex-col justify-center items-center h-[100vh]  bg-green-50 ">
      <h1 className="text-3xl">
        To access this page, you have to login first.
      </h1>
      <span className="bg-red-500 text-white p-2 rounded-md">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </span>
    </div>
  );
}
