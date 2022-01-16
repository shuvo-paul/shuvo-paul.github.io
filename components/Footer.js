import { ReactSVG } from 'react-svg'

const Footer = () => {

    return(
        <footer className="text-center pt-10 pb-4 md:pb-6">
            <div className="container">
                <div className="text-white text-opacity-70 max-w-xl mx-auto">
                    <h2 className="mb-3">Get In Touch</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo voluptate amet consequuntur quasi aut. Necessitatibus iure amet, nostrum molestiae suscipit vel. Inventore soluta nisi esse repellat aliquam? Pariatur, libero ipsa.</p>
                    <a className="mt-9 inline-block mx-auto border border-primary-500 text-primary-500 hover:text-primary-300 py-3 px-5 rounded" href="mailto:shuvopaul@yahoo.com">
                        Say Hello
                    </a>
                </div>
                
                <ul className="social list-none mt-24 mb-6 md:fixed left-0 top-1/2 md:-translate-y-full flex justify-center md:flex-col md:after:content-[''] md:after:w-[28px] md:after:h-[100px] md:after:border-t md:after:border-r md:after:border-white md:after:border-opacity-60 md:after:absolute md:after:bottom-full md:after:left-0">
                    <li className='mx-4 md:my-4'>
                        <a href="#">
                            <ReactSVG src="/icons/github.svg" className="icon" wrapper="span" />
                        </a>
                    </li>
                    <li className='mx-4 md:my-4'>
                        <a href="#">
                            <ReactSVG src="/icons/linkedin.svg" className="icon" wrapper="span" />
                        </a>
                    </li>
                    <li className='mx-4 md:my-4'>
                        <a href="#">
                            <ReactSVG src="/icons/twitter.svg" className="icon" wrapper="span" />
                        </a>
                    </li>
                    <li className='mx-4 md:my-4'>
                        <a href="#">
                            <ReactSVG src="/icons/facebook.svg" className="icon" wrapper="span" />
                        </a>
                    </li>
                </ul>

                <div className="text-center email-address md:fixed md:-right-12 md:rotate-90 md:bottom-[30%]">
                    <div className="absolute w-[calc(100%+2rem)] h-[20px] border-t border-r border-l border-white border-opacity-70 bottom-[12px] left-1/2 -translate-x-1/2 after:content-[''] after:h-[50px] after:w-[1px] after:bg-white after:bg-opacity-70 after:absolute after:-translate-y-full hidden md:block"></div>
                    <a className='text-white text-opacity-70 hover:text-primary-500 font-light' href="mailto:shuvopaul@yahoo.com">shuvopaul@yahoo.com</a>
                </div>

                <div className="text-center text-white text-xs text-opacity-50 mt-28 md:mt-52">
                    Design Inspiration: <a className='text-white text-opacity-70 hover:text-primary-500' href="https://brittanychiang.com/">Brittany Chiang</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer