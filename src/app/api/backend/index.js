/*
 * @Author: LogIN-
 * @Date:   2019-01-22 10:26:55
 * @Last Modified by:   LogIN-
 * @Last Modified time: 2019-04-10 12:54:56
 */
import request from "@/utils/request";

const baseUrlPath = "/backend";

/**
 * Login user to back-end and create Auth Token in the database
 * @param {string} username - Username of the current user
 * @param {string} password - Password of the current user
 */
export function userLogin(username, password) {
    const data = {
        username,
        password
    };
    return request({
        url: baseUrlPath + "/user/login",
        method: "POST",
        data
    });
}
/**
 * @return {[type]}
 */
export function userLogout() {
    return request({
        url: baseUrlPath + "/user/logout",
        method: "POST"
    });
}

export function userRegister(userForm, planForm) {
    const data = {
        user: userForm,
        plan: planForm
    };
    return request({
        url: baseUrlPath + "/user/register",
        method: "POST",
        data
    });
}
export function userDetials() {
    return request({
        url: baseUrlPath + "/user/details",
        method: "GET"
    });
}
/**
 * Checks if value is available in specific Database Table, like user-name, email address
 * Returns true or false. TRUE if record is available
 *
 * @param  {[string]} validationTable
 * @param  {[string]} validationField
 * @param  {[string]} validationValue
 * @return {[type]}
 */
export function checkDatabaseAvailability(validationTable, validationField, validationValue) {
    return request({
        url:
            baseUrlPath +
            "/system/validation/database/" +
            encodeURIComponent(window.btoa(validationTable)) +
            "/" +
            encodeURIComponent(window.btoa(validationField)) +
            "/" +
            encodeURIComponent(window.btoa(validationValue)),
        method: "GET"
    });
}
/**
 * Retrieves all plans for specific customer group with all details
 *
 */
export function retrieveAllActivePlans(customerType) {
    return request({
        url: baseUrlPath + "/system/plans/list/" + encodeURIComponent(window.btoa(customerType)),
        method: "GET"
    });
}
/**
 * @return {[type]}
 */
export function fetchServerStats() {
    return request({
        url: baseUrlPath + "/dashboard/stats",
        method: "GET"
    });
}

export function systemConfigure(newBaseURL) {
    return request({
        url: baseUrlPath + "/system/status/bb5dc8842ca31d4603d6aa11448d1654",
        method: "GET",
        baseURL: newBaseURL
    });
}

export function searchCountry(input) {
    return request({
        url: "https://restcountries.eu/rest/v2/name/" + encodeURIComponent(input) + "?fields=name;alpha2Code",
        method: "GET"
    });
}

export function searchAddressSuggest(input) {
    return request({
        url: "http://places.cit.api.here.com/places/v1/suggest?app_code=HjaPdhcpX2fQcX4-Bhsr5w&app_id=UErNjt36zAkX8xBdxWFV&pretty=true&q=" + encodeURIComponent(input),
        method: "GET",
        headers: { "X-Map-Viewport": "13.3704,52.5122,13.4194,52.5262" }
    });
}

export function searchAddressDetails(input) {
    return request({
        url:
            "https://geocoder.cit.api.here.com/6.2/geocode.json?searchtext=" +
            encodeURIComponent(input) +
            "&app_id=UErNjt36zAkX8xBdxWFV&app_code=HjaPdhcpX2fQcX4-Bhsr5w&gen=9&jsonattributes=1&locationattributes=address&maxresults=1&addressattributes=country,city,postalCode,addressLines&language=en-US",
        method: "GET"
    });
}

export function fetchQueueList(query) {
    return request({
        url: baseUrlPath + "/queue/list",
        method: "GET",
        params: query
    });
}
// Exploration => details
export function fetchQueueExplorationDetails(query) {
    return request({
        url: baseUrlPath + "/queue/exploration/list",
        method: "GET",
        params: query
    });
}

// Dashboard => details
export function fetchQueueResamples(query) {
    return request({
        url: baseUrlPath + "/queue/details",
        method: "GET",
        params: query
    });
}

export function fetchResampleModels(query) {
    return request({
        url: baseUrlPath + "/queue/resamples/details",
        method: "GET",
        params: query
    });
}

