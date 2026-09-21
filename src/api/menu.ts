//----after-backend -for Full Stack---
import api from "../lib/axios";
import type { Coffee } from "../types/menu";

export const getMenu = async (): Promise<Coffee[]> => {
  const response = await api.get("/menu");
  return response.data;
};

// ---Before Backend integration----

// import api from "../lib/axios";
// import type { Coffee } from "../types/menu";

// const mockMenu: Coffee[] = [
//   {
//     id: 1,
//     name: "Ethiopian Yirgacheffe",
//     origin: "Ethiopia",
//     notes: "Floral, bergamot, honey",
//     price: 18.5,
//     emoji: "☕",
//     badge: "Best Seller",
//   },
//   {
//     id: 2,
//     name: "Colombian Supremo",
//     origin: "Colombia",
//     notes: "Caramel, nutty, balanced",
//     price: 16.0,
//     emoji: "☕",
//   },
//   {
//     id: 3,
//     name: "Guatemala Antigua",
//     origin: "Guatemala",
//     notes: "Chocolate, spice, smooth",
//     price: 17.5,
//     emoji: "☕",
//     badge: "New",
//   },
//   {
//     id: 4,
//     name: "Kenya AA",
//     origin: "Kenya",
//     notes: "Blackcurrant, bright acidity",
//     price: 19.0,
//     emoji: "☕",
//   },
//   {
//     id: 5,
//     name: "Brazil Santos",
//     origin: "Brazil",
//     notes: "Nutty, low acidity, creamy",
//     price: 14.5,
//     emoji: "☕",
//   },
//   {
//     id: 6,
//     name: "Sumatra Mandheling",
//     origin: "Indonesia",
//     notes: "Earthy, herbal, full body",
//     price: 17.0,
//     emoji: "☕",
//   },
// ];

// export const getMenu = async (): Promise<Coffee[]> => {
//   try {
//     const response = await api.get("/menu");
//     // Only return the data if it is a real array
//     if (Array.isArray(response.data)) {
//       return response.data;
//     }

//     // If the API returned something else, fall back to mock
//     console.warn("API returned invalid data, using mock data");
//     return mockMenu;
//   } catch (error) {
//     console.warn("API is not available, using mock data");
//     return mockMenu;
//   }
// };
