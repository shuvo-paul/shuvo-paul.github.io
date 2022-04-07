import Link from 'next/link'

const OffCanvas = () => {
    return(
        <div className="off-canvas fixed top-0 right-0 h-full w-64 bg-secondary-600">
            <ul className="px-6 mt-9">
                <li className="py-3">
                    <Link href="#experience">
                        <a className="text-white text-lg text-opacity-70 font-light hover:text-primary-500 transition-colors" >Experiences</a>
                    </Link>
                </li>
                <li className="py-3 border-t border-white border-opacity-25">
                    <Link href="#projects" >
                        <a className="text-white text-lg text-opacity-70 font-light hover:text-primary-500 transition-colors" >Projects</a>
                    </Link>
                </li>
                <li className="py-3 border-t border-white border-opacity-25">
                    <Link href="#contact" >
                        <a className="text-white text-lg text-opacity-70 font-light hover:text-primary-500 transition-colors">Contact</a>
                    </Link>
                </li>
                <li className="py-3 border-t border-white border-opacity-25">
                    <Link href="#about" >
                        <a className="text-white text-lg text-opacity-70 font-light hover:bg-primary-100 transition-all hover:bg-opacity-20 block" >Resume</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default OffCanvas;