import { useState, useEffect } from 'react';
import { ThemeEditor } from './ThemeEditor';

export function ThemeManager() {
	const [isEditorOpen, setIsEditorOpen] = useState(false);

	useEffect(() => {
		function handleKeyDown(event: KeyboardEvent) {
			// Check for Ctrl+B (or Cmd+B on Mac)
			if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
				event.preventDefault();
				setIsEditorOpen(prev => !prev);
			}

			// Also allow Escape to close
			if (event.key === 'Escape' && isEditorOpen) {
				setIsEditorOpen(false);
			}
		}

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isEditorOpen]);

	return (
		<ThemeEditor
			isOpen={isEditorOpen}
			onClose={() => setIsEditorOpen(false)}
		/>
	);
}