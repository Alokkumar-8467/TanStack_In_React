import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api/Api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";

const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const limit = 3;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["posts", pageNumber], // it work as useState
    queryFn: () => fetchPosts(pageNumber), // it work as useEffect
    placeholderData: keepPreviousData, // this help to hide loading text
    // gcTime:1000,

    // staleTime:10000,  // bydefault staleTime sets to = 0

    // refetchInterval:1000,
    // refetchIntervalInBackground:true
  });

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div className="my-12  flex flex-col items-center">
      <div>FetchRQ</div>
      <ul>
        {data?.map((curElem) => {
          const { id, title, body } = curElem;
          return (
            <li className="border p-2 shadow-sm my-4" key={id}>
              <NavLink to={`/rq/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-[20px] ">
        <button
        disabled={pageNumber === 0}
          className={`px-5  py-2 rounded-lg text-white font-medium transition ${
            pageNumber === 0
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 cursor-pointer "
          } `}
          onClick={() => setPageNumber((prev) => prev - limit)}
        >
          Prev
        </button>
        <h2 className="text-lg font-semibold text-gray-700 border px-4 py-2 rounded-lg  ">
          {pageNumber / limit + 1}
        </h2>
        <button
          className="px-5 py-2 rounded-lg cursor-pointer bg-green-500 hover:bg-green-600 text-white font-medium transition"
          onClick={() => setPageNumber((prev) => prev + limit)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchRQ;
