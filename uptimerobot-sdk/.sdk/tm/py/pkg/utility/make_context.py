# Uptimerobot SDK utility: make_context

from projectname_sdk.core.context import UptimerobotContext


def make_context_util(ctxmap, basectx):
    return UptimerobotContext(ctxmap, basectx)
