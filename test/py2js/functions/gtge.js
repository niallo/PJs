/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/functions/gtge.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/functions/gtge.py', function (_) {
    _.__doc__ = "";
    _.x = 123;
    _.y = 233;
    _.y2 = 233;
    _.z = 892;
    if ($b.bool($b.do_ops(_.x, '>', _.y)) === true) {
        $b.print($b.str('x > y - incorrect'));//, true
    } else $b.print($b.str('not x > y - correct'));//, true
    
    if ($b.bool($b.do_ops(_.y, '>=', _.y2)) === true) {
        $b.print($b.str('y >= y2 - correct'));//, true
    } else $b.print($b.str('not y >= y2 - incorrect'));//, true
    
    if ($b.bool($b.do_ops(_.z, '>', _.x)) === true) {
        $b.print($b.str('z > x - correct'));//, true
    } else $b.print($b.str('not z > x - incorrect'));//, true
    
    if ($b.bool($b.do_ops(_.y, '>=', _.z)) === true) {
        $b.print($b.str('y >= z - incorrect'));//, true
    } else $b.print($b.str('not y >= x - correct'));//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/functions/gtge.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
