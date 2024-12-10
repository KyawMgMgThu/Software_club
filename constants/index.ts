export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Attendance',
      route: '/attendance',
    },
    {
      label: 'Admin',
      route: '/admin',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }