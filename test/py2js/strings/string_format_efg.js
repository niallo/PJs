/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/strings/string_format_efg.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/strings/string_format_efg.py', function (_) {
    _.__doc__ = "";
    _.a = $b._float(1.123456);
    _.b = $b._float(0.000000);
    _.c = $b._float(18347894.213123);
    _.d = $b._float(0.000000);
    _.e = $b._float(-1324323.456000);
    _.f = $b._float(-0.000000);
    _.vars = $b.list([_.a, _.b, _.c, _.d, _.e, _.f]);
    _.codes = $b.list([$b.str('e'), $b.str('E'), $b.str('f'), $b.str('F'), $b.str('g'), $b.str('G')]);
    _.fmts = $b.list([$b.str('a=%e'), $b.str('a=%10.5e'), $b.str('a=%+10.5e'), $b.str('a=%#e')]);
    var __pjs_iter0 = $b.foriter(_.codes);
    while (__pjs_iter0.trynext()) {
        _.code = __pjs_iter0.value;
    
        var __pjs_iter1 = $b.foriter(_.fmts);
        while (__pjs_iter1.trynext()) {
            _.fmt = __pjs_iter1.value;
        
            _.fmt = _.fmt.replace($b.str('e'), _.code);
            var __pjs_iter2 = $b.foriter(_.vars);
            while (__pjs_iter2.trynext()) {
                _.v = __pjs_iter2.value;
            
                $b.print($b.add(_.fmt, $b.str(':')), $b.mod(_.fmt, _.v));//, true
            }
        }
    }
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/strings/string_format_efg.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
