import { HeaderLogo } from '@/lib/types/Header/HeaderLogo'
import { Heart, Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MenuItem {
    itemtext: string;
    link: string;
}

const Nav = ({ logo, menuList, scrollMenu }: {
    logo: HeaderLogo,
    menuList: MenuItem[],
    scrollMenu: MenuItem[]
}) => {
    return (
        <div className="sticky top-0 inset-x-0 z-[1001] group">
            <header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base px-16">
                <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
                    <div className="flex items-center justify-start w-1/3">
                        <Link
                            href="/"
                            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                            data-testid="nav-store-link"
                        >
                            <Image src={logo} alt="logo" width={150} height={150} />
                        </Link>

                        <div className="flex items-center pl-10">
                            <ul className="flex items-center gap-5">
                                {menuList.map((item, index) => (
                                    <Link
                                        href={item.link}
                                        className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
                                        data-testid="nav-store-link"
                                        key={index}
                                    >
                                        <li className="text-base text-black">{item.itemtext}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                        {/* Search box */}
                        <div className="rounded-md bg-[#eaeaea] px-4 py-3 flex items-center gap-4 w-72">
                            <div>
                                <Search size={18} color='#52525b'/>
                            </div>
                            <input
                                type="search"
                                placeholder="Search by products"
                                className="w-full outline-none bg-transparent text-sm text-[#9ca3af]"
                                spellCheck={false}
                                data-ms-editor={true}
                            />
                        </div>
                        <span className="text-gray-300 text-xl pl-6">|</span>
                        <div className="flex items-center gap-4">
                            <Link href="/login">
                                <p className='text-black'>Login</p>
                            </Link>
                            <Heart size={19} color='black'/>
                            <ShoppingCart color='black'/>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="sticky top-0 inset-x-0 z-30 group bg-white px-4 py-4 shadow-sm">
                <div className="flex overflow-x-scroll hide-scroll-bar">
                    <div className="flex flex-nowrap gap-10">
                        {scrollMenu.map((item, index) => (
                            <Link
                                href={item.link}
                                key={index}
                                className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase px-6 min-w-fit"
                            >
                                <p className="text-base text-black">{item.itemtext}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Nav
