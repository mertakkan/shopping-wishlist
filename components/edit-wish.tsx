'use client';

import { useState } from 'react';
import { updateWish } from '@/app/server-actions/updateWish';
import { Button } from './ui/button';

export default function EditWish({ wish }: any) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: wish.brand,
    title: wish.title,
    url: wish.url,
  });

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <Button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </Button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
          <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <span
              className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <form
              action={updateWish}
              onSubmit={() => setShowModal(false)}
              className="mt-4"
            >
              <input type="hidden" name="id" value={wish.id} />
              <div className="mb-4">
                <label htmlFor="brand" className="block text-gray-300 mb-2">
                  Brand
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="url" className="block text-gray-300 mb-2">
                  URL
                </label>
                <input
                  type="text"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update wish
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
