export default {
  meals: [
    {
      id: 1,
      name: 'Iyan',
      size: 'Large',
      price: '450',
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 2,
      name: 'Iyan',
      size: 'Medium',
      price: '250',
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
      id: 3,
      name: 'Chicken Salad',
      size: 'Medium',
      price: '450',
      imageUrl:
        'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
  ],
  orders: [
    {
      id: 1,
      date: '18/02/2019',
      customerId: 1,
      total: '450',
      meal: [
        {
          name: 'Chicken Salad',
          size: 'Medium'
        }
      ],
      delivered: true
    }
  ],
  menu: [
    {
      date: '18-02-2019',
      meal: [
        {
          name: 'Chicken Salad',
          size: 'Medium'
        }
      ]
    }
  ]
};
