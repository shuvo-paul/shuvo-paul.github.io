import Image from 'next/image'

const Hero = ({title, content, techs}) => {
    return (
        <section className="hero py-8 mt-8">
            <div className="grid grid-cols-5 gap-x-8">
                <div className="col-span-full md:col-span-3">
                    <div className="max-w-[512px]">
                        <div className="text-white text-opacity-70 font-bold text-6xl mb-6">
                            Hello,
                        </div>
                        <h1 className="mb-4">
                            {title}
                        </h1>
                        <div className="hero__content text-white text-opacity-70 mb-4" dangerouslySetInnerHTML={{__html: content}}  />

                        <div className="text-white text-opacity-70">Here are few techs I love to work with:</div>

                        <ul className="tech-list text-white text-opacity-70 grid grid-cols-2 gap-2 mt-6">
                            {techs.map((item, index)=>(
                                <li key={index} className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">{item}</li>

                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-span-full md:col-span-2">
                    <div className="flex justify-center">
                        <div className="leading-[0] shadow rounded-lg overflow-hidden mt-16">
                            <Image src="./me.jpeg" alt="Shuvo Paul"  width="224" height="224" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;