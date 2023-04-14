import { FaUtensils, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    icon: FaUtensils,
    title: "Menu Optimization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel mi et dolor cursus elementum.",
  },
  {
    icon: FaMoneyBillWave,
    title: "Cost Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel mi et dolor cursus elementum.",
  },
  {
    icon: FaChartLine,
    title: "Profit Maximization",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel mi et dolor cursus elementum.",
  },
];

function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
