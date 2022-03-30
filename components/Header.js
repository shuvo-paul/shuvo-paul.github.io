import Link from 'next/link'

const Header = () => {
    return(
        <header className="py-8">
            <div className="container">
                <div className="flex flex-wrap flex-row items-center">
                    <div className="flex-shrink">
                        <Link href="/"><a className="text-primary-500 text-2xl font-medium font-display tracking-wide leading-none">{`{{Shuvo Paul}}`}</a></Link>
                    </div>
                    <div className="flex-grow">
                        <ul className="hidden flex-wrap flex-row justify-end -mx-4 md:flex">
                            <li className="mx-4">
                                <Link href="#experience"><a className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors" >Experiences</a></Link>
                            </li>
                            <li className="mx-4">
                                <Link href="#projects" ><a className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors" >Projects</a></Link>
                            </li>
                            <li className="mx-4">
                                <Link href="#contact" ><a className="text-white text-opacity-70 font-light hover:text-primary-500 transition-colors">Contact</a></Link>
                            </li>
                            <li className="mx-4">
                                <Link href="#about" ><a className="text-primary-500 font-light border border-primary-500 py-2 px-4 rounded-sm hover:bg-primary-100 transition-all hover:bg-opacity-20" >Resume</a></Link>
                            </li>
                        </ul>
                        
                        <div className="flex items-center justify-end md:hidden">
                            <label className='leading-[0]' htmlFor="mobile-nav-checkbox">
                                <div className="hamburger hamburger--emphatic">
                                    <div className="hamburger-box">
                                    <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;