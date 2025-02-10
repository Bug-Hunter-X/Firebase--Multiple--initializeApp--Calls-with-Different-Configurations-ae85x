# Firebase Multiple `initializeApp` Calls

This repository demonstrates a common, yet subtle, error in Firebase applications: calling `initializeApp` multiple times with different configuration objects.  This leads to unexpected behavior and errors that can be challenging to debug.

The `multipleInit.js` file shows the problematic code. The `multipleInitSolution.js` file provides the corrected version.

**Problem:** Calling `initializeApp` multiple times with differing configuration objects results in errors, inconsistencies, and potential application crashes. The Firebase SDK may not explicitly handle this gracefully.

**Solution:** Ensure that `initializeApp` is called only once, typically early in your application's lifecycle, ensuring only one configuration object is used.