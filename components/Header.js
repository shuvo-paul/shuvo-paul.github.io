import Link from 'next/link'

const Header = () => {
    return(
        <header className="py-8">
            <div className="container">
                <div className="flex flex-wrap flex-row items-center">
                    <div className="flex-shrink">
                        <a href="/" className="text-primary-500 text-2xl font-medium font-display tracking-wide leading-none">{`{{Shuvo Paul}}`}</a>
                    </div>
                    <div className="flex-grow">
                        <ul className="flex flex-wrap flex-row justify-end -mx-4">
                            <li className="mx-4">
                                <a href="#experience" className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors" >Experiences</a>
                            </li>
                            <li className="mx-4">
                                <a href="#work" className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors" >Works</a>
                            </li>
                            <li className="mx-4">
                                <a href="#contact" className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors" >Contact</a>
                            </li>
                            <li className="mx-4">
                                <a href="#about" className="text-primary-500 font-light border border-primary-500 py-2 px-4 rounded-sm hover:bg-primary-100 transition-all hover:bg-opacity-20" >Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;