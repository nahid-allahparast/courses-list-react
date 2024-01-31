const status = ["All", "Active", "Completed", "Upcoming"];
const Header = () => {
  return (
    <div>
      <h1>My Courses(3)</h1>
      <div className="course-status">
        {status.map((s) => (
          <div>{s}</div>
        ))}
      </div>
    </div>
  );
};

export default Header;
