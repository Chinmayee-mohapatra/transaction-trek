import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        // Handle error fetching data
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = posts.filter((post) => post.userId === 1);
    setFilteredPosts(filtered);
  }, [posts]);

  // Code for displaying filtered posts in a table

  // Code for generating data for the pie chart
  const dataForPieChart = [
    { name: "UserID 1", value: filteredPosts.length, fill: "#8884d8" },
    { name: "Total posts", value: posts.length, fill: "#82ca9d" },
  ];

  return filteredPosts.length === 0 ? (
    <p className="text-center h-[20vh] text-2xl text-green-950 font-semibold tracking-wider py-10">
      Loading !!!
    </p>
  ) : (
    <div className="w-full overflow-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-medium md:font-bold mx-auto my-8">
        Data
      </h1>
      <h2 className="text-xl md:text-2xl font-normal md:font-medium mx-auto">
        Table: Post Details
      </h2>
      {/* Display filtered posts in a table */}
      {error ? (
        <p>{error}</p>
      ) : (
        <div className=" w-[100%] py-10 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-[80%] mx-auto text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg text-gray-600 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Body
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{post.id}</td>
                  <td className="px-6 py-4">{post.title}</td>
                  <td className="px-6 py-4">{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pie-chart */}
      <div className="w-full flex flex-col my-10 justify-center items-center">
        <p className=" text-2xl font-semibold">Pie-chart</p>
        <p className="mt-2 px-4 text-justify">
          Visual representation of posts written by user-1 with respect to posts
          written by all users.
        </p>
        <div className="w-full max-w-lg">
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={dataForPieChart}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Data;
