import { Metadata } from "next";

export const metadata : Metadata = {
    title :{
        template : "%s | Next Movies" ,
        default : "Loading...",
    },
    description : "The best movies on the best framework",
  };

export default function SalesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div>{children} $$$$$$$$$$$$$$</div>;
  }
  