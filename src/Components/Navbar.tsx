import { cart, logo, navLinks, search } from '../constants'

const Navbar = () => {
  return (
    <header className=''>
        <div className='w-full h-full flex items-center justify-between mx-10 my-4'>
        <img src={logo} alt="apple logo" />

        <ul className='justify-center gap-6 hidden sm:flex'>
            {navLinks.map((items,index) => (
                <li key={index} >
                    <a href={items.label}>{items.label}</a>
                </li>
            ))}
        </ul>

        <div className='flex gap-3'>
            <button>
                <img src={search} alt="search" />
            </button>
            <button>
                <img src={cart} alt="cart" />
            </button>
        </div>
    </div>
    </header>
    
  )
}

export default Navbar