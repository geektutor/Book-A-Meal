import MenuService from '../services/menu.service';

const MenuController = {
  fetchMenu(req, res) {
    const { date } = req.body;
    /* Expect json of the format 
      {
        date: 18-02-2019
      } */
    const fetchMenu = MenuService.fetchMenu(date);
    return res
      .json({
        status: 'success',
        data: fetchMenu
      })
      .status(200);
  },
  setMenu(req, res) {
    const menu = req.body;
    const setMenu = MenuService.setMenu(menu);
    return res
      .json({
        status: 'success',
        data: setMenu
      })
      .status(201);
  }
};

export default MenuController;
