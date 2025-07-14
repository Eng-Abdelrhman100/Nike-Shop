import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  shoe9,
  shoe10,
  shoe11,
  shoe12,
  shoe13,
  shoe14,
  shoe15,
  shoe16,
  shoe17,
  shoe18,
  shoe19,
  shoe20,
  shoe21,
  shoe22,
  shoe23,
  shoe24,
  shoe25,
  shoe26,
  shoe27,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/cart", label: "Cart" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: "Nike Air Jordan 01",
    price: "$200.20",
    rating: 4.4,
  },
  {
    id: 2,
    imgURL: shoe5,
    name: "Nike Air Jordan 10",
    price: "$210.20",
    rating: 4.5,
  },
  {
    id: 3,
    imgURL: shoe6,
    name: "Nike Air Jordan 100",
    price: "$220.20",
    rating: 4.3,
  },
  {
    id: 4,
    imgURL: shoe7,
    name: "Nike Air Jordan 200",
    price: "$230.20",
    rating: 4.7,
  },
  {
    id: 5,
    imgURL: shoe8,
    name: "Nike Air Max",
    price: "$199.99",
    rating: 4.2,
  },
  {
    id: 6,
    imgURL: shoe9,
    name: "Nike Air Max 200",
    price: "$120.00",
    rating: 4.5,
  },
  {
    id: 7,
    imgURL: shoe10,
    name: "Nike Air Force 107",
    price: "$110.00",
    rating: 4.6,
  },
  {
    id: 8,
    imgURL: shoe11,
    name: "Nike Air Max 97",
    price: "$170.00",
    rating: 4.8,
  },
  {
    id: 9,
    imgURL: shoe12,
    name: "Nike Blazer Mid 77",
    price: "$105.00",
    rating: 4.3,
  },
  {
    id: 10,
    imgURL: shoe13,
    name: "Nike Air Huarache",
    price: "$125.00",
    rating: 4.4,
  },
  {
    id: 11,
    imgURL: shoe14,
    name: "Nike Air Zoom Pegasus 40",
    price: "$130.00",
    rating: 4.1,
  },
  {
    id: 12,
    imgURL: shoe15,
    name: "Nike Vapormax 2023",
    price: "$210.00",
    rating: 4.6,
  },
  {
    id: 13,
    imgURL: shoe16,
    name: "Nike Air Max 90",
    price: "$130.00",
    rating: 4.2,
  },
  {
    id: 14,
    imgURL: shoe17,
    name: "Nike Metcon 9",
    price: "$140.00",
    rating: 4.7,
  },
  {
    id: 15,
    imgURL: shoe18,
    name: "Nike Air Jordan 1 Mid SE",
    price: "$150.00",
    rating: 4.4,
  },
  {
    id: 16,
    imgURL: shoe19,
    name: "Nike Court Vision Low",
    price: "$85.00",
    rating: 4.3,
  },
  {
    id: 17,
    imgURL: shoe20,
    name: "Nike Free RN 5.0",
    price: "$100.00",
    rating: 4.5,
  },
  {
    id: 18,
    imgURL: shoe21,
    name: "Nike ZoomX Invincible Run",
    price: "$180.00",
    rating: 4.9,
  },
  {
    id: 19,
    imgURL: shoe22,
    name: "Nike Revolution 6",
    price: "$75.00",
    rating: 4.1,
  },
  {
    id: 20,
    imgURL: shoe23,
    name: "Nike Waffle One",
    price: "$100.00",
    rating: 4.2,
  },
  {
    id: 21,
    imgURL: shoe24,
    name: "Nike Go FlyEase",
    price: "$120.00",
    rating: 4.6,
  },
  {
    id: 22,
    imgURL: shoe25,
    name: "Nike React Infinity Run Flyknit",
    price: "$160.00",
    rating: 4.5,
  },
  {
    id: 23,
    imgURL: shoe26,
    name: "Nike Downshifter 12",
    price: "$70.00",
    rating: 4.2,
  },
  {
    id: 24,
    imgURL: shoe27,
    name: "Nike Air Zoom Alphafly NEXT%",
    price: "$275.00",
    rating: 4.9,
  },
];


export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/products" },
      { name: "Air Max 1", link: "/products" },
      { name: "Air Jordan 1", link: "/products" },
      { name: "Air Force 2", link: "/products" },
      { name: "Nike Waffle Racer", link: "/products" },
      { name: "Nike Cortez", link: "/products" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
