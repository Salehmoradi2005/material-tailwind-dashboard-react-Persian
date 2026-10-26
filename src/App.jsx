
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Dashboard, Auth } from "@/layouts";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenDemoNotice = localStorage.getItem("demo-notice-seen");

    if (!hasSeenDemoNotice) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("demo-notice-seen", "true");
    setOpen(false);
  };

  return (
    <>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route
          path="*"
          element={<Navigate to="/dashboard/home" replace />}
        />
      </Routes>

      <Dialog
        open={open}
        handler={handleClose}
        dir="rtl"
        className="rounded-2xl"
      >
        <DialogHeader className="shabnam justify-center text-center">
          اطلاعیه
        </DialogHeader>

        <DialogBody className="shabnam text-center text-base leading-8 text-blue-gray-600">
          این وب‌سایت صرفاً به‌عنوان یک پروژه‌ی نمایشی و برای اهداف
          نمونه‌کار (Portfolio) طراحی و توسعه داده شده است.

          <br />

          ممکن است برخی از اطلاعات، داده‌ها یا قابلیت‌های آن واقعی نباشند
          و صرفاً جنبه‌ی آزمایشی داشته باشند.
        </DialogBody>

        <DialogFooter className="justify-center">
          <Button
            onClick={handleClose}
            className="shabnam rounded-xl px-8"
          >
            متوجه شدم
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default App;
