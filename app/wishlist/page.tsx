import { cookies } from 'next/headers';
import EditWish from '@/components/edit-wish';
import WishForm from '@/components/wish-form';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { deleteWish } from '../server-actions/deleteWish';
import { Button } from '@/components/ui/button';

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: wishes, error } = await supabase
    .from('wishlist')
    .select('*')
    .eq('user_id', user?.id)
    .order('brand', { ascending: true });

  if (error) {
    console.error('Error fetching wishes');
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-16">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            My Watch List
          </h1>
          <form action="/auth/signout" method="post">
            <Button
              type="submit"
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign out
            </Button>
          </form>
        </div>
        <WishForm />
        <div className="mt-6">
          {wishes?.map((wish) => (
            <div
              key={wish.id}
              className="mb-4 p-4 bg-gray-800 rounded-lg shadow"
            >
              <h2 className="text-xl text-white mb-2">
                {wish.brand} - {wish.title}
              </h2>
              <div className="flex space-x-2">
                <form action={deleteWish}>
                  <input type="hidden" name="id" value={wish.id} />
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </Button>
                </form>
                <EditWish wish={wish} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
