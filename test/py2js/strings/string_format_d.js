/*** File generated by PJs http://jaredforsyth.com/projects/pjs ***/

// from source file /home/jared/clone/pjs/test/py2js/strings/string_format_d.py

load("./build/pjslib.js");
var console = {log:function(){print.apply(this, arguments);}};
module('/home/jared/clone/pjs/test/py2js/strings/string_format_d.py', function (_) {
    _.__doc__ = "";
    _.a = $b._float(1.123456);
    _.b = 10;
    _.c = -30;
    _.d = 34;
    _.e = $b._float(123.456000);
    _.f = 19892122;
    _.s = $b.mod($b.str('b=%d'), _.b);
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b,c,d=%d+%d+%d'), $b.tuple([_.b, _.c, _.d]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('b=%(b)0d and c=%(c)d and d=%(d)d'), $b.dict([[$b.str('b'), _.b], [$b.str('c'), _.c], [$b.str('d'), _.d]]));
    $b.print(_.s);//, true
    _.s = $b.mod($b.str('e=%020d e=%+d e=%20d e=%-20d (e=%- 20d)'), $b.tuple([_.e, _.e, _.e, _.e, _.e]));
    $b.print(_.s);//, true
});

__builtins__.__import__('sys').argv = __builtins__.list(arguments);
__builtins__.run_main('/home/jared/clone/pjs/test/py2js/strings/string_format_d.py', ['/home/jared/clone/pjs', '/home/jared/clone/pjs', '/home/jared/python', '/usr/lib/python2.6', '/usr/lib/python2.6/plat-linux2', '/usr/lib/python2.6/lib-tk', '/usr/lib/python2.6/lib-old', '/usr/lib/python2.6/lib-dynload', '/usr/lib/python2.6/dist-packages', '/usr/lib/python2.6/dist-packages/PIL', '/usr/lib/python2.6/dist-packages/gst-0.10', '/usr/lib/pymodules/python2.6', '/usr/lib/python2.6/dist-packages/gtk-2.0', '/usr/lib/pymodules/python2.6/gtk-2.0', '/usr/local/lib/python2.6/dist-packages']);
