import PersonalDetail from "./sections/PersonalDetail";
import Projects from "./sections/Projects";
import EducationDetails from "./sections/EducationDetails";
import Technologies from "./sections/Technologies";

function Editor({ formData, setFormData }) {
    return (
        <div className="flex flex-col gap-6 bg-white rounded-2xl shadow-lg p-6 w-[850px] mx-auto">
            <PersonalDetail formData={formData} setFormData={setFormData} />
            <EducationDetails formData={formData} setFormData={setFormData} />
            <Projects formData={formData} setFormData={setFormData} />
            <Technologies formData={formData} setFormData={setFormData} />,
        </div>
    );
}

export default Editor;