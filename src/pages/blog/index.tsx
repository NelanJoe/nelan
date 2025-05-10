import { motion } from "motion/react";
import DefaultLayout from "@/layouts/default";

export default function Blog() {
  return (
    <DefaultLayout title="Blog">
      <motion.section
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <div>Soon</div>
      </motion.section>
    </DefaultLayout>
  );
}
