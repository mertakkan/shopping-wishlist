'use server';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function addWish(formData: any) {
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
    console.error('User is not authenticated within addWish server action');
    return;
  }

  const { data, error } = await supabase.from('wishes').insert([
    {
      title,
      brand,
      url: url,
      user_id: user.id,
    },
  ]);

  if (error) {
    console.error('Error inserting data', error);
    return;
  }

  revalidatePath('/wishlist');

  return { message: 'Success' };
}
