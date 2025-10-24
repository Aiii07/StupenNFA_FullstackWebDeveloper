import { useEffect, useState } from "react";
import { getGenres } from "../../../_services/genres";
import { Link } from "react-router-dom";

export default function AdminGenres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-5">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-5">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Genres</h2>
          <Link
            to="/admin/genres/create"
            className="bg-indigo-700 text-white px-4 py-2 rounded-lg hover:bg-indigo-800"
          >
            + Add Genre
          </Link>
        </div>

        <table className="w-full text-sm text-gray-500 dark:text-gray-400">
          <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr key={genre.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-3">{genre.id}</td>
                <td className="px-4 py-3">{genre.name}</td>
                <td className="px-4 py-3">{genre.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}