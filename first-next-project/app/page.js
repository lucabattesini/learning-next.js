import Link from "next/link";
import Header from "../components/header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>Ths is the main page</p>
      <p><Link href="/meals" className="link">Meals</Link></p>
      <p><Link href="/meals/share" className="link">Share page</Link></p>
      <p><Link href="/community" className="link">Community</Link></p>
      <p><Link href="/meals/meal-type" className="link">Meal types</Link></p>
    </main>
  );
}
