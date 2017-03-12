
module.exports = function* getSeq(keyPrefix) {

    let id = " ";
    keyPrefix = keyPrefix || "__";

    while (true) {
        let ret = "";
        for(let i = 0; i < id.length + 1; i++) {
            const char = id.charCodeAt(i);
            if (char < 126) {
                ret += String.fromCharCode(char + 1) + id.substr(i+1);
                break;
            } else {
                console.error("k", ret);
                ret += " ";
            }
        }
        id = ret;
        yield keyPrefix + id;
    }
};
