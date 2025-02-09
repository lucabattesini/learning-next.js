import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the main page</h1>
      <p>Ths is the main page</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
