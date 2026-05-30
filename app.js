// 1. FIXED: Changed 'var' to 'const' (no-var)
const express = require('express');
const app = express();

// 2. FIXED: Changed 'var' to 'const' (no-var)
const unusedVariable = "I am never used";

// 3. FIXED: Added a placeholder comment or behavior so it's not an empty block (no-empty)
function emptyFunction() {
    console.log("Function initialized.");
}

function processUserData(user) {
    // 4. FIXED: Changed self-comparison to compare against a string literal (no-self-compare)
    if (user.role === "admin") {
        console.log("Valid role");
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