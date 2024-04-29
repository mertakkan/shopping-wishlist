import { addWish } from '@/app/server-actions/addWish';
import { Button } from './ui/button';

export default function WishForm() {
  return (
    <form action={addWish} className="mb-6">
      <div className="mb-4">
        <label htmlFor="brand" className="block text-white mb-2">
          Brand
        </label>
        <input
          type="text"
          id="brand"
          name="brand"
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="block text-white mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="referenceNumber" className="block text-white mb-2">
          URL
        </label>
        <input
          type="text"
          id="referenceNumber"
          name="referenceNumber"
          className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
        />
      </div>
      <Button
        type="submit"
        className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded"
      >
        Add Wish
      </Button>
    </form>
  );
}
