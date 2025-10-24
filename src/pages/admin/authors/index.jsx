import { useEffect, useState } from "react";
import { getAuthors } from "../../../_services/authors";
import { Link } from "react-router-dom";

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAuthors();
      setAuthors(data);
    };
    fetchData();
  }, []);

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

        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Photo</th>
              <th className="px-4 py-3">Bio</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-3">{author.id}</td>
                <td className="px-4 py-3">{author.name}</td>
                <td className="px-4 py-3">{author.photo}</td>
                <td className="px-4 py-3">{author.bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}