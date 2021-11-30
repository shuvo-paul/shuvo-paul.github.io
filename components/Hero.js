import Image from 'next/image'

const Hero = () => {
    return (
        <section className="hero py-8">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="flex-1 px-4">
                            <div className="max-w-[512px]">
                                <div className="text-white text-opacity-70 font-bold text-6xl mb-6">
                                    Hello,
                                </div>
                                <h1 className="hero__title text-opacity-90 text-white text-4xl mb-4">
                                    I am a self motivated web developer :)
                                </h1>
                                <p className="text-white text-opacity-70 mb-4">
                                    It&aposs fun to me to create things for the web. I always love to play with team. So that in the very beging of my dev carrier I founded a team called &quotLazyCoders&quot. The main thought behind the name was we don&apost like <strong className="text-white/80">redundency</strong>.
                                </p>
                                <p className="text-white text-opacity-70">Here are few techs I love to work with:</p>
                                <ul className="tech-list text-white text-opacity-70 grid grid-cols-2 gap-2 mt-6">
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">ReactJs</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">NextJs</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">ExpressJS</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">SilverStripe</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">Wordpress</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">MongoDB</li>
                                    <li className="before:content-['➪'] before:text-primary-500 before:mr-2 font-light">MySQL</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-shrink px-4">
                            <div className="w-[224px] rounded-lg overflow-hidden mt-16 mr-6">
                                <Image src="./me.jpeg" alt="Shuvo Paul"  width="224" height="224" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;