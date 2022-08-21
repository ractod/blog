import { toast } from "react-toastify" ;

function notify(type, message) {
    toast[type](message)
}

// remove space of form values before sending to backend
function removeSpaces(values) {
    let newValues = {}
    Object.entries(values).map(([key, value]) => {
        value = value.trim() 
        value = value.replaceAll("  ", " ")
        newValues[key] = value
    })
    return newValues
}

function updatePage(router) {
    router.push(router, undefined, { scroll: false })
}

export { notify, updatePage, removeSpaces }