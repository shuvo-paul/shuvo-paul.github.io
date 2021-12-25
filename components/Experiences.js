import Link from "next/link"
const Experiences = ({list}) => {
    return (
        <section id="experience" className="mt-12">
            <h2 className="text-white text-opacity-90 text-2xl mb-9">{`What I've experienced ...`} </h2>
            {list.map((item, index)=>(
                <div className="mb-8" key={index}>
                    <div className="border-l-primary-500 border-l-2 text-white text-opacity-80 text-xl pl-8">
                        {item.title}
                        <Link href={`//${item.companyLink}`} >
                            <a className="text-primary-500 text-lg" target="_blank"> @{item.company}</a> 
                        </Link> 
                        <span className="text-white text-opacity-70 text-sm"> ({item.year})</span>
                    </div>
                    
                    <div className="mt-2 pl-8 text-white text-opacity-70">
                        {item.content}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experiences