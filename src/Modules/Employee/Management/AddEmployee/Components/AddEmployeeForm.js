import React, { Component } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import EmployeeBioData1 from "./EmployeeBioData1";
import EmployeeBioData2 from "./EmployeeBioData2";
import EmployeeBioData3 from "./EmployeeBioData3";

export default class AddEmployeeForm extends Component {
    state = {
        "step": 1,
        "employee-id": "",
        "first-name": "",
        "other-names": "",
        "last-name": "",
        "date-of-birth": "",
        "gender": "",
        "marital-status": "",
        "national-id": "",
        "kra-pin-number": "",
        "nhif-number": "",
        "nssf-number": "",
        "personal-mobile-phone-number": "",
        "work-email": "",
        "personal-email": "",
        "post-office-box": "",
        "postal-code": "",
        "profile-photo": "",
        "bank-account-number": "",
        "bank-branch-number": "",
        "estate": "",
        "scan-of-physical-document": "",
    }

    
    //go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1})
    }

    //go to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    //handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    }


    render() {
    const { step } = this.state;
    const { employeeId, firstName, otherNames, lastName, dateOfBirth, gender, maritalStatus, nationalIdNumber, kraPinNumber, nhifNumber, nssfNumber, personalMobilePhoneNumber, workEmail, personalEmail, postOfficeBox, postalCode, profilePhoto, bankAccountNumber, bankBranchNumber, estate, scanOfPhysicalDocument, department, role} = this.state;
    const values = { employeeId, firstName, otherNames, lastName, dateOfBirth, gender, maritalStatus, nationalIdNumber, kraPinNumber, nhifNumber, nssfNumber, personalMobilePhoneNumber, workEmail, personalEmail, postOfficeBox, postalCode, profilePhoto, bankAccountNumber, bankBranchNumber, estate, scanOfPhysicalDocument, department, role}

    switch (step) {
        case 1: 
          return (
            <EmployeeBioData1 
                nextStep = { this.nextStep }
                handleChange = { this.handleChange }
                values = { values }
            />
          )
        case 2: 
          return (
            <EmployeeBioData2 
                prevStep = { this.prevStep }
                nextStep = { this.nextStep }
                handleChange = { this.handleChange }
                values = { values }
            />
          )
        case 3: 
          return (
            <EmployeeBioData3 
                prevStep = { this.prevStep }
                nextStep = { this.nextStep }
                handleChange = { this.handleChange }
                values = { values }
            />
          )
        // never forget the default case, otherwise VS code would be mad!
        default: 
           // do nothing
      }
    }
}