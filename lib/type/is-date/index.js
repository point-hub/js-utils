import { isEmpty } from "../../value/is-empty";
import { isUndefined } from "../../value/is-undefined";
import { isBoolean } from "../is-boolean";
import { isFunction } from "../is-function";
import { isNumber } from "../is-number";
import { isType } from "../is-type";
export const isDate = (value) => {
    if (isEmpty(value))
        return false;
    if (isNumber(value))
        return false;
    if (isBoolean(value))
        return false;
    if (isUndefined(value))
        return false;
    if (isFunction(value))
        return false;
    if (new Date(value).toString() === "Invalid Date")
        return false;
    if (isType(new Date(value), "date"))
        return true;
    return false;
};
