>>> def genPrivateCallbacks(header, events, states):
...     for e in events:
...         print(("_onbefore{event}(event, fromState, toState, ...args){{" +\
...               "this.publishUpChain.call(this, CONST.topics.{header}.events.onbefore{event}, fromState, toState, ...args);" +\
...               "this.onbefore{event}.call(this, event, fromState, toState, ...args);}}").format(event=e, header=header))
...         print(("_onafter{event}(event, fromState, toState, ...args){{" +\
...               "this.publishUpChain.call(this, CONST.topics.{header}.events.onafter{event}, fromState, toState, ...args);" +\
...               "this.onafter{event}.call(this, event, fromState, toState, ...args);}}").format(event=e, header=header))
...     for s in states:
...         print(("_onleave{event}(event, fromState, toState, ...args){{" +\
...               "this.publishUpChain.call(this, CONST.topics.{header}.states.onleave{event}, fromState, toState, ...args);" +\
...               "this.onleave{event}.call(this, event, fromState, toState, ...args);}}").format(event=s, header=header))
...         print(("_onenter{event}(event, fromState, toState, ...args){{" +\
...               "this.publishUpChain.call(this, CONST.topics.{header}.states.onenter{event}, fromState, toState, ...args);" +\
...               "this.onenter{event}.call(this, event, fromState, toState, ...args);}}").format(event=s, header=header))
...
>>> genPrivateCallbacks('agent', ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> def genPublicCallbacks(header, events, states):
...     for e in events:
...         print(("onbefore{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
...         print(("onafter{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
...     for s in states:
...         print(("onleave{event}(event, fromState, toState, ...args){{}}").format(event=s, header=header))
...         print(("onenter{event}(event, fromState, toState, ...args){{}}").format(event=s, header=header))
...
>>> genPrivateCallbacks('engine', ['Start', 'Replay', 'Record', 'Identify', 'Stop', 'Pause', 'Continue', 'Warn', 'Reset', 'Error'], ['Idle', 'Ready','Replaying', 'Recording', 'Identifying', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> genPrivateCallbacks('agent', ['Start', 'Execute', 'Done', 'Stop', 'Pause', 'Continue', 'Reset', 'Error', 'Warn'], ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])

>>> def genCallbacks(events, states):
...     for e in events:
...         print('onbefore{lower}:this._onbefore{title}.bind(this),'.format(lower=e.lower(), title=e.title()))
...         print('onafter{lower}:this._onafter{title}.bind(this),'.format(lower=e.lower(), title=e.title()))
...     for s in states:
...         print('onleave{lower}:this._onleave{title}.bind(this),'.format(lower=s.lower(), title=s.title()))
...         print('onenter{lower}:this._onenter{title}.bind(this),'.format(lower=s.lower(), title=s.title()))
...
