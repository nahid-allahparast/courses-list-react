import "./App.css";
// import "./index.css"

const App = () => {
  return (
    <div>
      <h1>My Courses(3)</h1>
      <div className="course-list">
        <div className="course-item">
          <div className="course-item__image">
            <img
              className="course-item__image__img"
              src="/images/img1.jpg"
              alt=""
            />
          </div>
          <div className="course-item__detaile">
            <div className="course-item__body">
              <div>
                <p className="title">React.js Course</p>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="rate">4</span>
            </div>
            <div className="course-item__footer">
              <div className="tags">
                <span className="badge badge--secondary">test1</span>
                <span className="badge badge--secondary">test2</span>
              </div>
              <div className="caption">
                <div className="date">
                  {new Date().toDateString("en,Us", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
                <span className="badge badge--primary">completed</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
