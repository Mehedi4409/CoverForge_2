import logo from "../../assets/logo.png"
import AssignmentName from "../../component/FormComponent/AssignmentName";
import SubmissionDate from "../../component/FormComponent/SubmissionDate";
import SubmittedBy from "../../component/FormComponent/SubmittedBy";
import SubmittedTo from "../../component/FormComponent/SubmittedTo";
const LAForm = () => {

    const handleUpdate = data =>{
        console.log("data passed!!!");
    }


    return (
        <div className="flex h-fit w-screen justify-center items-center my-4">
            <div
                className="card bg-white text-black shadow-xl mx-auto p-6 border border-black rounded-none"
                style={{
                    width: '100%',
                    minHeight: '100%',
                    maxWidth: '210mm',
                    minHeight: '297mm'
                }}
            >
                {/* Logo Section */}
                <figure className="px-10 pt-6">
                    <img src={logo} alt="Logo" className="w-40 mx-auto" />
                </figure>

                <form>
                    <AssignmentName></AssignmentName>
                    <SubmittedTo onUpdate={handleUpdate}></SubmittedTo>
                    <SubmittedBy></SubmittedBy>
                    <SubmissionDate></SubmissionDate>


                </form>


            </div>
        </div>
    );
};

export default LAForm;
