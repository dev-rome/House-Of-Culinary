import { IconType } from "react-icons/lib";
import { FC } from "react";

interface CardItems {
  icon: IconType;
  title: string;
  description: string;
}

const ServiceCard: FC<CardItems> = ({ icon: Icon, title, description }) => (
  <div className="p-6 shadow-md rounded-md">
    <div className="flex justify-center mb-4">
      <Icon size={48} />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;