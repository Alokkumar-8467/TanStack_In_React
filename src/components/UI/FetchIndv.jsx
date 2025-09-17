import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { fetchInvPosts } from "../../api/Api";

const FetchIndv = () => {
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["post", id], // it work as useState
    queryFn: () => fetchInvPosts(id), // it work as useEffect
  });

  console.log("Sigle post data", data);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message || "Something went wrong!"}</p>;

  return (
    <div className="my-12  flex flex-col items-center" >
      <div>Post Detail Id Number - {id} </div>
      <ul className="border shadow-2xl rounded-2xl my-4 p-4" >
        <li>
          <p>Id : {data.id}</p>
          <p>Title : {data.title}</p>
          <p>Body : {data.body}</p>
        </li>
      </ul>
      <NavLink to={"/rq"} >
        <button className="bg-gray-400 hover:bg-gray-500 p-4 rounded-2xl cursor-pointer text-white" >Go Back</button>
      </NavLink>
    </div>
  )
};

export default FetchIndv;
