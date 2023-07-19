import React, { useState } from "react";
import { NextPageWithLayout } from "../../../models/common";
import { MainLayout } from "@/components/layout/main-layout/main-layout";
import ProfileLayout from "@/components/profiles-user/profiles-layout";
import { AddNewAddress } from "@/components/profiles-user/add-address";

const AddressDetailsPages: NextPageWithLayout = () => {
  const n: number = 0;

  return (
    <React.Fragment>
      <ProfileLayout children={<AddNewAddress />} />
    </React.Fragment>
  );
};

AddressDetailsPages.Layout = MainLayout;
export default AddressDetailsPages;
