>>> def genEvents(header, events):
... 	for e in events:
... 		print('onbefore{event}:"{header}/onbefore{event}",'.format(event=e, header=header))
... 		print('onleave{event}:"{header}/onleave{event}",'.format(event=e, header=header))
... 		print('onenter{event}:"{header}/onenter{event}",'.format(event=e, header=header))
... 		print('onafter{event}:"{header}/onafter{event}",'.format(event=e, header=header))
...
>>> genEvents('agent', ['Idle', 'Ready', 'Running', 'Paused', 'Stopped', 'Warning', 'Error'])
>>> genEvents('engine', ['Idle', 'Ready','Replaying', 'Recording', 'Identifying', 'Paused', 'Stopped', 'Warning', 'Error'])