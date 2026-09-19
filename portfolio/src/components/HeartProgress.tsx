import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function HeartProgress({ progress }: { progress: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= progress ? (
          <AiFillHeart key={i} className="size-4 text-highlight" />
        ) : (
          <AiOutlineHeart key={i} className="size-4 text-highlight" />
        ),
      )}
    </div>
  );
}

export default HeartProgress;
