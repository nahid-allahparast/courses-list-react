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
      <span className="rate">⭐{course.rate}</span>
    </div>
  );
};

const CourseCardFooter = ({ course }) => {
  const startedAt = new Date(course.start).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
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
        <div className="date">{startedAt}</div>
        <span
          className={`badge ${
            course.status === "Active"
              ? "badge--primary"
              : course.status === "Upcoming"
              ? "badge--danger"
              : "badge--secondary"
          }`}
        >
          {course.status}
        </span>
      </div>
      <div></div>
    </div>
  );
};
