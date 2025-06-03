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

  const addForm = () => {
    setFormData({
      ...formData,
      educationDetails: [
        ...education,
        {
          institute: '',
          degree: '',
          year: '',
          score: '',
          focus: ''
        }
      ]
    });
  };

  return (
    <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-md p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">Education Details</h2>

      {education.map((edu, index) => (
        <form key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Name of Degree</label>
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(index, e)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Year of Completion</label>
            <input
              type="text"
              name="year"
              value={edu.year}
              onChange={(e) => handleChange(index, e)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Institute Name</label>
            <input
              type="text"
              name="institute"
              value={edu.institute}
              onChange={(e) => handleChange(index, e)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Score / CGPA</label>
            <input
              type="text"
              name="score"
              value={edu.score}
              onChange={(e) => handleChange(index, e)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="flex flex-col col-span-full md:col-span-2 lg:col-span-1">
            <label className="text-sm font-medium text-gray-700 mb-1">Area of Focus</label>
            <input
              type="text"
              name="focus"
              value={edu.focus}
              onChange={(e) => handleChange(index, e)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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

export default EducationDetails;
