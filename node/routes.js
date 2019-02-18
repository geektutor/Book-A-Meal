import { Router } from 'express';

// controller
import MealController from './controllers/meal.controller';
import MenuController from './controllers/menu.controller';
import OrderController from './controllers/order.controller';

const router = Router();

router.get('/meals/', MealController.fetchAllMeals);

router.post('/meals/', MealController.addAMeal);

router.get('/meals/:id', MealController.getSingleMeal);

router.delete('/meals/:id', MealController.deleteMeal);

// add menu controller
router.get('/menu/', MenuController.fetchMenu);

router.post('/menu/', MenuController.setMenu);

// add order controller
router.get('/order/', OrderController.getAllOrders);

router.post('/order/', OrderController.makeOrder);

router.put('/order/:id', OrderController.updateAnOrder);

router.delete('/order/:id', OrderController.deleteAnOrder);

export default router;
