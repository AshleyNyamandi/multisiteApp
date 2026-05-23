import { Link } from "react-router"

const Footer = () => {
  return (
    <footer
        className="right-0 bg-slate-950 text-stone-300 py-4 px-5"
    >

            <div
                className="max-w-3xl mx-auto"
            >
                <div 
                    className="flex gap-5 items-center justify-between flex-col min-[420px]:flex-row"
                >
                    <p
                        className=" text-justify max-w-sm"
                    >
                        Professional surveying, engineering, and construction services are only offered and performed in the states in which Audubon Companies, LLC or its affiliates are licensed to offer or perform those services. Contact us to obtain detailed licensing information regarding our services.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-green-400 px-4 py-1 text-xs font-normal text-black"
                    >
                        Contact us
                    </Link>
                </div>  
                <div className="border border-stone-500 my-5 max-w-2xs mx-auto" />             
            </div>
            <div className="text-stone-300 max-w-3xl mx-auto grid justify-center min-[320px]:grid-cols-2 sm:grid-cols-4 gap-5">
                {/* Company */}
                <div>
                    <p className="text-sm font-normal text-white mb-2">Company</p>
                    <ul className="ml-1">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Leadership
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Safety
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* News and Insights */}
                <div>
                    <p className="text-sm font-normal text-white mb-2">News + Insights</p>
                    <ul className="ml-2">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                News
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Brochures
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Articles
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Webinars
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Presentations
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Videos
                            </Link>
                        </li>                        
                    </ul>
                </div> 
                {/* Services we offer */}

                <div>
                    <p className="text-sm font-normal text-white">Services We Offer</p>
                    <ul className="ml-1">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Engineering
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Automation + Control
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Field Serives
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Project Management
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Fabrication
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Construction Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Operations + Maintenance
                            </Link>
                        </li>     
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-green-500"
                            >
                                Environmental
                            </Link>
                        </li>                                              
                    </ul>
                </div> 
                {/* Industries we save */}
                <div>
                    <p className="text-sm font-normal text-white">Industries We Serve</p>
                    <ul className="ml-1">
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Energy + Chemicals
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Power + utilities
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Energy Transition
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#"
                                className="hover:text-green-500"
                            >
                                Manufacturing + Infrastructure
                            </Link>
                        </li>
                    </ul>
                </div>                 
            </div>
            <div
                className="text-center"
            >
                <p 
                    className="text-3xl font-bold my-4 bg-linear-to-r w-fit bg-clip-text text-transparent mx-auto from-green-400 to-purple-800 "
                >
                    nymd
                </p>
                <p className="mb-2">Copyright &copy;{new Date().getFullYear()} Nymd Companies</p>
                <p className="text-[0.8em]">All rights reserved</p>
            </div>

    </footer>
  )
}

export default Footer