import { isEmpty } from "../../value/is-empty/index.js";
import { isUndefined } from "../../value/is-undefined/index.js";
import { isBoolean } from "../is-boolean/index.js";
import { isFunction } from "../is-function/index.js";
import { isNumber } from "../is-number/index.js";
import { isType } from "../is-type/index.js";
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
