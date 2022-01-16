import Image from "next/image"

const Projects = ({list}) => {
    return(
        <div className="pt-8 mt-32" id="projects">
            <h2 className="mb-9">Some things I've built ...</h2>

            {list.map((item, i) =>(
                <div key={i} className="grid grid-cols-12 gap-x-8 items-center mb-20">
                    <div className={`row-span-full ${(i+1)%2? 'col-start-1 col-span-7' : 'col-span-7 col-end-13' }`}>
                        <img src="http://placehold.jp/580x364.png" alt="" />
                    </div>

                    <div className={`row-span-full ${(i+1)%2? 'col-span-7 col-end-13 text-right' : 'col-start-1 col-span-7' }`}>
                        {item.title &&
                            <h3 className="text-primary-500 text-xl mb-4 mx-3">{item.title}</h3>
                        }

                        {item.content && 
                            <div className="bg-secondary-600 shadow text-white text-opacity-70 p-6 rounded">
                                {item.content}
                            </div>
                        }

                        <ul className={`flex list-none text-white text-opacity-70 mt-2 font-light ${(i+1)%2? 'justify-end' : '' }`}>
                            {item.techs.map((tech, i)=>(
                                <li key={i} className="mx-3">{tech}</li>
                            ))}
                        </ul>
                        <Image src="/icons/github.svg" width={20} height={20}/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Projects