import Button from "@/components/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="p-5 lg:p-0 lg:mt-12 lg:pb-20">
      <h2 className="font-semibold text-primaryDarker mb-5 lg:text-xl">
        Localização
      </h2>
      <div className="relative w-full h-[280px] lg:hidden">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="relative w-full h-[480px] hidden lg:block">
        <Image
          src="/map-desktop.png"
          alt={location}
          fill
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-primaryDarker text-sm font-semibold mt-3 lg:text-base lg:mt-5">
        {location}
        <p className="text-xs text-primaryDarker mt-2 leading-5 lg:text-sm lg:mt-4">
          {locationDescription}
        </p>
      </h3>
      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  );
};

export default TripLocation;
