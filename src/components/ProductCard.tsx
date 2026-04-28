import GetStartedButton from "./GetStartedButton";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ProductCard({ title, description, image }: Props) {
  return (
    <div
      className="snap-center h-95 min-w-xl rounded-2xl p-8 flex items-center justify-between bg-cover bg-center bg-black/40 bg-blend-darken"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative size-full text-white">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm mt-2 text-white/65">{description}</p>
        <div className="absolute bottom-0 right-0">
          <GetStartedButton />
        </div>
      </div>
    </div>
  );
}
