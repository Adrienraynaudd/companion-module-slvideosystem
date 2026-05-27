module.exports = function (self) {
	self.setActionDefinitions({
		trigger_shortcut: {
			name: 'Déclencher le raccourci',
			description:
				'Déclenche le raccourci SLVideo de la case ligne/colonne, sauf si un raccourci précis est sélectionné.',
			options: self.getShortcutOptionFields(),
			callback: async (action) => {
				self.triggerShortcutForControl(null, action.options)
			},
		},
	})
}
