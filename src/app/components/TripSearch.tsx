"use client";
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import React from "react";

const TripSearch = () => {
  return (
    <div className="container mx-auto p-5 text-center bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" className="" />
        <div className="flex gap-4 ">
          <DatePicker placeholderText="Data de ida" onChange={() => {}} className="w-full"/>
          <CurrencyInput placeholder="Orçamento" onChange={() => {}} className="w-full"/>
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  );
};

export default TripSearch;
