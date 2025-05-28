export interface MenuItem {
  label: string;
  path: string;
  isExternal?: boolean;
}

export const mainNavigation: MenuItem[] = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "menu",
    path: "/menu"
  },
  {
    label: "about",
    path: "/about",
  },
  {
    label: "contact",
    path: "/contact",
  },
]; 