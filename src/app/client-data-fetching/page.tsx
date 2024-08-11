"use client";

import { useEffect, useState } from "react";

function ClientsideDataFetching() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetch("https://dummyjson.com/users");
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const jsonData = await response.json();
        setUsers(jsonData.users);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchUsers();
  }, []);

  if (isError) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(users);

  return <div>ClientsideDataFetching</div>;
}
export default ClientsideDataFetching;
