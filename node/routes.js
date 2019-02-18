import { Router } from 'express';

// controller
import MealController from './controllers/meal.controller';
import MenuController from './controllers/menu.controller';

const router = Router();

router.get('/meals/', MealController.fetchAllMeals);

router.post('/meals/', MealController.addAMeal);

router.get('/meals/:id', MealController.getSingleMeal);

// add menu controller
router.get('/menu/', MenuController.fetchMenu);

router.post('/menu/', MenuController.setMenu);

export default router;
