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

  const addForm = () => {
    setFormData({
      ...formData,
      projects: [
        ...projectList,
          {
            name: '',
            description: '',
            toolsUsed: '',
            link: ''
          }
      ]
    });
  }

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Project Details</h2>
      {projectList.map((project, index) => (
        <form key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor={`name-${index}` } className="text-sm font-medium text-gray-700 mb-1">Project Name:</label>
            <input
              type="text"
              id={`name-${index}`}
              name="name"
              value={project.name}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor={`description-${index}`} className="text-sm font-medium text-gray-700 mb-1">Description:</label>
            <textarea
              id={`description-${index}`}
              name="description"
              rows="1"
              value={project.description}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(index, e)}
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor={`toolsUsed-${index}`} className="text-sm font-medium text-gray-700 mb-1">Tech Stack / Tools Used:</label>
            <input
              type="text"
              id={`toolsUsed-${index}`}
              name="toolsUsed"
              value={project.toolsUsed}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor={`link-${index}`} className="text-sm font-medium text-gray-700 mb-1">Project Link (optional):</label>
            <input
              type="url"
              id={`link-${index}`}
              name="link"
              value={project.link}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        </form>
      ))}
      <button
        onClick={addForm}
        className="self-start mt-2 bg-purple-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200"
      >
        + Add Another
      </button>
      </div>
  );
}

export default Projects;
