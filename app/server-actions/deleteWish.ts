'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function deleteWish(formData: any) {
  const wishId = formData.get('id');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error('User is not authenticated within deleteWish server action');
    return;
  }

  const { error } = await supabase
    .from('wishlist')
    .delete()
    .match({ id: wishId, user_id: user.id });

  if (error) {
    console.error('Error deleting data', error);
    return;
  }

  revalidatePath('/wishlist');

  return { message: 'Success' };
}
