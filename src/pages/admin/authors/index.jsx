import { useEffect, useState } from "react";
import { getAuthors, deleteAuthor } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthors();
      setAuthors(data);
    };
    fetchData();
  }, []);

  const toggleDropdown = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this author?");
    if (confirmDelete) {
      try {
        await deleteAuthor(id);
        setAuthors(authors.filter((author) => author.id !== id));
      } catch (error) {
        console.error("Error deleting author:", error);
        alert("Failed to delete author");
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-5">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Authors</h2>
          <Link
            to="/admin/authors/create"
            className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800"
          >
            + Add Author
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Photo</th>
                <th className="px-4 py-3">Bio</th>
                <th className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {authors.length > 0 ? (
                authors.map((author) => (
                  <tr key={author.id} className="border-b dark:border-gray-700">
                    <td className="px-4 py-3">{author.id}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{author.name}</td>
                    <td className="px-4 py-3">{author.photo}</td>
                    <td className="px-4 py-3">{author.bio}</td>
                    <td className="px-4 py-3 flex items-center justify-end relative">
                      <button
                        onClick={() => toggleDropdown(author.id)}
                        className="p-1 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                      >
                        ⋮
                      </button>

                      {openDropdownId === author.id && (
                        <div className="absolute right-0 mt-2 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li>
                              <Link
                                to={`/admin/authors/edit/${author.id}`}
                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Edit
                              </Link>
                            </li>
                          </ul>
                          <div className="py-1">
                            <button
                              onClick={() => handleDelete(author.id)}
                              className="block w-full text-left py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-3 text-center text-gray-500">
                    No authors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}