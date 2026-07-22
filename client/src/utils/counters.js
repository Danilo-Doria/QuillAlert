// theese functions are used to count the number of reports with a specific status or category in the reportsArray. They take in an array of reports and a value to compare against, and return the count of reports that match the specified status or category.
export const counterStatuses = (reportsArray, valueToCompare) => {
    return reportsArray.reduce((acc, report) => {
        if (report.status_id === valueToCompare) {
            acc++;
        }
        return acc;
    }, 0);
}

export const counterCategories = (reportsArray, valueToCompare) => {
    return reportsArray.reduce((acc, report) => {
        if (report.category_id === valueToCompare) {
            acc++;
        }
        return acc;
    }, 0);
}