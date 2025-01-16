import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

const reactRoot = createRoot(rootElement);
import { restaurants} from "../materials/mock.js";

reactRoot.render(
    <div  className='someClass'>
      {restaurants.map((restaurant) => (
          <div>
            <h1>Название ресторана: <span key={restaurant}>{restaurant.name}</span>
            </h1>
            <h3>Меню</h3>
            <ul>
              {restaurant.menu.map(dish => <li key={dish}>{dish.name}</li>)}
            </ul>
            <h3>Отзывы</h3>
            <ul>
              {restaurant.reviews.map(review => <li key={review}>{review.text}</li>)}
            </ul>
            <hr/>
          </div>
      ))}
    </div>
);