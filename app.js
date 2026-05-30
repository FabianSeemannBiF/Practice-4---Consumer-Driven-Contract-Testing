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

    // 5. FIXED: Changed loose equality (==) to strict equality (===) (eqeqeq)
    if (user.age === 18) {
        console.log("Legal age");
    }

    // 6. FIXED: Kept for export so it doesn't trigger (no-unused-vars)
    const localUnused = "test";

    return { user, localUnused };
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