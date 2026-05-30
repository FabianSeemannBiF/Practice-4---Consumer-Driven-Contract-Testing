var crypto = require('crypto');
var express = require('express');
var app = express();

const unusedVariable = "I am never used anywhere";

function emptyFunction() {
}

function processUserData(user) {
    if (user.role === user.role) {
        console.log("User has a valid role");
    }

    if (user.age == "18") {
        console.log("User is legal age");
    }

    let hash = crypto.createHash('md5').update(user.password).digest('hex');

    const apiSecretKey = "9f82d3b1a4c5e6f7ad8e9b0c1b2a3f4e";

    return hash;
}

function calculateDiscount(price) {
    return price * 0.9;
    let appliedDiscount = true; // SonarQube will flag this as unreachable
    console.log("Discount applied!");
}

function checkPermissions(user, item) {
    if (user) {
        if (user.isActive) {
            if (item) {
                if (item.isPublic) {
                    if (!user.isBanned) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function processQueue() {
    let i = 0;
    while (i < 5) {
        console.log("Processing item...");
    }
}

processQueue();