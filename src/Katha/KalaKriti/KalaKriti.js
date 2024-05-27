import React from 'react'
import "../KalaKriti/Kala.css"

const KalaKriti = () => {
  return (
    <div className="loader">
      <div class="spinnerContainer">
        <div class="spinner"></div>
        <div class="loader">
          <p>loading</p>
          <div class="words">
            <span class="word">posts</span>
            <span class="word">images</span>
            <span class="word">followers</span>
            <span class="word">hashtags</span>
            <span class="word">posts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KalaKriti