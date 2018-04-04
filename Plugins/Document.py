import sublime
import sublime_plugin

from .Scopes import tmScope

def get_key_region_at(view, point):
    if view.match_selector(point, tmScope.function):
        for region in view.find_by_selector(tmScope.function):
            if region.contains(point):
                return region
    return None

class tmDocument(sublime_plugin.ViewEventListener):

    def __init__(self, view):
        super(tmDocument, self).__init__(view)
        filepath = view.file_name()

    def on_hover(self, point, hover_zone):
        if hover_zone != sublime.HOVER_TEXT: return
        key_region = get_key_region_at(self.view, point)
        if not key_region: return

        key = self.view.substr(key_region)
        body = "哈哈哈: {0}, {1}".format(key_region.a, key_region.b)

        # offset <h1> padding, if possible
        window_width = min(1000, int(self.view.viewport_extent()[0]) - 64)
        
        key_start = key_region.begin()
        location = max(key_start - 1, self.view.line(key_start).begin())

        self.view.show_popup(
            content = body,
            location = location,
            max_width = window_width,
            flags = sublime.HIDE_ON_MOUSE_MOVE_AWAY | sublime.COOPERATE_WITH_AUTO_COMPLETE
        )

