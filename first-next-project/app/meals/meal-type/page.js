import Link from "next/link";

export default function mealSelect() {
    return(
        <main>
            <h1>Select your meal</h1>
            <p>
                <Link href="/meals/meal-type/meal-1">Meal 1</Link>
            </p>
            <p>
                <Link href="/meals/meal-type/meal-2">Meal 2</Link>
            </p>
        </main>
    )
}