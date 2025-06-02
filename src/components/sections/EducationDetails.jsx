function EducationDetails({ formData, setFormData }) {
  const education = formData.educationDetails;

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value
    };
    setFormData({ ...formData, educationDetails: updatedEducation });
  };

  return (
    <div className="section">
      <h2>Education Details</h2>
      {education.map((edu, index) => (
        <form key={index}>
          <div className="form-group">
            <label>Name of Degree:</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Year of Completion:</label>
            <input
              type="text"
              name="year"
              value={edu.year}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Name of Institute:</label>
            <input
              type="text"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>CGPA/Score:</label>
            <input
              type="text"
              name="score"
              value={edu.score}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Area of Focus:</label>
            <input
              type="text"
              name="focus"
              value={edu.focus}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </form>
      ))}
    </div>
  );
}

export default EducationDetails;
