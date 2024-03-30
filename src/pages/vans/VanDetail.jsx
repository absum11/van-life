import React from "react";
import { useParams } from "react-router-dom";

function VanDetail() {
  const [vanData, setVanData] = React.useState(null);

  /* useParams fetches the params
     from path and returns object with
      key-value pairs of paramaeters*/
  const params = useParams();
  const id = params.id;

  // refetch data on change of id
  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans))
  }, [id]);

 return (
        <div className="van-detail-container">
            {vanData ? (
                <div className="van-detail">
                    <img src={vanData.imageUrl} />
                    <i className={`van-type ${vanData.type} selected`}>{vanData.type}</i>
                    <h2>{vanData.name}</h2>
                    <p className="van-price"><span>${vanData.price}</span>/day</p>
                    <p>{vanData.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )

}

export default VanDetail;
