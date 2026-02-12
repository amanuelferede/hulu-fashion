import Shopping from "./shopping";
export default function TryShopping() {
  return (
    <div className="grid grid-cols-4 gap-5 py-10">
      {Array.from({ length: 20 }, (el, index) => {
        return <Shopping key={index} />;
      })}
    </div>
  );
}
