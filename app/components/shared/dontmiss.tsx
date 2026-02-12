export default function DontMissIt() {
  return (
    <div className="md:px-0 px-6 max-w-3xl mx-auto py-2">
      <div className="flex flex-col space-y-4 items-center">
        <p className="font-semibold text-center">Dont miss a thing</p>
        <p className="text-center text-[0.975rem]">
          Sign up for the newsletter and receive exclusive offers
        </p>
        <div className="flex space-x-3 justify-between">
          <div className="flex space-x-2 text-[0.975rem]">
            <p>Male</p>
            <input type="radio" name="Male" />
          </div>
          <div className="flex space-x-2">
            <p>Female</p>
            <input type="radio" name="Female" />
          </div>
        </div>
        <input
          className="md:py-3 py-2 px-2 w-full bg-gray-100 focus:outline-none border-2 border-gray-200"
          placeholder="Your email address"
        />
        <button className="md:py-3 py-2 rounded-md inline-block md:w-35 w-full bg-black text-white">
          Sign Up
        </button>
        <p className="text-center text-[0.95rem]">
          I would like to receive newsletters from ABOUT YOU about current
          trends, offers and vouchers in accordance with the Privacy Policy. You
          can withdraw your consent at any time with effect for the future by
          sending a message to customerservice@aboutyou.com or using the
          unsubscribe option at the end of each newsletter.
        </p>
      </div>
    </div>
  );
}
