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
    <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Personal Details</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={personal.name}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={personal.email}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="john@example.com"
          />
        </div>

        {/* Github */}
        <div className="flex flex-col">
          <label htmlFor="github" className="text-sm font-medium text-gray-700 mb-1">GitHub</label>
          <input
            type="text"
            id="github"
            name="github"
            value={personal.github}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="github.com/username"
          />
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col">
          <label htmlFor="linkedin" className="text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={personal.linkedin}
            onChange={handleChange}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="linkedin.com/in/username"
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalDetail;