/**
 * Retrives list of files fot the user uploaded in specific user directory
 * @param  {object} submitData Object containing one string variable: selectedDirectory that corresponds to upload_directory column in users_files table
 * @return {object}            JSON decoded API response object
 */
export function readFilesInUserDirectory(submitData) {
    return request({
        url: baseUrlPath + "/system/filesystem/list/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

/**
 * Deletes file from database and from file system
 * @param  {int} fileID ID of the desired file to be deleted from users_files database table
 * @return {object}            JSON decoded API response object
 */
export function deleteFile(submitData) {
    return request({
        url: baseUrlPath + "/system/filesystem/delete/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

export function fetchSimonAvailablePackages(selectedFiles) {
    const data = {
        selectedFiles: encodeURIComponent(window.btoa(JSON.stringify(selectedFiles)))
    };
    return request({
        url: baseUrlPath + "/system/simon/available-packages",
        method: "POST",
        data
    });
}

export function simonHeaderVerify(selectedFiles) {
    return request({
        url: baseUrlPath + "/system/simon/header/" + encodeURIComponent(window.btoa(JSON.stringify(selectedFiles))) + "/verify",
        method: "GET"
    });
}
export function getSimonHeaderSuggest(selectedFiles, input) {
    return request({
        url: baseUrlPath + "/system/simon/header/" + encodeURIComponent(window.btoa(JSON.stringify(selectedFiles))) + "/suggest/" + encodeURIComponent(window.btoa(input)),
        method: "GET"
    });
}

/**
 * Suggest features of requested re-sample ID
 * @param  {object} Containing 3 variables
 * resampleID: database ID of the resample, userInput: user inputed string, inputType: features, outcome, classes
 * @return {object}            JSON decoded API response object
 */
export function resamplesFeaturesSuggest(submitData) {
    return request({
        url: baseUrlPath + "/queue/resamples/features/suggest/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

export function getSimonPreAnalysisDetails(submitData) {
    const data = {
        submitData: encodeURIComponent(window.btoa(JSON.stringify(submitData)))
    };
    return request({
        url: baseUrlPath + "/system/simon/pre-analysis",
        method: "POST",
        data
    });
}

export function submitDatasetQueueTask(submitData) {
    const data = {
        submitData: encodeURIComponent(window.btoa(JSON.stringify(submitData)))
    };
    return request({
        url: baseUrlPath + "/system/simon/dataset-queue",
        method: "POST",
        data
    });
}

export function cancelDatasetQueueTask(submitData) {
    const data = {
        submitData: encodeURIComponent(window.btoa(JSON.stringify(submitData)))
    };
    return request({
        url: baseUrlPath + "/system/simon/dataset-queue/cancel",
        method: "POST",
        data
    });
}

/**
 * Deletes selected Queue from database with all associated data
 * @param  {[type]} submitData [description]
 * @return {[type]}            [description]
 */
export function deleteDatasetQueueTask(submitData) {
    const data = {
        submitData: encodeURIComponent(window.btoa(JSON.stringify(submitData)))
    };
    return request({
        url: baseUrlPath + "/system/simon/dataset-queue/delete",
        method: "POST",
        data
    });
}

/**
 * Deletes selected Queue Resample from database
 * @param  {[type]} submitData [description]
 * @return {[type]}            [description]
 */
export function deleteDatasetResampleTask(submitData) {
    return request({
        url: baseUrlPath + "/system/simon/dataset-resample/delete/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

/**
 * Generates publicly accessible download link for specific file ID
 * @param  {object} Containing two variables:
 * downloadType: (resample, queue)
 * recordID: main ID of the queue or resample
 * @return {object}            JSON decoded API response object
 */
export function genarateFileDownloadLink(submitData) {
    return request({
        url: baseUrlPath + "/system/filesystem/download/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

export function getVariableImportance(query) {
    return request({
        url: baseUrlPath + "/queue/exploration/variableImportance",
        method: "GET",
        params: query
    });
}

export function getPublicDatasets(submitData) {
    return request({
        url: baseUrlPath + "/dataset/import/public/list/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}

export function importPublicDatasets(submitData) {
    return request({
        url: baseUrlPath + "/dataset/import/public/import/" + encodeURIComponent(window.btoa(JSON.stringify(submitData))),
        method: "GET"
    });
}
