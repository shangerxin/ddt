>>> def genEvents(header, events):
... 	for e in events:
... 		print('onbefore{event}:"event/{header}/onbefore{event}",'.format(event=e, header=header))
... 		print('onafter{event}:"event/{header}/onafter{event}",'.format(event=e, header=header))
...
>>> def genStates(header, states):
... 	for s in states:
... 		print('onleave{state}:"state/{header}/onleave{state}",'.format(state=s, header=header))
... 		print('onenter{state}:"state/{header}/onenter{state}",'.format(state=s, header=header))
...

>>> genEvents('agent', ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> genEvents('engine', ['Idle', 'Ready','Replaying', 'Recording', 'Identifying', 'Paused', 'Stopped', 'Warning', 'Error'])