const CourseCard = ({ course }) => {
  return (
    <div className="course-item">
      <div className="course-item__image">
        <img
          className="course-item__image__img"
          src={course.imageUrl}
          alt={course.title}
        />
      </div>
      <div className="course-item__detaile">
        <CourseCardBody course={course} />
        <CourseCardFooter course={course} />
      </div>
    </div>
  );
};

export default CourseCard;

const CourseCardBody = ({ course }) => {
  return (
    <div className="course-item__body">
      <div>
        <p className="title">{course.title}</p>
        <p className="desc">{course.description}</p>
      </div>
      <span className="rate">{course.rate}</span>
    </div>
  );
};

const CourseCardFooter = ({course}) => {
  return (
    <div className="course-item__footer">
      <div className="tags">
        {course.tags.map((tag) => (
          <span key={tag} className="badge badge--secondary">
            {course.tags}
          </span>
        ))}
      </div>
      <div className="caption">
        <div className="date">
          {new Date(course.start).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <span className="badge badge--primary">{course.status}</span>
      </div>
      <div></div>
    </div>
  );
};
