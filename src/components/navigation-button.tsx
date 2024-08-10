"use client";
import { useRouter } from "next/navigation";

function Navigationbutton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      Navigate using useRouter
    </button>
  );
}
export default Navigationbutton;
