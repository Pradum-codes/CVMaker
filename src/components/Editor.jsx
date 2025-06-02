import PersonalDetail from "./sections/PersonalDetail";
import Projects from "./sections/Projects";
import EducationDetails from "./sections/EducationDetails";
import Technologies from "./sections/Technologies";

function Editor({ formData, setFormData }) {
    return (
        <>
            <PersonalDetail formData={formData} setFormData={setFormData} />
            <EducationDetails formData={formData} setFormData={setFormData} />
            <Projects formData={formData} setFormData={setFormData} />
            <Technologies formData={formData} setFormData={setFormData} />,
        </>
    );
}

export default Editor;