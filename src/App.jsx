import { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {

  const [formData, setFormData] = useState({
    personalDetails: {
      name: '',
      location: '',
      email: '',
      phone: '',
      website: '',
      linkedin: '',
      github: ''
    },
    educationDetails: [
      {
        institute: '',
        degree: '',
        year: '',
        score: '',
        focus: ''
      }
    ],
    projects: [
      {
        name: '',
        description: '',
        toolsUsed: '',
        link: ''
      }
    ],
    technologies: {
      languages: '',
      techStack: ''
    },
    extracurricular: {
      activity: '',
      duration: '',
      contributions: ''
    },
    certifications: [
      {
        title: '',
        link: '',
        duration: ''
      }
    ],
    additionalActivities: {
      platform: 'LeetCode',
      profileLink: '',
      problemsSolved: ''
    }
  });


  return (
    <div className="main">
      <Editor formData={formData} setFormData={setFormData}/>
      <Preview formData={formData} />
    </div>
  );
}

export default App;