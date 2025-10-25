import { useEffect, useState } from "react";
import { deleteGenre, getGenres } from "../../../_services/genres";
import { Link } from "react-router-dom";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this genre?");
    if (confirmDelete) {
      await deleteGenre(id);
      setGenres(genres.filter((genre) => genre.id !== id));
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Genres</h2>
            <Link
              to="/admin/genres/create"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              + Add Genre
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Description</th>
                  <th className="px-4 py-3"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody>
                {genres.map((genre) => (
                  <tr key={genre.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{genre.name}</td>
                    <td className="px-4 py-3">{genre.description}</td>
                    <td className="px-4 py-3 flex items-center justify-end relative">
                      <button onClick={() => toggleDropdown(genre.id)} className="p-0.5 text-gray-500 hover:text-gray-800">⋮</button>
                      {openDropdownId === genre.id && (
                        <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y shadow dark:bg-gray-700">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link to={`/admin/genres/edit/${genre.id}`} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600">Edit</Link>
                            </li>
                          </ul>
                          <div className="py-1">
                            <button onClick={() => handleDelete(genre.id)} className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">Delete</button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}