define('global_functions', ['jquery'], function($) {

    return {
        /**
        * Remove non-numeric character from str.
        *
        * created for using with input mask jquery. Although jQuery input mask has
        * .cleanVal() method but it doesn't work on dynamic input field (not really
        * sure, too lazy for make sure it).
        */
        'cleanValMask': (str) => {
            // TODO: don't convert to number because input mask is not only for
            //       number. And convert manually all script that use this func
            let cleaned = str.replace(/\D/g, '');

            // we don't want input field become 0 if empty string converted to
            // number
            if (cleaned.trim() == '') {
                return '';
            }

            return Number( cleaned );
        },
    }
});