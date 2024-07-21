import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

// Array of classes with descriptions and images
const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you build strength and muscle. Whether you are a beginner or an experienced lifter, our classes offer something for everyone.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Join our yoga classes to improve flexibility, balance, and mental clarity. Our sessions cater to all levels, from beginners to advanced practitioners.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Focus on your core strength with our ab core classes. These sessions are tailored to target your abdominal muscles, ensuring a strong and stable core.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Experience the thrill of adventure with our unique adventure classes. These sessions combine fitness with fun activities, perfect for those looking for an exciting workout.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our fitness classes offer a comprehensive workout that includes cardio, strength training, and flexibility exercises. Suitable for all fitness levels.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Get professional guidance in our training classes. These sessions are designed to help you achieve your specific fitness goals with personalized coaching.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Explore our diverse range of classes that cater to all fitness
              levels and interests. Whether you're looking to build strength,
              improve flexibility, or enjoy an adventurous workout, we have
              something for you.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
