pragma solidity ^0.4.17;

contract Outs{
    struct Patient{
        uint256 permissionGrantedCount;
        mapping(address => bool) isApproved;
        Record[] records;
    }

    struct Doctor{
        uint256 permissionGrantedCount;
        mapping(address => bool) isApproved;

    }

    struct Medication {
        string name;
        string strength;
        string unit;
        string frequency;
        string duration;
        string instructions;
    }

    struct Record{
        string type;
        
    }

    address public owner;
}