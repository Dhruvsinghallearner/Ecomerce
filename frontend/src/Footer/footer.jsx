import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div className="h-[40vh]  grid place-items-center " style={{ backgroundColor: "var(--sky_blue)" }}>
        <div className="flex w-[70vw] justify-around items-start">
          <div>
          <div className=" flex flex-col space-y-4 p-4 ">
            <div className="font-bold">
              <h1 className="text-3xl">Hekto</h1>
          </div>
          
            <div className="flex gap-1">
              <input className="border-2 text-gray-400 border-white bg-white rounded-b-sm rounded-t-sm" type="text" placeholder="Enter Email Address" />
              <button className=" text-white border-2 border-[#FB2E86] bg-[#FB2E86] rounded-b-sm rounded-t-sm ">Sign Up</button>
            </div>
          </div>
           <div className="mt-2 ml-4">
             <p className="text-gray-600">contact info</p>
            <p className="text-gray-600">17 Princess Road, London,Greater London NW1 8JR, UK</p>
           </div>
          </div>


          <div className="">
            <div className="mt-4">
              <h1 className=" font-bold text-2xl">Catagories</h1>
            </div>
            <div className="flex flex-col  mt-2">
              <Link className="">
              <span>Laptop & Computers</span>
            </Link>
            <br/>
            <Link>
              <span>Camera & Photography</span>
            </Link>
             <br/>
            <Link>
              <span>Smart Phones & Tablets</span>
            </Link>
             <br/>
            <Link>
              <span>Video Games & Consoles</span>
            </Link>
             <br/>
            <Link>
              <span>Waterproof Headphones</span>
            </Link>
            </div>
          </div>


          <div>
            <div className="mt-4">
               <h2 className=" font-bold text-2xl">Customer Care</h2>
            </div>
            
           <div  className="flex flex-col  mt-2">
             <Link>
              <span>My Account</span>
            </Link>
             <br/>
            <Link>
              <span>Discount</span>
            </Link>
             <br/>
            <Link>
              <span>Returns</span>
            </Link>
             <br/>
            <Link>
              <span>Order History</span>
            </Link>
             <br/>
            <Link>
              <span>Order Tracking</span>
            </Link>
           </div>
          </div>


          <div>
             <div className="mt-4">
               <h2 className=" font-bold text-2xl">Pages</h2>
            </div>
            
           <div  className="flex flex-col  mt-2">
             <Link>
              <span>Blog</span>
            </Link>
            <br/>
            <Link>
              <span>Browse the shop</span>
            </Link>
            <br/>
            <Link>
              <span>Category</span>
            </Link>
            <br/>
            <Link>
              <span>Pre-Build Pages</span>
            </Link>
            <br/>
            <Link>
              <span>Visual Composer Elements</span>
            </Link>
            <br/>
            <Link>
              <span>WooCommerce Pages</span>
            </Link>
           </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;