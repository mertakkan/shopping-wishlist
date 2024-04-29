'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function updateWish(formData: any) {
  const id = formData.get('id');
  const title = formData.get('title');
  const brand = formData.get('brand');
  const url = formData.get('url');

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error('User is not authenticated within updateWish server action');
    return;
  }

  const { data, error } = await supabase
    .from('wishlist')
    .update({
      title,
      brand,
      url: url,
    })
    .match({ id, user_id: user.id });

  if (error) {
    console.error('Error updating data', error);
    return;
  }

  revalidatePath('/wishlist');

  return { message: 'Success' };
}
