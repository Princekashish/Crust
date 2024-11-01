import React from "react";
import Hero from "../../components/Hero";
import Tranding from "../../components/Trending";
import Testimonials from "../../components/Testimonials";
import Service from "../../components/Story-service";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Tranding/>
      <Testimonials/>
      <Service/>
    </div>
  );
}
