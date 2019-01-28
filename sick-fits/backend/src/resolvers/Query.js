// where DB calls will go / API calls/ CSV parses / etc
const Query = {
    dogs(parent, args, ctx, info){
        return [{name: 'Snickers'},{name: 'Sunny'}];
    }
};

module.exports = Query;
