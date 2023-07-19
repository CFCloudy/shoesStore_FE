import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const formatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
});
export const RegexValidation = {
  REGEXPHONENUMBER: /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
  REGEXEMAIL: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
  REGEXPASSWORD:
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*?[#?!@$%^&*-])[A-Za-zd@$!+-=#%*()^?&]{6,}$",
  REGEXOTP: /^[0-9][0-9]\?[0-9]\?[0-9]\?[0-9]\?[0-9]\?$/,
  DOMAIN: /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/,
  REGEXWHITESPACE: /\s/,
};
