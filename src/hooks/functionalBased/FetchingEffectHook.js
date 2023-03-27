import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingEffectHook() {
  const [photo, setPhotos] = useState([]);
  const [id, setId] = useState(1);
  const [buttonClickId, setButtonClickId] = useState(1);

  const url = "https://jsonplaceholder.typicode.com/photos/" + buttonClickId;

  const fetchPhoto = async () => {
    try {
      const response = await axios.get(url);
      setPhotos(response.data);
    } catch (err) {
      console.log("error while fetching photos", err);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, [buttonClickId]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{ width: 200, margin: "10px 5px" }}
          type="number"
          min={1}
          max={10}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={() => setButtonClickId(id)}>Fetch Photo {id}</button>
      </div>
      <div
        style={{
          backgroundColor: "wheat",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* {photos.map((photo) => {
        return ( */}
        <div
          key={photo.id}
          style={{ width: 150, height: 250, margin: "5px auto" }}
        >
          <img src={photo.url} alt={photo.albumId} width="100%" />
          <h4 style={{ margin: 0 }}>{photo.title}</h4>
        </div>
        {/* );
      })} */}
      </div>
    </>
  );
}

export default FetchingEffectHook;
