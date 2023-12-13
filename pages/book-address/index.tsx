import React, { useState } from "react";
import { NextPageWithLayout } from "../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { BookAdress } from "@/components/profiles-user/bookAdress";

const ProfilesPage: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout><BookAdress /></ProfileLayout>
    </React.Fragment>
  );
};

ProfilesPage.Layout = MainLayout;
export default ProfilesPage;
