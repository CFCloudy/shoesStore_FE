
import React, { useState } from "react";
import { NextPageWithLayout } from "../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { MyOders } from "@/components/profiles-user/my-oders";

const ProfilesPage: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout children={<MyOders />} />
    </React.Fragment>
  );
};

ProfilesPage.Layout = MainLayout;
export default ProfilesPage;
