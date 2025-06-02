function Projects({ formData, setFormData }) {
  const projectList = formData.projects;

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedProjects = [...projectList];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [name]: value
    };
    setFormData({ ...formData, projects: updatedProjects });
  };

  return (
    <div className="section">
      <h2>Project Details</h2>
      {projectList.map((project, index) => (
        <form key={index}>
          <div className="form-group">
            <label htmlFor={`name-${index}`}>Project Name:</label>
            <input
              type="text"
              id={`name-${index}`}
              name="name"
              value={project.name}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`description-${index}`}>Description:</label>
            <textarea
              id={`description-${index}`}
              name="description"
              rows="3"
              value={project.description}
              onChange={(e) => handleChange(index, e)}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor={`toolsUsed-${index}`}>Tech Stack / Tools Used:</label>
            <input
              type="text"
              id={`toolsUsed-${index}`}
              name="toolsUsed"
              value={project.toolsUsed}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor={`link-${index}`}>Project Link (optional):</label>
            <input
              type="url"
              id={`link-${index}`}
              name="link"
              value={project.link}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </form>
      ))}
    </div>
  );
}

export default Projects;
