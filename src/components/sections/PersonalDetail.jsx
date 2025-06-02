function PersonalDetail({ formData, setFormData }) {
  const personal = formData.personalDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalDetails: {
        ...personal,
        [name]: value
      }
    });
  };

  return (
    <div className="section">
      <h2>Personal Details</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={personal.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personal.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="github">Github:</label>
          <input
            type="text"
            id="github"
            name="github"
            value={personal.github}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">Linkedin:</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={personal.linkedin}
            onChange={handleChange}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
