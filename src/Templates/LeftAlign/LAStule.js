import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        padding: '25mm',
        overflow: "hidden",
        fontSize: "12px"

    },
    container: {
        width: "100%",
        height: "100%",
    },
    imgContainer: {
        width: "100%",
        height: "25%",
        display: 'flex',
        alignItems: 'center'
    },
    logo: {
        width: '48mm',
    },
    txtContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: "75%",

    },
    topSection: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: "25%",
        gap: "4mm",
    },
    firstSection: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        height: "30%",
        gap: "4mm",

    },
    content: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        // gap: "4mm",
    },
    inputName: {
        width: "30%",

    },
    inputNameText: {

        fontFamily: 'Helvetica-Bold',
        fontSize: 12
    },
    inputValue: {
        width: "80%",

    },
    inputValueText: {
        fontSize: 12

    },
    submit: {
        fontFamily: 'Helvetica-Bold',
        fontSize: 14,
        marginBottom: "6mm"
    },
    batchSection: {
        display: 'flex',
        flexDirection: 'row'
    },
    inputBatch: {
        width: "50%",
        display: 'flex',
        flexDirection: 'row',
        // gap:'2mm'
    },
    submission: {
        marginTop: "4mm"
    }



})