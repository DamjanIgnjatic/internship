import "./about-style.scss";

export default function About() {
  return (
    <div className="about">
      <h1>About App</h1>
      <div className="about--content">
        <p className="author">
          Author: <span>Damjan Ignjatic</span>
        </p>
        <p className="version">
          <span>Version: 1.0</span>
        </p>
        <p className="description">
          App summary:
          <span className="text">
            This app was a test project for an internship in the company
            Bushido. The app allows users to create new products and delete and
            edit existing ones.The App contains a sidebar, allowing users to go
            between app content easily.
          </span>
        </p>
      </div>
    </div>
  );
}
