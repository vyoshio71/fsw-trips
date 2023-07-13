'use client';

import { signIn } from "next-auth/react";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div className="">
      <TripSearch />
    </div>
  );
}
