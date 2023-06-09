import { useState } from "react";

function Requests() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  }

  return (
    <div className="requests">
      <div className="intro">
        <h3>
          You have a song you&apos;d like me to listen to? <br></br>Recommend it
          to me and i&apos;ll make sure to give it a listen!
        </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            required
            maxLength={30}
            id="artist"
            type="text"
            value={artist}
            disabled={loading}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            minLength={1}
            maxLength={40}
            id="title"
            type="text"
            value={title}
            disabled={loading}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="submit" type="submit">
          {loading ? "loading" : "make a request"}
        </button>
      </form>
    </div>
  );
}

export default Requests;
