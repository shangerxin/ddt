>>> def genPrivateCallbacks(header, events):
... 	for e in events:
... 		print(("_onbefore{event}(event, fromState, toState, ...args){{" +\
...     	      "this.publishUpChain(CONST.topics.{header}.onbefore{event}, fromState, toState, ...args);" +\
...     	      "this.onbefore{event}(event, fromState, toState, ...args);}}").format(event=e, header=header))
... 		print(("_onleave{event}(event, fromState, toState, ...args){{" +\
...     	      "this.publishUpChain(CONST.topics.{header}.onleave{event}, fromState, toState, ...args);" +\
...     	      "this.onleave{event}(event, fromState, toState, ...args);}}").format(event=e, header=header))
... 		print(("_onenter{event}(event, fromState, toState, ...args){{" +\
...     	      "this.publishUpChain(CONST.topics.{header}.onenter{event}, fromState, toState, ...args);" +\
...     	      "this.onenter{event}(event, fromState, toState, ...args);}}").format(event=e, header=header))
... 		print(("_onafter{event}(event, fromState, toState, ...args){{" +\
...     	      "this.publishUpChain(CONST.topics.{header}.onafter{event}, fromState, toState, ...args);" +\
...     	      "this.onafter{event}(event, fromState, toState, ...args);}}").format(event=e, header=header))
...
>>> genPrivateCallbacks('agent', ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> def genPublicCallbacks(header, events):
... 	for e in events:
... 		print(("onbefore{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
... 		print(("onleave{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
... 		print(("onenter{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
... 		print(("onafter{event}(event, fromState, toState, ...args){{}}").format(event=e, header=header))
...
>>> genPublicCallbacks('agent', ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> def genCallbacks(events):
... 	for e in events:
... 		print('onbefore{lower}:this._onbefore{title},'.format(lower=e.lower(), title=e.title()))
... 		print('onleave{lower}:this._onleave{title},'.format(lower=e.lower(), title=e.title()))
... 		print('onenter{lower}:this._onenter{title},'.format(lower=e.lower(), title=e.title()))
... 		print('onafter{lower}:this._onafter{title},'.format(lower=e.lower(), title=e.title()))
...
