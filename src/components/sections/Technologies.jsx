function Technologies({ formData, setFormData }) {
  const tech = formData.technologies;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      technologies: {
        ...tech,
        [name]: value
      }
    });
  };

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Technologies</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label htmlFor="languages" className="text-sm font-medium text-gray-700 mb-1">Languages Known:</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={tech.languages}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            placeholder="e.g., Java, Python, JavaScript"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="techStack" className="text-sm font-medium text-gray-700 mb-1">Tech Stack / Tools:</label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            value={tech.techStack}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            placeholder="e.g., React, Node.js, MongoDB"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Technologies;
