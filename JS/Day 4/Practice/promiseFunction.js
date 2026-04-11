function addSpices() {
    let addedSpieces = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (addedSpieces) {
                console.log("Spices Added");
                resolve();
            } else {
                reject("Failed to add spices");
            }
        }, 1000);
    });
}

function pourOil() {
    let pouredOil = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pouredOil) {
                console.log("Oil Poured");
                resolve();
            } else {
                reject("Oil not poured");
            }
        }, 3000);
    });
}

function fryOnions() {
    let friedOnions = false;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (friedOnions) {
                console.log("Fried Onions");
                resolve();
            } else {
                reject("Onions not fried");
            }
        }, 5000);
    });
}

function addRice() {
    let addedRice = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (addedRice) {
                console.log("Rice Added");
                resolve();
            } else {
                reject("Rice not added");
            }
        }, 4000);
    });
}

addSpices()
.then(()=>pourOil())
.then(()=>fryOnions())
.then(()=>addRice())
.catch((error) => console.log(error)
);

// async function cook() {
//     try {
//         await addSpices();
//         await pourOil();
//         await fryOnions();
//         await addRice();
//     } catch (error) {
//         console.log(error);
//     }
// }

// cook();