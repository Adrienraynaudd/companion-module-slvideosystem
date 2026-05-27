module.exports = function (self) {
	const presets = {}
	const columns = self.getGridColumns()
	const rows = self.getGridRows()

	for (let row = 0; row < rows; row++) {
		for (let column = 0; column < columns; column++) {
			const shortcut = self.getShortcutForGridPosition({ row, column })
			const presetId = `slot_${row}_${column}`
			const locationLabel = `${row}/${column}`
			const previewText = shortcut ? (shortcut.hasIcon && shortcut.iconBase64 ? '' : self.formatShortcutText(shortcut)) : locationLabel

			presets[presetId] = {
				type: 'button',
				category: 'SLVideo Positions',
				name: shortcut ? `Raccourci Ligne ${row} / Colonne ${column} - ${shortcut.name}` : `Raccourci Ligne ${row} / Colonne ${column} vide`,
				style: {
					text: '',
					size: 'auto',
					color: '#ffffff',
					bgcolor: '#1f1f1f',
				},
				previewStyle: {
					text: previewText,
					color: shortcut?.foreColor || '#ffffff',
					bgcolor: shortcut?.backColor || '#1f1f1f',
					png64: shortcut?.hasIcon && shortcut?.iconBase64 ? shortcut.iconBase64 : undefined,
				},
				feedbacks: [
					{
						feedbackId: 'shortcut_state',
						options: {
							shortcutId: '',
							row,
							column,
						},
						headline: shortcut ? `Affichage de la case ${locationLabel}` : `Aucun raccourci sur ${locationLabel}`,
					},
				],
				steps: [
					{
						name: 'Step 1',
						down: [
							{
								actionId: 'trigger_shortcut',
								options: {
									shortcutId: '',
									row,
									column,
								},
								headline: shortcut ? `Déclenche le raccourci de ${locationLabel}` : `Aucun raccourci sur ${locationLabel}`,
							},
						],
						up: [],
					},
				],
			}
		}
	}

	self.setPresetDefinitions(presets)
}