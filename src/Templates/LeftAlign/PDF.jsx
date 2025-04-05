import React, { useContext } from 'react';
import { Page, Text, View, Document, PDFViewer, Image } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
// import { styles } from '../../Templates/LeftAlign/LAStule';
import logo from "../../assets/logo.png";
import { FormContext } from '../../Context/FormProvider';

const PDF = () => {
    const { formData } = useContext(FormContext)
    const {
        assignmentName,
        courseName,
        courseCode,
        teacherName,
        designation,
        department,
        studentName,
        studentID,
        studentSection,
        studentBatch,
        studentDepartment,
        submissionDate
    } = formData;
    console.log(formData);

    const MyCover = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* main container */}
                <View style={styles.container}>
                    {/* image section */}
                    <View style={styles.imgContainer}>
                        <View style={styles.image}>
                            <Image src={logo} style={styles.logo} />
                        </View>
                    </View>
                    {/* text section */}
                    {/* text container */}
                    <View style={styles.txtContainer}>
                        {/* First section: Assignment */}
                        <View style={styles.topSection}>
                            {/* assignment name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Assignment On:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{assignmentName}</Text>
                                </View>
                            </View>
                            {/* Course name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Course Name:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{courseName}</Text>
                                </View>
                            </View>
                            {/* Course code */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Course Code:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{courseCode}</Text>
                                </View>
                            </View>
                        </View>
                        {/* second section: Submitted to */}
                        <View style={styles.firstSection}>
                            <View style={styles.inputName}>
                                <Text style={styles.submit}>Submitted to :</Text>
                            </View>
                            {/* assignment name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Name:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{teacherName}</Text>
                                </View>
                            </View>
                            {/* Course name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Designation: :</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{designation}</Text>
                                </View>
                            </View>
                            {/* Course code */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Department:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{department}</Text>
                                </View>
                            </View>
                        </View>
                        {/* third section: submitted by */}
                        <View style={styles.firstSection}>
                            <View style={styles.inputName}>
                                <Text style={styles.submit}>Submitted By :</Text>
                            </View>
                            {/* assignment name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Name:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{studentName}</Text>
                                </View>
                            </View>
                            {/* Course name */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Student ID:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{studentID}</Text>
                                </View>
                            </View>
                            {/* Course code */}
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Department:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{studentDepartment}</Text>
                                </View>

                            </View>
                            {/* batch and section */}
                            <View style={styles.batchSection}>
                                {/* batch */}
                                <View style={styles.inputBatch}>
                                    <Text style={styles.inputNameText}>Batch: </Text>
                                    <Text style={styles.inputValueText}>{studentBatch}</Text>
                                </View>

                                {/* section */}
                                <View style={styles.inputBatch}>
                                    <Text style={styles.inputNameText}>Section: </Text>
                                    <Text style={styles.inputValueText}>{studentSection}</Text>
                                </View>

                            </View>
                        </View>
                        {/* submit date section */}
                        <View style={styles.submission}>
                            <View style={styles.content}>
                                <View style={styles.inputName}>
                                    <Text style={styles.inputNameText}>Submission Date:</Text>
                                </View>
                                <View style={styles.inputValue}>
                                    <Text style={styles.inputValueText}>{submissionDate}</Text>
                                </View>
                            </View>
                        </View>

                    </View>

                </View>

            </Page>
        </Document>
    );
    return (
        <div className='overflow-hidden'>
            <Link to="/">
                <button className="btn btn-primary mb-6">Go Home</button>
            </Link>
            <Link to="/lapreview">
                <button className="btn btn-primary mb-6">preview</button>
            </Link>

            <div className='w-full h-screen '>
                <PDFViewer width="100%" height="100%">
                    <MyCover></MyCover>
                </PDFViewer>

            </div>
        </div>
    );
};

export default PDF;