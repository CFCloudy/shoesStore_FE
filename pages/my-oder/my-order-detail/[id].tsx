import React, { useState } from "react";
import { NextPageWithLayout } from "../../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { MyOrderDetail } from "@/components/profiles-user/myorder-detail";

const MyOrderDetailPages: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout children={<MyOrderDetail />} />
    </React.Fragment>
  );
};

MyOrderDetailPages.Layout = MainLayout;
export default MyOrderDetailPages;
