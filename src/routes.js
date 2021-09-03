import HomePage from "./pages/HomePage/HomePage";
import Room from "./pages/RoomPage/RoomPage";

export const genericRoutes = [
  { path: "/", exact: true, name: "Home", component: HomePage },
  { path: "/room", exact: true, name: "Room", component: Room },
];
