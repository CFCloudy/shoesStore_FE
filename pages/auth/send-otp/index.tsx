import { SendOTP } from "@/components/authentication/send-otp/send-otp";
import { MainLayout } from "@/components/layout/main-layout/main-layout";

const SendOtPages = () => {
  return <SendOTP />;
};

SendOtPages.Layout = MainLayout;
export default SendOtPages;
