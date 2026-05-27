module.exports = async function (self) {
	self.setFeedbackDefinitions({
		shortcut_state: {
			name: 'État visuel du raccourci',
			type: 'advanced',
			description:
				'Affiche le raccourci SLVideo de la case ligne/colonne, sauf si un raccourci précis est sélectionné.',
			options: self.getShortcutOptionFields(),
			callback: async (feedback) => {
				return self.getShortcutFeedbackStyleForControl(null, feedback.options)
			},
		},
	})
}
