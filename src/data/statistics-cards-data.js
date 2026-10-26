import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "درآمد روزانه",
    value: " 29،522،000 تومان  ",
    footer: {
      color: "text-green-500",
      value: "%55+ ",
      label: "نسبت به هفته گذشته",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "کاربران اضافه شده",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "نسبت به ماه گذشته",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "کاربران جدید",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "نسبت به روز گذشته",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "فروش",
    value: " 8،517،000 تومان  ",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "نسبت به روز گذشته",
    },
  },
];

export default statisticsCardsData;
