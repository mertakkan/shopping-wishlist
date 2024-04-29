import AuthForm from '@/components/auth-form';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12 space-y-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            wishlist
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Your personal space to curate and manage a wishlist of your favorite
          shopping items of any kind. Sign in to create, view, edit, and delete
          items from your wishlist.
        </p>
        <div className="bg-yellow-400 p-6 rounded-lg shadow-lg">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}
