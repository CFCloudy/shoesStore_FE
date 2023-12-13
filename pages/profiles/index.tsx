import { UserOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

import React, { useState } from "react";
import { NextPageWithLayout } from "../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { Profile } from "@/components/profiles-user/profiles";

const ProfilesPage: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout><Profile /></ProfileLayout>
    </React.Fragment>
  );
};

ProfilesPage.Layout = MainLayout;
export default ProfilesPage;
