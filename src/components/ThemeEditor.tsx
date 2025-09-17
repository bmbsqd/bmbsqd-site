import { useState, useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

interface ThemeEditorProps {
	isOpen: boolean;
	onClose: () => void;
}

function getCurrentTheme() {
	const root = document.documentElement;
	const style = getComputedStyle(root);

	// Get all CSS custom properties from the current element
	const allProps = [];
	for (let i = 0; i < document.styleSheets.length; i++) {
		try {
			const styleSheet = document.styleSheets[i];
			for (let j = 0; j < styleSheet.cssRules.length; j++) {
				const rule = styleSheet.cssRules[j] as CSSStyleRule;
				if (rule.selectorText === ':root' || rule.selectorText === '.dark') {
					allProps.push({
						selector: rule.selectorText,
						cssText: rule.style.cssText
					});
				}
			}
		} catch (e) {
			// Skip inaccessible stylesheets
		}
	}

	// If we can't get from stylesheets, build from computed values
	if (allProps.length === 0) {
		const rootVariables = [];
		const darkVariables = [];

		const commonVars = [
			'background', 'foreground', 'card', 'card-foreground', 'popover',
			'popover-foreground', 'primary', 'primary-foreground', 'secondary',
			'secondary-foreground', 'muted', 'muted-foreground', 'accent',
			'accent-foreground', 'destructive', 'destructive-foreground',
			'border', 'input', 'ring', 'radius'
		];

		commonVars.forEach(varName => {
			const value = style.getPropertyValue(`--${varName}`).trim();
			if (value) {
				rootVariables.push(`  --${varName}: ${value};`);
			}
		});

		const semanticClasses = `
/* Semantic component classes - update these to change component colors */
@layer utilities {
  .card-background { @apply bg-card; }
  .card-foreground { @apply text-card-foreground; }
  .card-border { @apply border-border; }

  .button-primary-background { @apply bg-primary; }
  .button-primary-foreground { @apply text-primary-foreground; }
  .button-secondary-background { @apply bg-secondary; }
  .button-secondary-foreground { @apply text-secondary-foreground; }

  .hero-background { @apply bg-background; }
  .section-background { @apply bg-background; }
}`;

		return `:root {\n${rootVariables.join('\n')}\n}\n\n.dark {\n  /* Add dark theme variables here */\n}\n${semanticClasses}`;
	}

	// Convert existing CSS rules to readable format
	return allProps.map(prop => {
		const rules = prop.cssText.split(';').filter(rule => rule.trim())
			.map(rule => `  ${rule.trim()};`).join('\n');
		return `${prop.selector} {\n${rules}\n}`;
	}).join('\n\n');
}

function applyTheme(cssText: string) {
	try {
		// Remove existing theme styles
		const existingStyle = document.getElementById('theme-editor-styles');
		if (existingStyle) {
			existingStyle.remove();
		}

		// Create new style element
		const styleElement = document.createElement('style');
		styleElement.id = 'theme-editor-styles';
		styleElement.textContent = cssText;
		document.head.appendChild(styleElement);

		return true;
	} catch (error) {
		console.error('Invalid CSS:', error);
		return false;
	}
}

export function ThemeEditor({ isOpen, onClose }: ThemeEditorProps) {
	const [themeText, setThemeText] = useState('');
	const [error, setError] = useState('');
	const [isDarkMode, setIsDarkMode] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			setThemeText(getCurrentTheme());
			setError('');
			// Check current dark mode state from DOM and localStorage
			const isDark = document.documentElement.classList.contains('dark') ||
				localStorage.getItem('theme') === 'dark';
			setIsDarkMode(isDark);
		}
	}, [isOpen]);

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
				onClose();
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [isOpen, onClose]);

	function handleApply() {
		const success = applyTheme(themeText);
		if (success) {
			setError('');
			onClose();
		} else {
			setError('Invalid CSS format. Please check your theme configuration.');
		}
	}

	function handleReset() {
		setThemeText(getCurrentTheme());
		setError('');
	}

	function handleDarkModeToggle(checked: boolean) {
		setIsDarkMode(checked);
		const root = document.documentElement;
		if (checked) {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		// Store preference in localStorage
		localStorage.setItem('theme', checked ? 'dark' : 'light');
	}

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
			<Card
				ref={modalRef}
				className="w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
			>
				<div className="p-6 border-b">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-xl font-semibold">Theme Editor</h2>
							<p className="text-sm text-muted-foreground mt-1">
								Edit CSS custom properties and semantic classes. Press CTRL-B to toggle.
							</p>
						</div>
						<div className="flex items-center gap-2">
							<Label htmlFor="dark-mode-toggle" className="text-sm font-medium">
								Dark Mode
							</Label>
							<Switch
								id="dark-mode-toggle"
								checked={isDarkMode}
								onCheckedChange={handleDarkModeToggle}
							/>
						</div>
					</div>
				</div>

				<div className="flex-1 p-6 overflow-y-auto">
					<div className="space-y-4">
						<div>
							<Label htmlFor="theme-css" className="text-sm font-medium">
								Theme Configuration (CSS)
							</Label>
							<Textarea
								id="theme-css"
								value={themeText}
								onChange={(e) => setThemeText(e.target.value)}
								placeholder="Paste your CSS theme here..."
								className="mt-2 min-h-[400px] font-mono text-sm"
							/>
						</div>

						{error && (
							<div className="text-sm text-destructive bg-destructive/10 p-3 rounded">
								{error}
							</div>
						)}
					</div>
				</div>

				<div className="p-6 border-t flex gap-2 justify-end">
					<Button variant="outline" onClick={handleReset}>
						Reset
					</Button>
					<Button variant="outline" onClick={onClose}>
						Cancel
					</Button>
					<Button onClick={handleApply}>
						Apply Theme
					</Button>
				</div>
			</Card>
		</div>
	);
}