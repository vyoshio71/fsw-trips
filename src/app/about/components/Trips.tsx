import { prisma } from "@/app/lib/prisma";
import { useEffect, useState } from "react";

const getTrips = async () => {
  const trips = await prisma.trip.findMany({});
  return trips;
};

const Trips = async () => {
  return <div>get</div>;
};
export default Trips;
