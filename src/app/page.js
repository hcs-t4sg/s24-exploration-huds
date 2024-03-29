import styles from "./page.module.css";
import { getFormattedDate } from "@/lib/utils";
import axios from "axios";
import DhallHours from "@/components/dhallHours";

export default async function Home() {
  const breakfastMeals = [];
  const lunchMeals = [];
  const dinnerMeals = [];

  const date = getFormattedDate();

  const data = await axios.get(
    "https://go.apis.huit.harvard.edu/ats/dining/v3/recipes?date=" + date,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": process.env.HUDS_API_KEY,
      },
    }
  );

  const meals = data.data;

  meals.forEach((meal) => {
    if (meal.Meal_Name === "Breakfast") {
      breakfastMeals.push(meal);
    } else if (meal.Meal_Name === "Lunch") {
      lunchMeals.push(meal);
    } else if (meal.Meal_Name === "Dinner") {
      dinnerMeals.push(meal);
    }
  });

  return (
    <div className={styles.main}>
      <DhallHours></DhallHours>
      <h1>Breakfast</h1>
      <ul>
        {breakfastMeals.map((meal) => (
          <li key={meal.ID}>{meal.Recipe_Print_As_Name}</li>
        ))}
      </ul>
      <h1>Lunch</h1>
      <ul>
        {lunchMeals.map((meal) => (
          <li key={meal.ID}>{meal.Recipe_Print_As_Name}</li>
        ))}
      </ul>
      <h1>Dinner</h1>
      <ul>
        {dinnerMeals.map((meal) => (
          <li key={meal.ID}>{meal.Recipe_Print_As_Name}</li>
        ))}
      </ul>
    </div>
  );
}
