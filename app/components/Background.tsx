import Image from 'next/image';

export default function Background({ children }: any) {
    return (
        <div className="absolute inset-0 bg-[url(/initial/building.png)] bg-center bg-cover z-10">
            {/* Background TCU logo (only visible on large screens) */}
            <Image 
                src="/initial/tcu_gray.png" 
                alt="background tcu logo"
                width={600}
                height={600}
                className="absolute top-2 left-0 w-[600px] h-[600px] z-0 invisible lg:visible" 
            />

            {/* SSC and TCU logos at top-right */}
            <div className="flex items-center absolute top-0 right-0">
                <Image
                    src="/initial/ssc.png"
                    alt="SSC logo"
                    width={140}
                    height={90}
                    className="w-[90px] h-auto md:w-[140px] rounded-full"
                />
                <Image
                    src="/initial/tcu.png"
                    alt="TCU logo"
                    width={140}
                    height={90}
                    className="w-[90px] h-auto md:w-[140px] rounded-full"
                />
            </div>

            {/* Children content goes here */}
            {children}
        </div>
    );
}
