import React, {useState} from 'react';

function Card() {

  const [names, setNames] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const trimmedValue = inputValue.trim();
      if (trimmedValue != "") {
        setNames([...names, trimmedValue]);
        setInputValue("");
      }
    }
  }

  function handleRemoveName(indexToRemove) {
    setNames(names.filter((_, index) => index !== indexToRemove));
  }
  
    return (
      <div className="container">

        <div className="card">
          <p className="card-title">Film Generator</p>
          <p className="instruction-text">Enter your Letterboxd username to generate a random film from your watchlist. Hit enter in between multiple usernames.</p>
          <input className="username-input-field"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="e.g brielles, archiecul"
          />
          <div className="username-tags-container">
            {names.map((name, index) => (
              <span key={index} className="tag">
                {name}
                <button className="remove-tag-button" onClick={() => handleRemoveName(index)}>
                  &times;
                </button>
              </span>
            ))}
          </div>
          <div className="table-join-container">
            <div className="radio-option">
            <input type="radio" id="option1" name="option" value="option1" />
            <label htmlFor="option1" className="radio-label">
              <img src="src/assets/union.png" alt="Union" />
            </label>
            <p className="radio-text">Union</p>
            </div>
            <div className="radio-option">
            <input type="radio" id="option2" name="option" value="option2" />
            <label htmlFor="option2" className="radio-label">
              <img src="src/assets/intersect.png" alt="Intersect" />
            </label>
            <p className="radio-text">Intersection</p>
            </div>
          </div>
          <button className="generate-button">Generate</button>
        </div>

        <div className="movie-container">
          <p className="you-should-watch">You should watch</p>
          <div className="poster-container">
          <img className="movie-poster" src="https://a.ltrbxd.com/resized/sm/upload/cb/kc/9q/tm/g5G19q0xgkzWEvfcGo1KcL8nQOk-1200-1200-675-675-crop-000000.jpg?v=c77496f3f2" alt="Movie Poster">
          </img>
          </div>
          <div className="movie-details">
            <p className="movie-title">Twin Peaks: Fire Walk with Me</p>
            <div className="director-year-container">
              <p className="movie-year">1992</p>
              <p className="movie-director">
                <span className="directed-by">Directed by </span>David Lynch</p>
            </div>
            <p className="movie-synopsis">In the questionable town of Deer Meadow, Washington, FBI Agent Desmond inexplicably disappears while hunting for the man who murdered a teen girl. The killer is never apprehended, and, after experiencing dark visions and supernatural encounters, Agent Dale Cooper chillingly predicts that the culprit will claim another life. Meanwhile, in the more cozy town of Twin Peaks, hedonistic beauty Laura Palmer hangs with lowlifes and seems destined for a grisly fate.</p>
          </div>
          <p className="letterboxd-url">View on Letterboxd</p>
        </div>
      </div>
    );
  }

export default Card