import React, { useState } from "react";
import { NextPageWithLayout } from "../../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { ChangePassword } from "@/components/profiles-user/change-password";

const ChangePasswordPages: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout children={<ChangePassword />} />
    </React.Fragment>
  );
};

ChangePasswordPages.Layout = MainLayout;
export default ChangePasswordPages;
