import React from "react";
import "./MovieModal.css";

export default function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal">
          <span onClick={() => setModalOpen(false)} className="modal-close">
            X
          </span>
          <img
            className="modal_poster-img"
            src={`https://image.tmbd.org/t/p/original/${backdrop_path}`}
            alt="modal_poster-img"
          />
          <div className="modal_content">
            <p className="modal_details">
              <span className="modal_user_perc">100% for you</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
