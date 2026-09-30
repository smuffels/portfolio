import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

function HeartProgress({
  progress,
  heartColor,
}: {
  progress: 1 | 2 | 3 | 4 | 5;
  heartColor?: string;
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) =>
        i <= progress ? (
          <AiFillHeart
            key={i}
            className={`size-4 ${heartColor}
            `}
          />
        ) : (
          <AiOutlineHeart
            key={i}
            className={`size-4 ${heartColor}
            `}
          />
        ),
      )}
    </div>
  );
}

export default HeartProgress;
