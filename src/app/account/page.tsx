import { redirect } from "next/navigation";

function Account() {
  // assume that account id is null
  const accountId = null;
  if (!accountId) {
    redirect("/");
  }

  console.log("account page");

  return <div>Account</div>;
}
export default Account;
