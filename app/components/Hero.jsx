import Image from "next/image";

const Hero = () => {
    return (
        <div className="grid grid-cols-[50%_50%]">
            <div className="bg-[#004D6D] text-white px-40 py-20 flex flex-col gap-8">
                <p className="font-medium text-3xl capitalize">
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <p className="text-2xl capitalize">
                    Lorem ipsum dolor sit amet consectetur. Viverr scelerisqu.
                </p>
            </div>
            <div className="w-full h-full relative">
                <Image src="/hero.png" alt="Hero Image" layout="fill" />
            </div>
        </div>
    );
};

export default Hero;
