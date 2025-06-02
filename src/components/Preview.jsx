function PersonalDetails({ data }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
      <div className="flex flex-wrap gap-4 text-gray-600">
        {data.location && <p>{data.location}</p>}
        {data.email && <p>| {data.email}</p>}
        {data.phone && <p>| {data.phone}</p>}
        {data.website && (
          <>
            <p>|</p>
            <a href={data.website} className="text-blue-600 hover:underline">Website</a>
          </>
        )}
        {data.linkedin && (
          <>
            <p>|</p>
            <a href={data.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
          </>
        )}
        {data.github && (
          <>
            <p>|</p>
            <a href={data.github} className="text-blue-600 hover:underline">GitHub</a>
          </>
        )}
      </div>
    </div>
  );
}

function EducationDetails({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Education</h2>
      {data.map((edu, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-lg font-medium">{edu.institute}</h3>
          <p>{edu.degree} | {edu.year}</p>
          <p>Score: {edu.score}</p>
          <p>Focus: {edu.focus}</p>
        </div>
      ))}
    </div>
  );
}

function Projects({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Projects</h2>
      {data.map((project, index) => (
        <div key={index} className="mt-4">
          <h3 className="text-lg font-medium">{project.name}</h3>
          <p>{project.description}</p>
          <p><span className="font-medium">Tools Used:</span> {project.toolsUsed}</p>
          <a href={project.link} className="text-blue-600 hover:underline">Project Link</a>
        </div>
      ))}
    </div>
  );
}

function Technologies({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Technologies</h2>
      <p><span className="font-medium">Languages:</span> {data.languages}</p>
      <p><span className="font-medium">Tech Stack:</span> {data.techStack}</p>
    </div>
  );
}

function Extracurricular({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Extracurricular</h2>
      <p><span className="font-medium">Activity:</span> {data.activity}</p>
      <p><span className="font-medium">Duration:</span> {data.duration}</p>
      <p><span className="font-medium">Contributions:</span> {data.contributions}</p>
    </div>
  );
}

function Certifications({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Certifications</h2>
      {data.map((cert, index) => (
        <div key={index} className="mt-4">
          <p><span className="font-medium">{cert.title}</span> | {cert.duration}</p>
          <a href={cert.link} className="text-blue-600 hover:underline">Certificate Link</a>
        </div>
      ))}
    </div>
  );
}

function AdditionalActivities({ data }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Additional Activities</h2>
      <p><span className="font-medium">Platform:</span> {data.platform}</p>
      <p><span className="font-medium">Problems Solved:</span> {data.problemsSolved}</p>
      <a href={data.profileLink} className="text-blue-600 hover:underline">Profile Link</a>
    </div>
  );
}

function Preview({ formData }) {
  return (
    <div className="preview bg-gray-100 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Preview</h2>
      <PersonalDetails data={formData.personalDetails} />
      <EducationDetails data={formData.educationDetails} />
      <Projects data={formData.projects} />
      <Technologies data={formData.technologies} />
      <Extracurricular data={formData.extracurricular} />
      <Certifications data={formData.certifications} />
      <AdditionalActivities data={formData.additionalActivities} />
    </div>
  );
}

export default Preview;
