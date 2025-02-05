import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Home Page </h2>
      <p>Routes to different pages:</p>
      <Link href="/dashboard"> Dashboard</Link>
      <Link href="/auth/login"> Login</Link>
      <Link href="/auth/register"> Register</Link>
      <Link href="/lesson/1"> Lesson 1</Link>
    </div>
  );
}
