import React from "react";

const Rating = ({ rating }) => {
  const [width, setwidth] = useState(50);
  useEffect(() => {
    setwidth(
      document.getElementsByClassName("fill-ratings")[0].firstChild.clientWidth
    );
  }, []);
  return (
    <div className="Rating">
      <div className="star-ratings" style={{ width: width }}>
        <div className="fill-ratings" style={{ width: "93%" }}>
          <span>★★★★★</span>
        </div>
        <div className="empty-ratings">
          <span>★★★★★</span>
        </div>
      </div>
    </div>
  );
};

export default Rating;
