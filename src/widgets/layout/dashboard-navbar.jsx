
import { useLocation, Link } from "react-router-dom";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "@/context";

export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize flex justify-center m-auto lg:justify-start lg:m-0 items-center gap-6">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all flex justify-center m-auto items-center${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>

        <div className="flex items-center" dir="rtl">
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>

          <div className="mr-auto md:mr-4 md:w-56 text-right" dir="rtl">
            <Input label="جست و جو" />
          </div>

          <Link to="/auth/sign-in">
            <Button
              variant="text"
              color="blue-gray"
              className="hidden items-center gap-1 px-4 xl:flex normal-case shabnam"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500 " />
              ورود
            </Button>

            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
            >
              <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
            </IconButton>
          </Link>

          {/* Notifications */}
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>

            <MenuList
              className="w-max max-w-[calc(100vw-2rem)] border-0"
              dir="rtl"
            >
              <MenuItem className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <BellIcon className="h-4 w-4 text-white" />
                </div>

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam mb-1 font-normal"
                  >
                    <strong>پیام جدید</strong> از Laur
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" />
                    ۱۳ دقیقه پیش
                  </Typography>
                </div>
              </MenuItem>

              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <BellIcon className="h-4 w-4 text-white" />
                </div>

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam mb-1 font-normal"
                  >
                    <strong>آلبوم جدید</strong> از Travis Scott
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" />
                    یک روز پیش
                  </Typography>
                </div>
              </MenuItem>

              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>

                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam mb-1 font-normal"
                  >
                    پرداخت با موفقیت انجام شد
                  </Typography>

                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="shabnam flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" />
                    دو روز پیش
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
