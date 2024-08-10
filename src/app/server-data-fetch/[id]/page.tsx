const fetchSingleUserDetails = async (userId: string) => {
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    if (!response.ok) {
      throw new Error("error fetching user details");
    }
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.log(error);
  }
};

async function UserDetails({ params: { id } }: { params: { id: string } }) {
  const userDetails = await fetchSingleUserDetails(id);
  console.log(userDetails);
  return (
    <div>
      <h1>UserDetails of user : {id}</h1>
      <h2>
        Name of user : {userDetails.firstName} {userDetails.lastName}
      </h2>
    </div>
  );
}
export default UserDetails;
