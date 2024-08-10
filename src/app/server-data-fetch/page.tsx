import Link from "next/link";

const fetchUsers = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Error fetching users");
    }
    const jsonData = await response.json();
    return jsonData.users;
  } catch (error) {
    console.log(error);
  }
};

async function ServersideDataFetching() {
  const users = await fetchUsers();

  return (
    <main>
      <ul>
        {users?.length > 0 &&
          users.map((user) => (
            <Link href={`/server-data-fetch/${user.id}`} key={user.id}>
              <li>{user.username}</li>
            </Link>
          ))}
      </ul>
    </main>
  );
}
export default ServersideDataFetching;
