"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Prisma } from "@prisma/client";

const MyTrips = () => {
  const [reservations, setReservations] = useState<
    Prisma.TripReservationGetPayload<{
      include: { trip: true };
    }>[]
  >([]);
  const { status, data } = useSession();

  const router = useRouter();

  const fetchReservations = async () => {
    const response = await fetch(
      `http://localhost:3000/api/user/${(data?.user as any).id}/reservations`
    );
    const json = await response.json();

    setReservations(json);
  };

  useEffect(() => {
    if (status === "unauthenticated" || !data?.user) {
      return router.push("/");
    }

    fetchReservations();
  }, [status]);

  console.log({ reservations });

  return <div>page</div>;
};

export default MyTrips;
