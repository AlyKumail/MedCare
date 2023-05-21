// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract EHR { 
    struct Patient {
        uint id;
        string name;
        string dob;
        string bloodGroup;
        address wallet;
        Record[] records;

    }

    struct Doctor {
        uint id;
        string name;
        string specialization;
        address wallet;
    }

    struct Record {
        uint id;
        uint doctorId;
        string recordType;
        string recordDetails;
        uint timestamp;
        Medication medication;
    }

    struct Medication {
        string name;
        string strength;
        string unit;
        string frequency;
        string duration;
        string instructions;
    }

    mapping(address=>mapping(address=>bool)) isApproved;

    mapping(address => Patient) patients;
    mapping(address => Doctor) doctors;

    mapping (uint => Patient) public patients;
    mapping (uint => Doctor) public doctors;
    mapping (uint => Record) public records;

    uint public nextPatientId = 1;
    uint public nextDoctorId = 1;
    uint public nextRecordId = 1;

    //Owner of the record must give permission to doctor only they are allowed to view records
    function givePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = true;
        permissionGrantedCount++;
        return true;
    }

    //Owner of the record can take away the permission granted to doctors to view records
    function RevokePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = false;
        return true;
    }

    
}
