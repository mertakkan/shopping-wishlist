import AuthForm from '@/components/auth-form';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white/90 text-gray-800">
      <div className="container mx-auto p-6 sm:p-12 space-y-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          Welcome to Wish List
        </h1>
        <p className="text-lg md:text-xl text-gray-800 mb-6">
          Your personal space to curate and manage a wishlist of your favorite
          shopping items of any kind. Sign in to create, view, edit, and delete
          items from your wishlist.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
