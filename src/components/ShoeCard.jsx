import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg, index }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImg(imgURL.bigShoe);
        }
    };

    return (
        <motion.div
            className={`border-2 rounded-xl ${
                bigShoeImg === imgURL.bigShoe
                    ? "border-coral-red"
                    : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
            variants={fadeIn("up", "spring", index * 0.4 + 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true , amount: 0.25}}
            
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="shoe collection"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
};

export default ShoeCard;
