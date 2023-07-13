'use client';

import { signIn } from "next-auth/react";
import TripSearch from "./components/TripSearch";
import QuickSearch from "./components/QuickSearch";

export default function Home() {
  return (
    <div className="">
      <TripSearch />
      <QuickSearch />
    </div>
  );
}
