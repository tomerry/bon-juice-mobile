fis.config.merge({
    settings : {
        optimizer : {
            'uglify-js' : {
                output : {
                    max_line_len : 5000
                }
            }

            , 'clean-css' : {
                keepBreaks : true
            }
        }
    }
});

fis.config.del('modules.optimizer.html');