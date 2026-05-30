1. Code Smells: Scope Issues (no-var)

   Lines 1, 2, 3: ESLint caught the use of var.

   Why it matters: Modern JavaScript uses let and const because var doesn't respect block scoping, which can lead to
   accidental bugs.

2. Code Smells: Dead Code (no-unused-vars)

   Lines 3, 5, 7, 10, 21, 26, 28, 32: ESLint is flagging variables and functions that werge created but never actually
   called or read anywhere else.

   Why it matters: Keeping unused code clutters the file, increases bundle sizes, and usually indicates an incomplete
   feature.

3. Logic Bug: Pointless Logic (no-self-compare)

   Line 11: ESLint spotted user.role === user.role.

   Why it matters: Comparing a variable to itself is always going to evaluate to true. This is almost always a
   copy-paste typo where the developer meant to compare it to something else (like user.role === expectedRole).

4. Code Smell: Loose Equality (eqeqeq)

   Line 15: ESLint caught == instead of ===.

   Why it matters: In JavaScript, == performs type coercion (meaning "18" == 18 is true). Using strict equality ===
   ensures both the type and the value match perfectly, preventing weird runtime bugs.

5. Critical Bug: Dead Code Execution (no-unreachable)

   Line 28: ESLint flagged code placed directly after a return statement.

   Why it matters: Once a function hits a return statement, it immediately exits. Anything written below it will never
   run.