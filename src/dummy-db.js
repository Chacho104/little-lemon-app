const DUMMY_MEALS = [
  {
    id: "b1",
    category: "breakfast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/organic-assorted.jpg",
    isFeatured: false,
    price: 3.5,
    title: "Assorted Organic",
  },
  {
    id: "b2",
    category: "breakfast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/classic.jpg",
    isFeatured: false,
    price: 6.5,
    title: "The Classic",
  },
  {
    id: "b3",
    category: "breakfast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/best-toast.jpg",
    isFeatured: false,
    price: 2.5,
    title: "Fresh Egg Toast",
  },
  {
    id: "b4",
    category: "breakfast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/croissant.jpg",
    isFeatured: false,
    price: 1.5,
    title: "Croissant Take Away",
  },

  {
    id: "l1",
    category: "lunch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/greeksalad.jpg",
    isFeatured: true,
    price: 12.99,
    title: "Greek Salad",
  },
  {
    id: "l2",
    category: "lunch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/tehranplatter.jpg",
    isFeatured: false,
    price: 4.99,
    title: "Tehran Platter",
  },
  {
    id: "l3",
    category: "lunch",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/vegsoup.jpg",
    isFeatured: false,
    price: 7.99,
    title: "Vegie Fill",
  },
  {
    id: "m1",
    category: "mains",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/bruchetta.jpg",
    isFeatured: true,
    price: 5.99,
    title: "Bruchetta",
  },
  {
    id: "m2",
    category: "mains",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/spicysteak.jpg",
    isFeatured: false,
    price: 10.99,
    title: "Spicy Steak",
  },
  {
    id: "d1",
    category: "desserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/lemondessert.jpg",
    isFeatured: true,
    price: 2.99,
    title: "Lemon Dessert",
  },
  {
    id: "d2",
    category: "desserts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quoeum, deserunt placeat officia iste iusto quia. Alias dolores fugiteaque, tenetur quod nulla qui beatae dolore odio. Sit, culpa.",
    image: "images/pancake-layers.jpg",
    isFeatured: false,
    price: 4.5,
    title: "Layered Pancakes",
  },
];

export function getAllMeals() {
  return DUMMY_MEALS;
}

const DUMMY_TESTIMONIALS = [
  {
    id: "t1",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile5.jpeg",
    name: "Jessy James",
    occupation: "Web Developer",
    rating: 5,
  },
  {
    id: "t2",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile2.jpeg",
    name: "Judy Degaldo",
    occupation: "Model",
    rating: 4,
  },
  {
    id: "t3",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile6.jpg",
    name: "Carol Greene",
    occupation: "Doctor",
    rating: 5,
  },
  {
    id: "t4",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile7.jpeg",
    name: "Jane Doe",
    occupation: "Interior Designer",
    rating: 4,
  },
  {
    id: "t5",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile8.webp",
    name: "John Madisson",
    occupation: "Attorney",
    rating: 5,
  },
  {
    id: "t6",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile1.jpeg",
    name: "Junior Brooks",
    occupation: "Salesman",
    rating: 5,
  },
  {
    id: "t7",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile4.jpeg",
    name: "Brandon Lewis",
    occupation: "Performing Artist",
    rating: 4,
  },
  {
    id: "t8",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile9.webp",
    name: "Sandra Rodriguez",
    occupation: "Photographer",
    rating: 5,
  },
  {
    id: "t9",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt temporibus porro autem dicta atque doloremque accusamus consequuntur, quaerat facere architecto distinctio tempora rerum soluta.",
    image: "images/profile3.jpeg",
    name: "Albert Dominguez",
    occupation: "Engineer",
    rating: 4,
  },
];

export function getAlLTestimonials() {
  return DUMMY_TESTIMONIALS;
}
