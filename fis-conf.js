var buildPath = "",
    releasePath = "/";

fis.config.merge({
    roadmap: {
        path: [
            {
                reg: new RegExp(buildPath + "[/.]*/((?!tpl)[^/]+\.html)$", "i"),
                release: releasePath + "/$1"
            }
            ,
            {
                reg: new RegExp(buildPath + "/.*/(([^/]+)\.(?:png|gif|jpg|jpeg))$", "i"),
                release: releasePath + "/img/$1"
            }
            ,
            {
                reg: new RegExp(buildPath + "/.*/(([^/]+)\.(?:eot|svg|woff|ttf))$", "i"),
                release: releasePath + "/font/$1"
            }
            ,
            {
                reg: new RegExp(buildPath + "/.*/(([^/]*aio)\.(?:js))$", "i"),
                release: releasePath + "/js/$1"
            }
            ,
            {
                reg: new RegExp(buildPath + "/.*/(([^/]*aio)\.(?:css))$", "i"),
                release: releasePath + "/css/$1"
            }
            ,
            {
                //前面规则未匹配到的其他文件
                reg: /.*/,
                //编译的时候不要产出了
                release: false
            }
        ]
    }
});

fis.config.merge({
    settings: {
        optimizer: {
            'uglify-js': {
                output: {
                    /* inline js，单行过长，可能导致smarty解析失败，所以设置最大行大小 */
                    max_line_len: 500
                }
            }
            , 'clean-css': {
                keepBreaks: true
            }
        }
    }
});

//后缀名的less的文件使用fis-parser-less编译
//modules.parser.less表示设置后缀名为less的文件的parser，第二个less表示使用fis-parser-less进行编译
fis.config.set('modules.parser.less', 'less');
//将less文件编译为css
fis.config.set('roadmap.ext.less', 'css');

//fis.config.del('modules.optimizer.html');

