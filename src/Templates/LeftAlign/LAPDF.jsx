import React, { useContext } from 'react';
import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import logo from "../../assets/logo.png";
// import { FormContext } from '../../Context/FormProvider';
import { styles } from '../../Templates/LeftAlign/LAStule';


const LAPDF = ({ formData }) => {
    // const { formData } = useContext(FormContext);
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
    return (
        <Document>
            <Page style={styles.page}>
                {/* Header */}
                <View style={styles.imgContainer}>
                    <Image src={logo} style={styles.logo} />
                </View>

                {/* Text Section */}
                <View style={styles.txtContainer}>
                    {/* Assignment Section */}
                    <View style={styles.topSection}>
                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Assignment On:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{assignmentName}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Course Name:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{courseName}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Course Code:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{courseCode}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Teacher Section */}
                    <View style={styles.firstSection}>
                        <View style={styles.content}>
                            <Text style={styles.submit}>Submitted To:</Text>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Name:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{teacherName}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Designation:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{designation}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Department:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{department}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Student Section */}
                    <View style={styles.firstSection}>
                        <View style={styles.content}>
                            <Text style={styles.submit}>Submitted By:</Text>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Name:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{studentName}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Student ID:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{studentID}</Text>
                            </View>
                        </View>

                        <View style={styles.content}>
                            <View style={styles.inputName}>
                                <Text style={styles.inputNameText}>Department:</Text>
                            </View>
                            <View style={styles.inputValue}>
                                <Text style={styles.inputValueText}>{studentDepartment}</Text>
                            </View>
                        </View>

                        <View style={styles.batchSection}>
                            <View style={styles.inputBatch}>
                                <Text style={styles.inputNameText}>Batch:</Text>
                                <Text style={styles.inputValueText}>{studentBatch}</Text>
                            </View>

                            <View style={styles.inputBatch}>
                                <Text style={styles.inputNameText}>Section:</Text>
                                <Text style={styles.inputValueText}>{studentSection}</Text>
                            </View>
                        </View>
                    </View>

                    {/* Submission Date Section */}
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
            </Page>
        </Document>
    );
};

export default LAPDF;