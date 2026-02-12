import {
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <div className="md:px-0 px-2 py-4 md:max-w-7xl max-w-full mx-auto text-[0.95rem]">
        <p className="mb-4 font-semibold">Categories for women</p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>Sports jackets</p>
              <p>Skinny jeans</p>
              <p>Slippers</p>
              <p>Leather jackets</p>
              <p>Bathrobes</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>Leather pants</p>
              <p>Chelsea ankle boots</p>
              <p>Wallets Guess</p>
              <p>Mom Jeans</p>
              <p>Sweaters</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>Blathers</p>
              <p>Denim Jackets</p>
              <p>Wallets Guess</p>
              <p>Outdoor Fashion</p>
              <p>Jeans Skirts</p>
              <p>T-shirts</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>White Sneakers</p>
              <p>Lingrie</p>
              <p>Denim Shirts</p>
              <p>Mom Jeans</p>
              <p>Trench Coats</p>
              <p>Shoulder Bags</p>
            </div>
          </div>
        </div>

        <p className="mb-4 font-semibold">Brands for women</p>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>ONLY</p>
              <p>Calvin Klein Underwear</p>
              <p>Hunkemöller</p>
              <p>AMERICAN VINTAGE</p>
              <p>VERO MODA</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>NA KD</p>
              <p>PICECES</p>
              <p>MARCO TOZZI</p>
              <p>MOSS COPENHAGEN</p>
              <p>Mavi</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>TAMARIS</p>
              <p>Cotton On</p>
              <p>Kalvin Clein</p>
              <p>TOMS</p>
              <p>ADDIDAS ORIGINALS</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col space-y-1.5">
              <p>Coccineli</p>
              <p>Pulic Desire</p>
              <p>PUMA</p>
              <p>MORE AND MORE</p>
              <p>Rebook Classics</p>
              <p>Shoulder Bags</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2">
          <div className="">
            <div className="mb-5 md:flex hidden items-center space-x-0.5 py-2 ">
              <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
                Hulu
              </p>
              <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
                Fashion
              </p>
            </div>
            <div className="md:flex hidden md:space-x-2 space-x-3">
              <FaFacebook className="md:w-6 md:h-6 w-6 h-6" />
              <FiInstagram className="md:w-6 md:h-6 w-6 h-6" />
              <FaLinkedin className="md:w-6 md:h-6 w-6 h-6" />
              <FaXTwitter className="md:w-6 md:h-6 w-6 h-6" />
              <FaTelegram className="md:w-6 md:h-6 w-6 h-6" />
              <FaWhatsapp className="md:w-6 md:h-6 w-6 h-6" />
              <FaTiktok className="md:w-6 md:h-6 w-6 h-6" />
            </div>
          </div>
          <div className="">
            <div className="flex flex-col space-y-2">
              <p className="mb-4">Customer care</p>
              <p>Help & Contact</p>
              <p>Creator Collaborations</p>
              <p>Delivery area</p>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col space-y-2">
              <p className="mb-4">Customer care</p>
              <p>Your data is secure with us</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden bg-gray-200 py-4 text-sm md:px-0 px-2">
        <div className=" flex items-center justify-center space-x-1">
          <p className="whitespace-nowrap font-semibold text-sm">About us</p>
          <p className="whitespace-nowrap font-semibold text-sm">Press</p>
          <p className="whitespace-nowrap font-semibold text-sm">Jobs</p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Investor Relations
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Data privacy
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Preference Center (Consent management)
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Terms of service
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Legal information
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Accessibility
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Product Safety
          </p>
        </div>
        <p className="text-center mt-2.5">© 2026 Hulu Fashion</p>
      </div>
      <div className="md:hidden bg-white w-full px-2 pb-6 flex flex-col space-y-1.5 ">
        <div className="mb-5 flex items-center space-x-0.5 py-2 ">
          <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
            Hulu
          </p>
          <p className="text-lg font-semibold font-sans py-1 bg-black px-2 text-white ">
            Fashion
          </p>
        </div>
        <div className="flex space-x-3">
          <FaFacebook className="md:w-6 md:h-6 w-6 h-6" />
          <FiInstagram className="md:w-6 md:h-6 w-6 h-6" />
          <FaLinkedin className="md:w-6 md:h-6 w-6 h-6" />
          <FaXTwitter className="md:w-6 md:h-6 w-6 h-6" />
          <FaTelegram className="md:w-6 md:h-6 w-6 h-6" />
          <FaWhatsapp className="md:w-6 md:h-6 w-6 h-6" />
          <FaTiktok className="md:w-6 md:h-6 w-6 h-6" />
        </div>
      </div>
      <div className="md:hidden block bg-gray-200 py-4 md:px-0 px-2">
        <div className="flex items-center justify-center space-x-5">
          <p className="whitespace-nowrap font-semibold text-sm">About us</p>
          <p className="whitespace-nowrap font-semibold text-sm">Press</p>
          <p className="whitespace-nowrap font-semibold text-sm">Jobs</p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Investor Relations
          </p>
        </div>
        <div className="mt-3 flex flex-col space-y-2 items-center py-2">
          <p className="whitespace-nowrap font-semibold text-sm">
            Data privacy
          </p>
          <p className="whitespace-nowrap font-semibold text-sm">
            Preference Center (Consent management)
          </p>
          <div className="flex space-x-2">
            <p className="whitespace-nowrap font-semibold text-sm">
              Terms of service
            </p>
            <p className="whitespace-nowrap font-semibold text-sm">
              Legal information
            </p>
          </div>
          <div className="flex space-x-2">
            <p className="whitespace-nowrap font-semibold text-sm">
              Accessibility
            </p>
            <p className="whitespace-nowrap font-semibold text-sm">
              Product Safety
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
