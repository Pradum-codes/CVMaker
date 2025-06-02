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
    <div className="section">
      <h2>Technologies</h2>
      <form>
        <div className="form-group">
          <label htmlFor="languages">Languages Known:</label>
          <input
            type="text"
            id="languages"
            name="languages"
            value={tech.languages}
            onChange={handleChange}
            placeholder="e.g., Java, Python, JavaScript"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="techStack">Tech Stack / Tools:</label>
          <input
            type="text"
            id="techStack"
            name="techStack"
            value={tech.techStack}
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
